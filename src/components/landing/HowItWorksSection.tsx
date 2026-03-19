import AnimatedSection from "@/components/AnimatedSection";
import styles from "./HowItWorksSection.module.css";

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
          <div className="section-header">
            <h2>Simple. Shared. Done.</h2>
            <p>Get your whole household in sync in under 60 seconds.</p>
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
            <a href="#download" className="btn btn--primary btn--large" id="how-it-works-cta">
              Download on the App Store
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
