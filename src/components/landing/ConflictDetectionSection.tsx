import AnimatedSection from "@/components/AnimatedSection";
import styles from "./ConflictDetectionSection.module.css";

export default function ConflictDetectionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* App UI Mockup */}
          <div className={styles.mockupCol}>
            <AnimatedSection>
              <div className={styles.phoneMockup}>
                <div className={styles.phoneHeader}>
                  <span className={styles.phoneMenu}>☰</span>
                  <span className={styles.phoneLogo}>Pawlo</span>
                  <div className={styles.phoneAvatar} />
                </div>
                <div className={styles.phoneContent}>
                  <div className={styles.alertCard}>
                    <div className={styles.alertRow}>
                      <span className={styles.alertIcon}>⚠️</span>
                      <div>
                        <p className={styles.alertTitle}>Conflict Detected!</p>
                        <p className={styles.alertMeta}>
                          Mom already fed Luna at 7:00 AM.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.routineCard}>
                    <p className={styles.routineLabel}>Morning Routine</p>
                    <div className={styles.routineRow}>
                      <p className={styles.routineItem}>Breakfast</p>
                      <span className={styles.routineCheck}>✓</span>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className={styles.floatingBadge}>
                  <span className={styles.pulseDot} />
                  <span>Action Prevented</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Text content */}
          <div className={styles.textCol}>
            <AnimatedSection delay={200}>
              <span className="label-tag">Conflict Detection</span>
              <h2 className={styles.heading}>
                The only pet app that{" "}
                <span className={styles.headingAccent}>stops you</span> from
                double-feeding.
              </h2>
              <p className={styles.description}>
                Communication gaps lead to overfed pets and health issues.
                Pawlo&apos;s proprietary conflict engine alerts household
                members in real-time if a task is already completed.
              </p>
              <ul className={styles.features}>
                <li>
                  <div className={styles.featureIcon}>⚡</div>
                  <span>Instant Sync across all devices</span>
                </li>
                <li>
                  <div className={styles.featureIcon}>🔔</div>
                  <span>Smart alerts for forgotten meals</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
