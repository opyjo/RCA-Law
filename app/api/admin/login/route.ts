import { NextResponse } from "next/server"
import { validatePassword, createSession } from "@/lib/auth"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { password } = body

    if (!password || typeof password !== "string") {
      return NextResponse.json(
        { error: "Password is required" },
        { status: 400 }
      )
    }

    const isValid = validatePassword(password)

    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      )
    }

    await createSession()

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "An error occurred" },
      { status: 500 }
    )
  }
}
