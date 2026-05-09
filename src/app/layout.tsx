import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pawlo — Shared Pet Care App for Couples, Families & Roommates",
  description:
    "Pawlo is the free shared pet care app that keeps your whole household in sync. Track feeding, walks, and medication together — so your pet is never double-fed or missed. Perfect for couples, families, and roommates. iOS — coming soon.",
  keywords: [
    "shared pet care app",
    "pet care tracker for couples",
    "pet care app for roommates",
    "dog feeding tracker",
    "did someone feed the dog app",
    "who fed the dog app",
    "household pet schedule app",
    "pet medication tracker",
    "family pet care app",
    "shared dog care app",
    "pet chore tracker",
    "pet routine tracker",
    "coordinate pet care with partner",
    "dog walking tracker multiple people",
    "pet care coordination app",
  ],
  alternates: {
    canonical: "https://getpawlo.app",
  },
  openGraph: {
    title: "Pawlo — Shared Pet Care App for Couples, Families & Roommates",
    description:
      "Never wonder if someone fed the pet again. Pawlo keeps your whole household in sync on feeding, walks, and meds — in real time.",
    url: "https://getpawlo.app",
    siteName: "Pawlo",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawlo — Shared Pet Care App for Couples, Families & Roommates",
    description:
      "Never wonder if someone fed the pet again. Pawlo keeps your whole household in sync on feeding, walks, and meds — in real time.",
    site: "@pawlohq",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

const schemaOrg = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Pawlo",
    description:
      "Pawlo is a shared pet care tracker for multi-person households. Couples, families, and roommates use Pawlo to coordinate feeding, walks, and medication so pets are never double-fed or missed.",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS",
    url: "https://getpawlo.app",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free plan available. Premium plan at $3.99/month.",
    },
    featureList: [
      "Real-time household sync",
      "Dog and cat feeding tracker",
      "Pet medication tracker",
      "Shared pet care for couples and roommates",
      "Streak and habit tracking",
      "Home screen widget",
      "Multi-pet support",
    ],
    screenshot: "https://getpawlo.app/screenshots/home.png",
  },
];

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
        {schemaOrg.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
