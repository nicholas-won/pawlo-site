import Image from "next/image";
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
          {/* Badge — no animation wrapper, renders immediately */}
          <div className={styles.badge}>
            <div className={styles.avatarStack}>
              <div className={styles.avatar}>🐕</div>
              <div className={styles.avatar}>🐈</div>
              <div className={styles.avatar}>🐾</div>
            </div>
            <span className={styles.badgeText}>Now available on the App Store</span>
          </div>

          {/* H1 — no animation wrapper, renders immediately (LCP element on mobile) */}
          <h1 className={styles.headline}>
            Never wonder if someone{" "}
            <span className={styles.highlight}>fed the pet.</span>
          </h1>

          {/* Subheadline — no animation wrapper */}
          <p className={styles.subheadline}>
            Pawlo is the shared pet care app for couples, families, and
            roommates. Track feeding, walks, and medication across your whole
            household — so your pet is never double-fed or missed.
          </p>

          {/* CTA — subtle animation is fine here */}
          <AnimatedSection delay={150}>
            <div className={styles.ctaStack}>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.appStoreBadge}
                id="hero-appstore-cta"
              >
                <Image
                  src="/appstore-badge-black.svg"
                  alt="Download on the App Store"
                  width={156}
                  height={52}
                  className={styles.appStoreImg}
                />
              </a>
              <p className={styles.formNote}>
                Free to download. No credit card required.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Phone Mockup — no AnimatedSection (LCP image, must be immediately visible) */}
        <div className={styles.heroVisual}>
          <div className={styles.phoneWrap}>
            <div className={styles.phoneMockup}>
              <div className={styles.phoneScreen}>
                <Image
                  src="/screenshots/home.png"
                  alt="Pawlo home screen showing pet care tasks"
                  className={styles.phoneScreenImg}
                  width={390}
                  height={844}
                  priority
                  sizes="(max-width: 768px) 280px, 320px"
                />
              </div>
            </div>

            <div className={styles.floatingCard}>
              <div className={styles.floatingIcon}>🔥</div>
              <div>
                <div className={styles.floatingTitle}>7-day streak!</div>
                <div className={styles.floatingMeta}>Max · Keep it up!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
