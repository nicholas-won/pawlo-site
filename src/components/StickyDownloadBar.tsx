"use client";

import { useEffect, useState } from "react";
import styles from "./StickyDownloadBar.module.css";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/pawlo-pet-care-tracker/id6762538892";

export default function StickyDownloadBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${styles.bar} ${visible ? styles.visible : ""}`}
      aria-hidden={!visible}
    >
      <div className={styles.copy}>
        <span className={styles.title}>Pawlo</span>
        <span className={styles.subtitle}>Free for 7 days</span>
      </div>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cta}
        id="sticky-appstore-cta"
        tabIndex={visible ? 0 : -1}
      >
        Get the app
      </a>
    </div>
  );
}
