"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import ConflictDetectionSection from "@/components/landing/ConflictDetectionSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import FinalCTASection from "@/components/landing/FinalCTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ConflictDetectionSection />
        <FeaturesSection />
        <SocialProofSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
