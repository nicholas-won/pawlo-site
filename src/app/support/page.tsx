import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportContent from "./SupportContent";
import styles from "./support.module.css";

export const metadata: Metadata = {
  title: "Support & FAQ — Pawlo Shared Pet Care App",
  description:
    "Get help with Pawlo — the shared pet care app for couples, families, and roommates. Find answers about getting started, how tasks and streaks work, subscriptions, and troubleshooting.",
  alternates: {
    canonical: "https://getpawlo.app/support",
  },
  openGraph: {
    title: "Support & FAQ — Pawlo Shared Pet Care App",
    description:
      "Answers to common questions about Pawlo — the shared pet care tracker for households.",
    url: "https://getpawlo.app/support",
    siteName: "Pawlo",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I create a household in Pawlo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After signing up, tap 'Create Household' from the home screen. Give your household a name, add your pet(s), and you're ready to go. You can invite other members immediately or do it later.",
      },
    },
    {
      "@type": "Question",
      name: "How do I invite roommates or family to share pet care?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Go to Settings → Household → Invite Members. You'll get a shareable link you can send via text, email, or any messaging app. Anyone with the link can join your household instantly.",
      },
    },
    {
      "@type": "Question",
      name: "How does real-time pet task sync work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When you complete a task in Pawlo, everyone in your household sees it update instantly with your name and timestamp. There's no refresh needed — changes appear in real time across all devices.",
      },
    },
    {
      "@type": "Question",
      name: "How do streaks work in Pawlo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your household earns a streak for each consecutive day all daily tasks are completed. Streaks reset if any required task is missed for a full day. It's a fun way to keep everyone accountable and build healthy pet care habits.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in the Pawlo free plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The free plan includes: 1 pet profile, unlimited household members, daily task tracking, conflict detection, household streaks, and last-fed history. It's fully functional for households with one pet.",
      },
    },
    {
      "@type": "Question",
      name: "What does Pawlo Premium include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Premium ($3.99/month or $24.99/year) adds: unlimited pet profiles, home screen widgets, smart reminders, full care history, custom task types, and priority support. You can try Premium free for 7 days.",
      },
    },
    {
      "@type": "Question",
      name: "How do I cancel my Pawlo subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open the Settings app on your iPhone → tap your name → Subscriptions → select Pawlo → Cancel Subscription. Your Premium features remain active until the end of your current billing period.",
      },
    },
    {
      "@type": "Question",
      name: "Why aren't tasks syncing across devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Make sure all devices are connected to the internet. Try pulling down on the task list to force a refresh. If the issue persists, try signing out and back in. Contact contact@getpawlo.app if the problem continues.",
      },
    },
  ],
};

export default function SupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.header}>
            <h1>Support & FAQ</h1>
            <p>Find answers to common questions. Need more help? Contact us at <a href="mailto:contact@getpawlo.app">contact@getpawlo.app</a>.</p>
          </div>
          <SupportContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
