import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const SESSION_COOKIE_NAME = "admin_session"

// Protected routes that require admin auth
const PROTECTED_PATHS = ["/legal-assistant", "/api/legal-chat"]

async function verifySession(cookieValue: string, adminPassword: string): Promise<boolean> {
  if (!cookieValue || !adminPassword) return false

  const lastDotIndex = cookieValue.lastIndexOf(".")
  if (lastDotIndex === -1) return false

  const payload = cookieValue.substring(0, lastDotIndex)
  const signature = cookieValue.substring(lastDotIndex + 1)

  // Derive the secret key using Web Crypto API (Edge-compatible)
  const encoder = new TextEncoder()
  const secretData = encoder.encode(`rca-law-session-salt:${adminPassword}`)
  const secretHashBuffer = await crypto.subtle.digest("SHA-256", secretData)
  const secretHex = Array.from(new Uint8Array(secretHashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")

  // Sign the payload using HMAC-SHA256 via Web Crypto API
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secretHex),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  )
  const signatureBuffer = await crypto.subtle.sign("HMAC", key, encoder.encode(payload))
  const expectedSignature = Array.from(new Uint8Array(signatureBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")

  // Compare signatures (constant-time-ish using string comparison after computing)
  if (signature !== expectedSignature) return false

  try {
    const data = JSON.parse(payload)
    if (data.role !== "admin") return false
    if (Date.now() > data.exp) return false
    return true
  } catch {
    return false
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path is protected
  const isProtected = PROTECTED_PATHS.some(
    (path) => pathname === path || pathname.startsWith(path + "/")
  )

  if (!isProtected) return NextResponse.next()

  // Check session cookie
  const sessionCookie = request.cookies.get(SESSION_COOKIE_NAME)?.value
  const adminPassword = process.env.ADMIN_PASSWORD || ""
  const isValid = sessionCookie ? await verifySession(sessionCookie, adminPassword) : false

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
