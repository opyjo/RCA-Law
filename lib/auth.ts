import { cookies } from "next/headers"
import crypto from "crypto"

const SESSION_COOKIE_NAME = "admin_session"
const SESSION_DURATION = 60 * 60 * 24 // 24 hours in seconds

function getSecretKey(): string {
  // Use ADMIN_PASSWORD as a seed for signing (combined with a static salt)
  const password = process.env.ADMIN_PASSWORD
  if (!password) throw new Error("ADMIN_PASSWORD environment variable is not set")
  return crypto.createHash("sha256").update(`rca-law-session-salt:${password}`).digest("hex")
}

function signToken(payload: string): string {
  const secret = getSecretKey()
  const hmac = crypto.createHmac("sha256", secret)
  hmac.update(payload)
  const signature = hmac.digest("hex")
  return `${payload}.${signature}`
}

function verifyToken(token: string): string | null {
  const lastDotIndex = token.lastIndexOf(".")
  if (lastDotIndex === -1) return null

  const payload = token.substring(0, lastDotIndex)
  const signature = token.substring(lastDotIndex + 1)

  const secret = getSecretKey()
  const hmac = crypto.createHmac("sha256", secret)
  hmac.update(payload)
  const expectedSignature = hmac.digest("hex")

  // Timing-safe comparison
  if (signature.length !== expectedSignature.length) return null
  const sigBuffer = Buffer.from(signature, "hex")
  const expectedBuffer = Buffer.from(expectedSignature, "hex")
  if (sigBuffer.length !== expectedBuffer.length) return null
  if (!crypto.timingSafeEqual(sigBuffer, expectedBuffer)) return null

  return payload
}

export function validatePassword(password: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) return false

  // Timing-safe comparison to prevent timing attacks
  const inputBuffer = Buffer.from(password)
  const storedBuffer = Buffer.from(adminPassword)

  if (inputBuffer.length !== storedBuffer.length) return false
  return crypto.timingSafeEqual(inputBuffer, storedBuffer)
}

export async function createSession(): Promise<void> {
  const expiresAt = Date.now() + SESSION_DURATION * 1000
  const payload = JSON.stringify({ role: "admin", exp: expiresAt })
  const token = signToken(payload)

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

  const payload = verifyToken(token)
  if (!payload) return false

  try {
    const data = JSON.parse(payload)
    if (data.role !== "admin") return false
    if (Date.now() > data.exp) return false
    return true
  } catch {
    return false
  }
}

/**
 * Verify session from a raw cookie header string (for use in middleware)
 */
export function verifySessionFromCookie(cookieHeader: string): boolean {
  const cookies = cookieHeader.split(";").map((c) => c.trim())
  const sessionCookie = cookies.find((c) => c.startsWith(`${SESSION_COOKIE_NAME}=`))
  if (!sessionCookie) return false

  const token = sessionCookie.split("=").slice(1).join("=")
  const payload = verifyToken(token)
  if (!payload) return false

  try {
    const data = JSON.parse(payload)
    if (data.role !== "admin") return false
    if (Date.now() > data.exp) return false
    return true
  } catch {
    return false
  }
}
