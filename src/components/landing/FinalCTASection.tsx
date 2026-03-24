"use client";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./FinalCTASection.module.css";

export default function FinalCTASection() {
  return (
    <section className={styles.section} id="waitlist">
      <div className={styles.inner}>
        <AnimatedSection>
          <div className={styles.card}>
            <div className={styles.content}>
              <span className={styles.badge}>Coming Soon to iOS</span>
              <h2 className={styles.heading}>
                Your pet&apos;s new{" "}
                <span className={styles.accent}>safe space.</span>
              </h2>
              <div className={styles.ctaGroup}>
                <a
                  href="#hero"
                  className={styles.ctaButton}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("prelaunch-email")?.focus();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <span className={styles.ctaIcon}>📱</span>
                  <span>Join the Beta</span>
                </a>
                <p className={styles.ctaNote}>
                  Strictly limited to first 1,000 users.
                </p>
              </div>
            </div>
            <div className={styles.bgGlow} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
