import AnimatedSection from "@/components/AnimatedSection";
import styles from "./ProblemSection.module.css";

const scenarios = [
  {
    emoji: "🤔",
    title: '"Did you feed the dog?"',
    description: "The daily text nobody wants to send.",
  },
  {
    emoji: "😱",
    title: '"I thought you fed her!"',
    description: "Two dinners later, your vet has questions.",
  },
  {
    emoji: "😤",
    title: '"I always do everything!"',
    description: "The argument that never gets resolved.",
  },
];

export default function ProblemSection() {
  return (
    <section className={`section section--gray ${styles.problem}`}>
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <h2>Sound familiar?</h2>
            <p>These conversations happen in millions of pet households every day.</p>
          </div>
        </AnimatedSection>
        <div className={styles.grid}>
          {scenarios.map((s, i) => (
            <AnimatedSection key={i} delay={i * 150}>
              <div className={`card ${styles.card}`}>
                <span className={styles.emoji}>{s.emoji}</span>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.desc}>{s.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
