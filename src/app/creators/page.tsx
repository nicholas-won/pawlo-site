import type { Metadata } from "next";
import CreatorsContent from "./CreatorsContent";

export const metadata: Metadata = {
  title: "Affiliate Program — Earn with Pawlo",
  description:
    "Join Pawlo's affiliate program and earn recurring commissions promoting an app pet parents love. 25–30% commission, free lifetime Premium, and real-time earnings dashboard.",
  alternates: {
    canonical: "https://getpawlo.app/creators",
  },
  openGraph: {
    title: "Affiliate Program — Earn with Pawlo",
    description:
      "Earn every time a pet household subscribes. Join Pawlo's affiliate program — promote an app pet parents love and earn recurring commissions.",
    url: "https://getpawlo.app/creators",
    siteName: "Pawlo",
  },
};

export default function CreatorsPage() {
  return <CreatorsContent />;
}
