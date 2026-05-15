"use client";

import AnimatedSection from "@/components/AnimatedSection";
import styles from "./HeroSection.module.css";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/pawlo-pet-care-tracker/id6762538892";

export default function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.inner}>
        <div className={styles.content}>
          <AnimatedSection>
            <div className={styles.badge}>
              <div className={styles.avatarStack}>
                <div className={styles.avatar}>🐕</div>
                <div className={styles.avatar}>🐈</div>
                <div className={styles.avatar}>🐾</div>
              </div>
              <span className={styles.badgeText}>Now available on the App Store</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className={styles.headline}>
              Never wonder if someone{" "}
              <span className={styles.highlight}>fed the pet.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className={styles.subheadline}>
              Pawlo is the shared pet care app for couples, families, and
              roommates. Track feeding, walks, and medication across your whole
              household — so your pet is never double-fed or missed.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className={styles.ctaStack}>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.appStoreBadge}
                id="hero-appstore-cta"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/appstore-badge-black.svg"
                  alt="Download on the App Store"
                  className={styles.appStoreImg}
                />
              </a>

              <p className={styles.formNote}>
                Free to download. No credit card required.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Live Phone Mockup */}
        <AnimatedSection delay={400} className={styles.heroVisual}>
          <div className={styles.phoneWrap}>
            <div className={styles.phoneMockup}>
              <div className={styles.phoneScreen}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/home.png"
                  alt="Pawlo home screen showing pet care tasks"
                  className={styles.phoneScreenImg}
                />
              </div>
            </div>

            {/* Floating streak card */}
            <div className={styles.floatingCard}>
              <div className={styles.floatingIcon}>🔥</div>
              <div>
                <div className={styles.floatingTitle}>7-day streak!</div>
                <div className={styles.floatingMeta}>Max · Keep it up!</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
