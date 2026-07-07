"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./FAQSection.module.css";
import { faqs } from "./faqData";

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
