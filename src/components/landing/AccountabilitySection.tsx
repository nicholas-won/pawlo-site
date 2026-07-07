import AnimatedSection from "@/components/AnimatedSection";
import styles from "./AccountabilitySection.module.css";

const week = [
  { name: "Sarah", tasks: 14, width: "100%", tone: "mustard" },
  { name: "Mike", tasks: 8, width: "57%", tone: "coral" },
];

export default function AccountabilitySection() {
  return (
    <section className={styles.section} id="accountability">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Text content */}
          <div className={styles.textCol}>
            <AnimatedSection>
              <span className="label-tag">Household Accountability</span>
              <h2 className={styles.heading}>
                Finally see who{" "}
                <span className={styles.headingAccent}>actually does more.</span>
              </h2>
              <p className={styles.description}>
                In every pet household, someone quietly suspects they do more —
                but can&apos;t prove it. Pawlo makes the invisible work visible.
                Every task shows who did it and when, and every week gets a
                simple, factual summary.
              </p>
              <ul className={styles.features}>
                <li>
                  <div className={styles.featureIcon}>✅</div>
                  <span>
                    Every task is attributed — &ldquo;Last fed by Sarah &middot;
                    6:28 AM&rdquo;
                  </span>
                </li>
                <li>
                  <div className={styles.featureIcon}>📊</div>
                  <span>Weekly contribution summary for the whole household</span>
                </li>
                <li>
                  <div className={styles.featureIcon}>🔔</div>
                  <span>
                    Instant updates — no more &ldquo;did you feed the dog?&rdquo;
                    texts
                  </span>
                </li>
              </ul>
            </AnimatedSection>
          </div>

          {/* Weekly summary visual */}
          <div className={styles.visualCol}>
            <AnimatedSection delay={200}>
              <div className={styles.summaryCard}>
                <div className={styles.summaryEyebrow}>This week</div>
                <div className={styles.summaryTitle}>
                  Max&apos;s care · 22 tasks done
                </div>
                <div className={styles.bars}>
                  {week.map((person) => (
                    <div className={styles.barRow} key={person.name}>
                      <div className={styles.barLabel}>
                        <span className={styles.barName}>{person.name}</span>
                        <span className={styles.barCount}>
                          {person.tasks} tasks
                        </span>
                      </div>
                      <div className={styles.barTrack}>
                        <div
                          className={`${styles.barFill} ${
                            person.tone === "coral"
                              ? styles.barFillCoral
                              : styles.barFillMustard
                          }`}
                          style={{ width: person.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.summaryFoot}>
                  Sarah handled 64% of care this week
                </div>
              </div>
              <div className={styles.attributionChip}>
                <span className={styles.chipCheck}>✓</span>
                <span>
                  Morning Feed — <strong>done by Sarah</strong> · 6:28 AM
                </span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
