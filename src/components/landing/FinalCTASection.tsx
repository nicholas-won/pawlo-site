import AnimatedSection from "@/components/AnimatedSection";
import styles from "./FinalCTASection.module.css";

export default function FinalCTASection() {
  return (
    <section className={styles.finalCta} id="download">
      <div className={styles.bg}>
        <div className={styles.bgOrb1}></div>
        <div className={styles.bgOrb2}></div>
      </div>
      <div className={`container ${styles.inner}`}>
        <AnimatedSection>
          <div className={styles.content}>
            <span className={styles.emoji}>🐾</span>
            <h2 className={styles.headline}>
              Your pet deserves a household that&apos;s in sync.
            </h2>
            <p className={styles.subheadline}>
              Set up in 60 seconds. Free forever for one pet.
            </p>
            <a
              href="#"
              className={`btn btn--large ${styles.ctaBtn}`}
              id="final-download-cta"
            >
              <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor">
                <path d="M16.52 12.88c-.028-2.997 2.447-4.434 2.558-4.504-1.393-2.038-3.563-2.317-4.335-2.348-1.843-.188-3.604 1.088-4.54 1.088-.95 0-2.41-1.063-3.964-1.034C4.264 6.112 2.413 7.19 1.39 8.89c-2.082 3.614-.532 8.963 1.494 11.897.994 1.437 2.176 3.05 3.729 2.993 1.497-.06 2.063-.968 3.874-.968 1.8 0 2.31.968 3.89.936 1.612-.028 2.633-1.462 3.614-2.907 1.14-1.667 1.608-3.28 1.634-3.363-.036-.016-3.135-1.203-3.166-4.77h.04z"/>
                <path d="M13.608 4.205c.824-1.002 1.382-2.392 1.23-3.781-1.19.049-2.632.794-3.484 1.794-.764.884-1.434 2.3-1.254 3.658 1.327.103 2.683-.675 3.508-1.671z"/>
              </svg>
              Download on the App Store
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
