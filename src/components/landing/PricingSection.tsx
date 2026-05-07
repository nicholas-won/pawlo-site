import AnimatedSection from "@/components/AnimatedSection";
import styles from "./PricingSection.module.css";

const freePlan = {
  name: "Free",
  price: "$0",
  period: "forever",
  description: "Everything you need for one pet.",
  features: [
    "1 pet profile",
    "Unlimited household members",
    "Daily task tracking",
    "Conflict Detection",
    "Household streaks",
    "\"Last fed by\" history",
  ],
  cta: "Start Free",
  highlight: false,
};

const premiumPlan = {
  name: "Premium",
  price: "$3.99",
  period: "/month",
  yearlyPrice: "$24.99/year — billed annually",
  description: "Unlock the full Pawlo experience.",
  features: [
    "Everything in Free, plus:",
    "Unlimited pet profiles",
    "Home screen widgets",
    "Smart reminders",
    "Full care history",
    "Custom task types",
    "Priority support",
  ],
  cta: "Try Premium Free for 7 Days",
  highlight: true,
};

export default function PricingSection() {
  return (
    <section className={`section section--gray ${styles.pricing}`} id="pricing">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <h2>Free for your whole household.</h2>
            <p>No hidden fees. No ads. Start managing pet care today.</p>
          </div>
        </AnimatedSection>
        <div className={styles.cards}>
          <AnimatedSection delay={100}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{freePlan.name}</h3>
                <div className={styles.priceWrap}>
                  <span className={styles.price}>{freePlan.price}</span>
                  <span className={styles.period}>{freePlan.period}</span>
                </div>
                <p className={styles.planDesc}>{freePlan.description}</p>
              </div>
              <ul className={styles.featureList}>
                {freePlan.features.map((f, i) => (
                  <li key={i}>
                    <span className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#download" className={`btn btn--secondary ${styles.planCta}`} id="pricing-free-cta">
                {freePlan.cta}
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={250}>
            <div className={`${styles.card} ${styles.cardHighlight}`}>
              <div className={styles.popularBadge}>Most Popular</div>
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{premiumPlan.name}</h3>
                <div className={styles.priceWrap}>
                  <span className={styles.price}>{premiumPlan.price}</span>
                  <span className={styles.period}>{premiumPlan.period}</span>
                </div>
                <p className={styles.yearlyPrice}>{premiumPlan.yearlyPrice} — save 30%</p>
                <p className={styles.planDesc}>{premiumPlan.description}</p>
              </div>
              <ul className={styles.featureList}>
                {premiumPlan.features.map((f, i) => (
                  <li key={i}>
                    <span className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#download" className={`btn btn--primary ${styles.planCta}`} id="pricing-premium-cta">
                {premiumPlan.cta}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
