import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const SESSION_COOKIE_NAME = "admin_session"
const PROTECTED_PATHS = ["/legal-assistant", "/api/legal-chat"]

/**
 * Generates the expected session token using Web Crypto API (Edge-compatible).
 * Must produce the same output as lib/auth.ts getSessionToken() which uses Node crypto.
 */
async function getExpectedToken(adminPassword: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(`rca-law-admin-session:${adminPassword}`)
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isProtected = PROTECTED_PATHS.some(
    (path) => pathname === path || pathname.startsWith(path + "/")
  )

  if (!isProtected) return NextResponse.next()

  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 })
    }
    const loginUrl = new URL("/admin/login", request.url)
    return NextResponse.redirect(loginUrl)
  }

  const sessionCookie = request.cookies.get(SESSION_COOKIE_NAME)?.value
  const expectedToken = await getExpectedToken(adminPassword)
  const isValid = sessionCookie === expectedToken

  if (!isValid) {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    const loginUrl = new URL("/admin/login", request.url)
    loginUrl.searchParams.set("redirect", pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/legal-assistant/:path*", "/api/legal-chat/:path*"],
}
