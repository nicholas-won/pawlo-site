"use client";

import FAQAccordion from "@/components/FAQAccordion";
import styles from "./support.module.css";

const categories = [
  {
    title: "Getting Started",
    emoji: "🚀",
    items: [
      {
        question: "How do I create a household?",
        answer: "After signing up, tap 'Create Household' from the home screen. Give your household a name, add your pet(s), and you're ready to go. You can invite other members immediately or do it later.",
      },
      {
        question: "How do I invite members to my household?",
        answer: "Go to Settings → Household → Invite Members. You'll get a shareable link that you can send via text, email, or any messaging app. Anyone with the link can join your household instantly.",
      },
      {
        question: "How do I add a pet?",
        answer: "From the home screen, tap the '+' button and select 'Add Pet.' Enter your pet's name, type (dog, cat, etc.), and optionally add a photo. You can also set up default tasks for your pet during this step.",
      },
      {
        question: "Can I be part of multiple households?",
        answer: "Yes! Premium users can join multiple households. This is useful if you help care for pets at different locations, like a parent's house or a friend's pet.",
      },
    ],
  },
  {
    title: "Using the App",
    emoji: "📱",
    items: [
      {
        question: "How do tasks work?",
        answer: "Tasks are the core of Pawlo. Each task represents a pet care activity (feeding, walking, medication, etc.). When you complete a task, tap the checkmark. Everyone in your household sees it update in real-time with your name and the timestamp.",
      },
      {
        question: "What is Conflict Detection?",
        answer: "Conflict Detection is Pawlo's signature feature. If someone in your household has already completed a task (like feeding), and another person tries to mark it done again, Pawlo will show a warning: 'Already done by [name] at [time].' This prevents double-feeding and double-medicating, which can be dangerous for your pet.",
      },
      {
        question: "How do streaks work?",
        answer: "Your household earns a streak for each consecutive day all daily tasks are completed. Streaks reset if any required task is missed for a full day. It's a fun way to keep everyone accountable!",
      },
      {
        question: "What are widgets?",
        answer: "Widgets let you see your pet's task status right from your iPhone home screen without opening the app. You can see which tasks are done, what's pending, and who last completed a task. Widgets are available on the Premium plan.",
      },
    ],
  },
  {
    title: "Subscription & Billing",
    emoji: "💳",
    items: [
      {
        question: "What's included in the free plan?",
        answer: "The free plan includes: 1 pet profile, unlimited household members, daily task tracking, Conflict Detection, household streaks, and 'Last fed by' history. It's fully functional for households with one pet.",
      },
      {
        question: "What does Premium include?",
        answer: "Premium ($3.99/month or $24.99/year) adds: unlimited pet profiles, home screen widgets, smart reminders, full care history, custom task types, and priority support. You can try Premium free for 7 days.",
      },
      {
        question: "How do I cancel my subscription?",
        answer: "Open the Settings app on your iPhone → tap your name → Subscriptions → select Pawlo → Cancel Subscription. Your Premium features will remain active until the end of your current billing period.",
      },
      {
        question: "How do I restore my purchase on a new device?",
        answer: "Sign in with the same Apple ID you used to subscribe. Go to Pawlo Settings → Subscription → Restore Purchases. Your Premium access will be restored automatically.",
      },
    ],
  },
  {
    title: "Troubleshooting",
    emoji: "🔧",
    items: [
      {
        question: "Tasks aren't syncing across devices",
        answer: "Make sure all devices are connected to the internet. Try pulling down on the task list to force a refresh. If the issue persists, try signing out and back in. If you're still having trouble, contact us at hello@getpawlo.app.",
      },
      {
        question: "I'm not receiving notifications",
        answer: "Go to iPhone Settings → Pawlo → Notifications and make sure they're enabled. Also check that 'Do Not Disturb' is off. In the Pawlo app, go to Settings → Notifications to customize which alerts you receive.",
      },
      {
        question: "How do I delete my account?",
        answer: "Go to Pawlo Settings → Account → Delete Account. This will permanently delete your account and all associated data. If you're the only member of a household, the household and its data will also be deleted. This action cannot be undone.",
      },
      {
        question: "The app is crashing or running slowly",
        answer: "Make sure you're running the latest version of Pawlo and iOS. Try force-closing the app and reopening it. If the problem continues, delete and reinstall the app (your data is backed up to your account). Contact us if issues persist.",
      },
    ],
  },
];

export default function SupportContent() {
  return (
    <div className={styles.categories}>
      {categories.map((cat, i) => (
        <div key={i} className={styles.category}>
          <h2 className={styles.categoryTitle}>
            <span>{cat.emoji}</span> {cat.title}
          </h2>
          <FAQAccordion items={cat.items} />
        </div>
      ))}

      <div className={styles.contact}>
        <h2>Still need help?</h2>
        <p>
          We&apos;re here for you. Send us an email and we&apos;ll get back to you within
          48 hours.
        </p>
        <a href="mailto:hello@getpawlo.app" className="btn btn--primary">
          Contact Support
        </a>
      </div>
    </div>
  );
}
