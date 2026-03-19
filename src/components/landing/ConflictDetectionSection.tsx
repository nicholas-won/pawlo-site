import AnimatedSection from "@/components/AnimatedSection";
import styles from "./ConflictDetectionSection.module.css";

export default function ConflictDetectionSection() {
  return (
    <section className={`section ${styles.conflict}`}>
      <div className={`container ${styles.inner}`}>
        <AnimatedSection className={styles.imageWrap}>
          <div className={styles.mockupFrame}>
            <img
              src="/mockup-conflict.png"
              alt="Conflict Detection warning: Max was already fed by Sarah"
              className={styles.mockup}
              width={360}
              height={360}
            />
          </div>
        </AnimatedSection>
        <AnimatedSection delay={200} className={styles.content}>
          <div className={styles.badge}>
            ⚡ What makes Pawlo different
          </div>
          <h2 className={styles.headline}>
            The only pet app that stops you from{" "}
            <span className={styles.highlight}>double-feeding.</span>
          </h2>
          <p className={styles.desc}>
            Pawlo doesn&apos;t just track tasks — it actively prevents mistakes.
            If someone tries to feed your pet twice, Pawlo catches it in
            real-time.
          </p>
          <p className={styles.descEmphasis}>
            For medication, it could save your pet&apos;s life.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>⚠️</span>
              <span>Real-time duplicate detection</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>💊</span>
              <span>Medication safety alerts</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>👀</span>
              <span>See who did what and when</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
