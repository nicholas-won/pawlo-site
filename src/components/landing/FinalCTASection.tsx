import AnimatedSection from "@/components/AnimatedSection";
import styles from "./FinalCTASection.module.css";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/pawlo-pet-care-tracker/id6762538892";

export default function FinalCTASection() {
  return (
    <section className={styles.section} id="download">
      <div className={styles.inner}>
        <AnimatedSection>
          <div className={styles.card}>
            <div className={styles.content}>
              <span className={styles.badge}>Available Now</span>
              <h2 className={styles.heading}>
                Your pet&apos;s new{" "}
                <span className={styles.accent}>safe space.</span>
              </h2>

              <div className={styles.ctaGroup}>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.appStoreBadge}
                  id="final-cta-appstore"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/appstore-badge-white.svg"
                    alt="Download on the App Store"
                    className={styles.appStoreImg}
                  />
                </a>

                <p className={styles.ctaNote}>
                  Free to download · No credit card required
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
