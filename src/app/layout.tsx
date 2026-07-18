import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

function stringifyJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const metadata: Metadata = {
  metadataBase: new URL("https://getpawlo.app"),
  title: "Pawlo — Shared Pet Care App for Couples, Families & Roommates",
  description:
    "Pawlo is the shared pet care app that keeps your whole household in sync. Track feeding, walks, and medication together — so your pet is never double-fed or missed. Perfect for couples, families, and roommates. Available now on iOS.",
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
  itunes: {
    appId: "6762538892",
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
    downloadUrl:
      "https://apps.apple.com/us/app/pawlo-pet-care-tracker/id6762538892",
    installUrl:
      "https://apps.apple.com/us/app/pawlo-pet-care-tracker/id6762538892",
    offers: {
      "@type": "Offer",
      price: "3.99",
      priceCurrency: "USD",
      description: "7-day free trial. Plans start at $3.99/month.",
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
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        {schemaOrg.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(schema) }}
          />
        ))}
      </head>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
        <Script
          src="https://aromatic-caribou-889.convex.site/api/a/am_g7RQKc_UFDyaufnU"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
