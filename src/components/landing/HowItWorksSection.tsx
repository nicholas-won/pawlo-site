import AnimatedSection from "@/components/AnimatedSection";
import styles from "./HowItWorksSection.module.css";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/pawlo-pet-care-tracker/id6762538892";

const steps = [
  {
    number: "1",
    icon: "🐾",
    title: "Set up your pet and tasks",
    description: "Add your pet, customize feeding, walking, and medication tasks in seconds.",
  },
  {
    number: "2",
    icon: "👥",
    title: "Invite your household",
    description: "Share a simple link — roommates, partners, family, dog walkers. Everyone joins instantly.",
  },
  {
    number: "3",
    icon: "✅",
    title: "Tap when it's done",
    description: "One tap marks a task complete. Everyone sees it in real-time. No more guessing.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className={`section ${styles.howItWorks}`} id="how-it-works">
      <div className="container">
        <AnimatedSection>
          <div className={`section-header ${styles.sectionHeader}`}>
            <span className={styles.labelTag}>Simple. Shared. Done.</span>
            <h2 className={styles.heading}>Get your whole household<br/>in sync in under 60 seconds.</h2>
          </div>
        </AnimatedSection>
        <div className={styles.steps}>
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 200}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={700}>
          <div className={styles.ctaWrap}>
            <a href={APP_STORE_URL} className={styles.ctaBtn} id="how-it-works-cta" target="_blank" rel="noopener noreferrer">
              📱 Download Free on iOS
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
