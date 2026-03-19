import { NextRequest, NextResponse } from "next/server";

const KIT_API_KEY = process.env.KIT_API_KEY;
const KIT_FORM_ID = process.env.KIT_FORM_ID;

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

    if (!KIT_API_KEY) {
      console.error("[Subscribe] KIT_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    // Step 1: Create the subscriber in Kit
    const subscriberRes = await fetch("https://api.kit.com/v4/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Kit-Api-Key": KIT_API_KEY,
      },
      body: JSON.stringify({
        email_address: email,
      }),
    });

    if (!subscriberRes.ok) {
      const errorData = await subscriberRes.json().catch(() => ({}));
      console.error("[Subscribe] Kit API error:", subscriberRes.status, errorData);
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    const subscriberData = await subscriberRes.json();
    const subscriberId = subscriberData?.subscriber?.id;

    // Step 2: If a form ID is configured, add subscriber to the form
    if (KIT_FORM_ID && subscriberId) {
      const formRes = await fetch(
        `https://api.kit.com/v4/forms/${KIT_FORM_ID}/subscribers/${subscriberId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Kit-Api-Key": KIT_API_KEY,
          },
        }
      );

      if (!formRes.ok) {
        console.error("[Subscribe] Failed to add subscriber to form:", formRes.status);
        // Don't fail — subscriber was still created
      }
    }

    console.log(`[Subscribe] Successfully subscribed: ${email}`);

    return NextResponse.json(
      { message: "Successfully subscribed!", email },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Subscribe] Unexpected error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
