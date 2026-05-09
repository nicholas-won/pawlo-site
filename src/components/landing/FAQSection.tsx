"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./FAQSection.module.css";

const faqs = [
  {
    question: "Is there an app to see who fed the dog?",
    answer:
      "Yes — that's exactly what Pawlo is built for. The moment any household member marks a task done (feeding, walking, medication), everyone else sees it instantly with a name and timestamp. No more 'did you feed him?' texts.",
  },
  {
    question: "What's the best pet care app for couples and roommates?",
    answer:
      "Pawlo is designed specifically for multi-person households. Unlike generic reminder apps or group chats, Pawlo syncs pet tasks in real time between everyone so you always know what's been done — and who did it.",
  },
  {
    question: "How do I stop my pet from being double-fed?",
    answer:
      "Pawlo syncs completions instantly across all household members. The moment someone marks 'Morning Feed' done, everyone in the household sees it — preventing a second person from feeding the pet again.",
  },
  {
    question: "Is Pawlo free to use?",
    answer:
      "Yes. The Free plan covers one pet with unlimited household members. Pawlo Premium ($3.99/month or $24.99/year) unlocks unlimited pets, home screen widgets, smart reminders, and full care history.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.inner}>
        <AnimatedSection>
          <div className={styles.header}>
            <span className={styles.label}>Common questions</span>
            <h2 className={styles.heading}>Quick answers about Pawlo</h2>
          </div>
        </AnimatedSection>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 60}>
              <div className={`${styles.item} ${open === i ? styles.itemOpen : ""}`}>
                <button
                  className={styles.question}
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span>{faq.question}</span>
                  <span className={styles.chevron} aria-hidden="true">
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                {open === i && <p className={styles.answer}>{faq.answer}</p>}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={300}>
          <p className={styles.more}>
            Have a different question?{" "}
            <a href="/support" className={styles.moreLink}>
              See the full Support & FAQ →
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
