import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import crypto from "crypto"

const SESSION_COOKIE_NAME = "admin_session"

// Protected routes that require admin auth
const PROTECTED_PATHS = ["/legal-assistant", "/api/legal-chat"]

function getSecretKey(): string {
  const password = process.env.ADMIN_PASSWORD
  if (!password) return ""
  return crypto.createHash("sha256").update(`rca-law-session-salt:${password}`).digest("hex")
}

function verifySession(cookieValue: string): boolean {
  if (!cookieValue) return false

  const lastDotIndex = cookieValue.lastIndexOf(".")
  if (lastDotIndex === -1) return false

  const payload = cookieValue.substring(0, lastDotIndex)
  const signature = cookieValue.substring(lastDotIndex + 1)

  const secret = getSecretKey()
  if (!secret) return false

  const hmac = crypto.createHmac("sha256", secret)
  hmac.update(payload)
  const expectedSignature = hmac.digest("hex")

  // Timing-safe comparison
  if (signature.length !== expectedSignature.length) return false
  try {
    const sigBuffer = Buffer.from(signature, "hex")
    const expectedBuffer = Buffer.from(expectedSignature, "hex")
    if (sigBuffer.length !== expectedBuffer.length) return false
    if (!crypto.timingSafeEqual(sigBuffer, expectedBuffer)) return false
  } catch {
    return false
  }

  try {
    const data = JSON.parse(payload)
    if (data.role !== "admin") return false
    if (Date.now() > data.exp) return false
    return true
  } catch {
    return false
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path is protected
  const isProtected = PROTECTED_PATHS.some(
    (path) => pathname === path || pathname.startsWith(path + "/")
  )

  if (!isProtected) return NextResponse.next()

  // Check session cookie
  const sessionCookie = request.cookies.get(SESSION_COOKIE_NAME)?.value
  const isValid = sessionCookie ? verifySession(sessionCookie) : false

  if (!isValid) {
    // For API routes, return 401
    if (pathname.startsWith("/api/")) {
      return NextResponse.json(
        { error: "Unauthorized. Please log in as admin." },
        { status: 401 }
      )
    }

    // For pages, redirect to admin login
    const loginUrl = new URL("/admin/login", request.url)
    loginUrl.searchParams.set("redirect", pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/legal-assistant/:path*", "/api/legal-chat/:path*"],
}
