"use client";

import { useState } from "react";
import styles from "./FAQAccordion.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ items, className = "" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`${styles.accordion} ${className}`}>
      {items.map((item, i) => (
        <div
          key={i}
          className={`${styles.item} ${openIndex === i ? styles.open : ""}`}
        >
          <button className={styles.trigger} onClick={() => toggle(i)}>
            <span className={styles.question}>{item.question}</span>
            <span className={styles.icon}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          <div className={styles.content}>
            <div className={styles.answer}>{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
