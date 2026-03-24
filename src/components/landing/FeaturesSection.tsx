import AnimatedSection from "@/components/AnimatedSection";
import styles from "./FeaturesSection.module.css";

const features = [
  {
    title: "Real-time Sync",
    description:
      "Whether you're at work or in the yard, know exactly what's happening. Every paw-print update is shared instantly with the whole family.",
    icon: "🔄",
    span: "wide",
  },
  {
    title: "Conflict Detection",
    description:
      "Proprietary logic that flags duplicate actions before they happen. No more second dinners.",
    icon: "🛡️",
    span: "normal",
    variant: "blue",
    footer: "Family Security",
  },
  {
    title: "Healthy Streaks",
    description:
      "Gamify your pet's wellness. Maintain streaks for consistent walks and medication schedules.",
    icon: "🔥",
    span: "normal",
    variant: "primary",
  },
  {
    title: "Multi-Pet Support",
    description:
      "Manage all your furry friends from a single editorial dashboard. Custom profiles for each personality.",
    icon: "🐾",
    span: "wide",
    hasImage: true,
  },
];

export default function FeaturesSection() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.inner}>
        <AnimatedSection>
          <div className={styles.header}>
            <span className={styles.label}>Precision Care</span>
            <h2 className={styles.heading}>
              Designed for the modern pet household.
            </h2>
          </div>
        </AnimatedSection>

        <div className={styles.grid}>
          {features.map((feature, i) => (
            <AnimatedSection
              key={i}
              delay={i * 100}
              className={`${styles.card} ${
                feature.span === "wide" ? styles.cardWide : ""
              } ${
                feature.variant === "blue"
                  ? styles.cardBlue
                  : feature.variant === "primary"
                  ? styles.cardPrimary
                  : ""
              }`}
            >
              {feature.hasImage && (
                <div className={styles.cardImage}>
                  <img
                    src="/mockup-hero.png"
                    alt="Two pets"
                    className={styles.featureImg}
                  />
                </div>
              )}
              <div className={styles.cardContent}>
                <div className={styles.iconBox}>
                  <span>{feature.icon}</span>
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.description}</p>
                {feature.footer && (
                  <div className={styles.cardFooter}>
                    <span className={styles.footerLabel}>{feature.footer}</span>
                    <span className={styles.footerIcon}>🛡️</span>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
