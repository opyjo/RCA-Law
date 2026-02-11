import { NextResponse } from "next/server"
import { validatePassword, createSession } from "@/lib/auth"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { password } = body

    console.log("[v0] Login attempt received, password length:", password?.length)
    console.log("[v0] ADMIN_PASSWORD is set:", !!process.env.ADMIN_PASSWORD)

    if (!password || typeof password !== "string") {
      console.log("[v0] Password missing or not a string")
      return NextResponse.json(
        { error: "Password is required" },
        { status: 400 }
      )
    }

    const isValid = validatePassword(password)
    console.log("[v0] Password validation result:", isValid)

    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      )
    }

    await createSession()
    console.log("[v0] Session created successfully")

    return NextResponse.json({ success: true })
  } catch (err) {
    console.log("[v0] Login error:", err)
    return NextResponse.json(
      { error: "An error occurred" },
      { status: 500 }
    )
  }
}
