import AnimatedSection from "@/components/AnimatedSection";
import styles from "./SocialProofSection.module.css";

const households = [
  {
    emoji: "💑",
    title: "For couples",
    scenario: "“Did you feed her?” — asked from two rooms away, every night.",
    solution:
      "One shared checklist, synced in real time. When one of you marks dinner done, the other sees it instantly — no texts, no double-feeding.",
  },
  {
    emoji: "🏠",
    title: "For roommates",
    scenario: "Three people, one dog, and nobody sure whose turn it is.",
    solution:
      "Every walk and feeding is attributed by name and time, so the whole apartment can see what's done — and who's been carrying the load.",
    offset: true,
  },
  {
    emoji: "👨‍👩‍👧",
    title: "For families",
    scenario: "The kids swear they fed the cat. The cat disagrees.",
    solution:
      "Simple enough for kids to tap, clear enough for parents to trust. Meds and vet tasks get extra safeguards so nothing critical slips.",
  },
];

export default function SocialProofSection() {
  return (
    <section className={styles.section} id="households">
      <div className={styles.inner}>
        <AnimatedSection>
          <div className={styles.header}>
            <span className="label-tag">Who it&apos;s for</span>
            <h2 className={styles.heading}>
              Built for every kind of{" "}
              <span className={styles.accent}>household.</span>
            </h2>
            <p className={styles.subtitle}>
              94 million U.S. households own a pet — and most share the care
              between two or more people.
            </p>
          </div>
        </AnimatedSection>

        <div className={styles.grid}>
          {households.map((h, i) => (
            <AnimatedSection
              key={h.title}
              delay={i * 100}
              className={`${styles.card} ${h.offset ? styles.cardOffset : ""}`}
            >
              <div>
                <div className={styles.avatar}>{h.emoji}</div>
                <p className={styles.name}>{h.title}</p>
                <p className={styles.quote}>{h.scenario}</p>
              </div>
              <p className={styles.solution}>{h.solution}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
