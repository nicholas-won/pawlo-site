import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pawlo — Shared Pet Care Tracker for Households | Never Double-Feed Again",
  description:
    "Pawlo is a free iOS app that keeps your whole household in sync on pet care. One tap to mark feeding, walking, or medication done — everyone sees it instantly. The only app with Conflict Detection to prevent double-feeding.",
  keywords: [
    "pet feeding tracker",
    "shared pet care app",
    "did someone feed the dog",
    "pet routine tracker",
    "pet medication tracker",
    "family pet care",
  ],
  openGraph: {
    title: "Pawlo — Shared Pet Care Tracker for Households",
    description:
      "Keep your whole household in sync on pet care. One tap to mark it done — everyone sees it instantly.",
    url: "https://pawlo.app",
    siteName: "Pawlo",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawlo — Shared Pet Care Tracker for Households",
    description:
      "Keep your whole household in sync on pet care. One tap to mark it done — everyone sees it instantly.",
  },
  other: {
    // "apple-itunes-app": "app-id=YOUR_APP_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Pawlo",
              description:
                "The shared pet checklist for multi-person households.",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "iOS",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
