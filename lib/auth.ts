import { cookies } from "next/headers"
import crypto from "crypto"

const SESSION_COOKIE_NAME = "admin_session"
const SESSION_DURATION = 60 * 60 * 24 // 24 hours in seconds

/**
 * Creates a deterministic session token from the admin password.
 * This same token value is checked in middleware (Edge) and in auth check (Node).
 */
function getSessionToken(): string {
  const password = process.env.ADMIN_PASSWORD
  if (!password) throw new Error("ADMIN_PASSWORD environment variable is not set")
  return crypto.createHash("sha256").update(`rca-law-admin-session:${password}`).digest("hex")
}

export function validatePassword(password: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) return false

  const trimmedInput = password.trim()
  const trimmedStored = adminPassword.trim()

  const inputHash = crypto.createHash("sha256").update(trimmedInput).digest()
  const storedHash = crypto.createHash("sha256").update(trimmedStored).digest()

  return crypto.timingSafeEqual(inputHash, storedHash)
}

export async function createSession(): Promise<void> {
  const token = getSessionToken()

  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_DURATION,
    path: "/",
  })
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE_NAME)
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value
  if (!token) return false

  const expectedToken = getSessionToken()
  return token === expectedToken
}
