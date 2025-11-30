import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, practiceArea, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !practiceArea || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real application, you would send the email here
    // For now, we'll just log it and return success
    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      phone,
      practiceArea,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrate with email service (e.g., SendGrid, Resend, Nodemailer)
    // Example: await sendEmail({
    //   to: 'rcaattorneys@gmail.com',
    //   subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    //   html: `...`
    // })

    return NextResponse.json({ success: true, message: "Form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process form" }, { status: 500 })
  }
}
