import type { Metadata } from "next";
import AudiencePage from "@/components/audience/AudiencePage";
import { audiences, buildAudienceJsonLd } from "@/components/audience/audienceData";

const config = audiences.roommates;

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  alternates: {
    canonical: `https://getpawlo.app/${config.slug}`,
  },
  openGraph: {
    title: config.metaTitle,
    description: config.metaDescription,
    url: `https://getpawlo.app/${config.slug}`,
    siteName: "Pawlo",
  },
};

export default function RoommatesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildAudienceJsonLd(config)).replace(/</g, "\\u003c"),
        }}
      />
      <AudiencePage config={config} />
    </>
  );
}
