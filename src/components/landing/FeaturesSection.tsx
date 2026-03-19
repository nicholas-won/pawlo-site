import AnimatedSection from "@/components/AnimatedSection";
import styles from "./FeaturesSection.module.css";

const features = [
  {
    icon: "🔄",
    title: "Real-time sync",
    description: "Everyone sees updates instantly. No refreshing, no waiting.",
  },
  {
    icon: "🛡️",
    title: "Conflict Detection",
    description: "Stops double-feeding and double-medicating automatically.",
  },
  {
    icon: "🔥",
    title: "Streaks",
    description: "Build a daily pet care streak as a household. Stay consistent together.",
  },
  {
    icon: "👤",
    title: 'Last fed by ___',
    description: "Always know who did what and when. Full accountability.",
  },
  {
    icon: "📱",
    title: "Widgets",
    description: "See your pet's status right from your home screen.",
  },
  {
    icon: "🔔",
    title: "Smart Reminders",
    description: "Learns your routine and nudges when something's off.",
  },
];

export default function FeaturesSection() {
  return (
    <section className={`section ${styles.features}`} id="features">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <h2>Everything your household needs. Nothing it doesn&apos;t.</h2>
            <p>Simple tools that make pet care effortless for everyone.</p>
          </div>
        </AnimatedSection>
        <div className={styles.grid}>
          {features.map((f, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className={styles.card}>
                <div className={styles.iconWrap}>
                  <span className={styles.icon}>{f.icon}</span>
                </div>
                <h3 className={styles.title}>{f.title}</h3>
                <p className={styles.desc}>{f.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
