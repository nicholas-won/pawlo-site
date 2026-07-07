import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyDownloadBar from "@/components/StickyDownloadBar";
import { faqs } from "@/components/landing/faqData";
import TrustStrip from "@/components/TrustStrip";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import AccountabilitySection from "@/components/landing/AccountabilitySection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import StreaksSection from "@/components/landing/StreaksSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PricingSection from "@/components/landing/PricingSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />
        <ProblemSection />
        <AccountabilitySection />
        <FeaturesSection />
        <StreaksSection />
        <HowItWorksSection />
        <SocialProofSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <StickyDownloadBar />
      <Footer />
    </>
  );
}
