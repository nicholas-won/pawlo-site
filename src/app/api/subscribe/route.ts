import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // TODO: Replace with Mailchimp / ConvertKit integration
    console.log(`[Subscribe] New signup: ${email}`);

    return NextResponse.json(
      { message: "Successfully subscribed!", email },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
