import AnimatedSection from "@/components/AnimatedSection";
import styles from "./StreaksSection.module.css";

export default function StreaksSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Screenshot */}
          <div className={styles.mockupCol}>
            <AnimatedSection>
              <div className={styles.phoneMockupWrap}>
                <div className={styles.phoneMockup}>
                  <div className={styles.phoneScreen}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/screenshots/streak.png"
                      alt="Pawlo streak milestone screen"
                      className={styles.phoneImg}
                    />
                  </div>
                </div>
                <div className={styles.floatingBadge}>
                  <span className={styles.flameDot}>🔥</span>
                  <span>Milestone reached</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Text content */}
          <div className={styles.textCol}>
            <AnimatedSection delay={200}>
              <span className="label-tag">Habit Tracking</span>
              <h2 className={styles.heading}>
                Build care habits that{" "}
                <span className={styles.headingAccent}>stick.</span>
              </h2>
              <p className={styles.description}>
                Pawlo turns daily pet care into a shared household ritual.
                Track streaks, celebrate milestones, and keep everyone
                motivated — together.
              </p>
              <ul className={styles.features}>
                <li>
                  <div className={styles.featureIcon}>🔥</div>
                  <span>Daily streak tracking for every pet</span>
                </li>
                <li>
                  <div className={styles.featureIcon}>🎉</div>
                  <span>Milestone celebrations at 7, 30, and 100 days</span>
                </li>
                <li>
                  <div className={styles.featureIcon}>👥</div>
                  <span>Household-wide progress everyone can see</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
