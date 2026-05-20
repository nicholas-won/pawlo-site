import AnimatedSection from "@/components/AnimatedSection";
import styles from "./PricingSection.module.css";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/pawlo-pet-care-tracker/id6762538892";

const allFeatures = [
  "Unlimited pet profiles",
  "Unlimited household members",
  "Daily task tracking",
  "Conflict Detection",
  "Household streaks",
  "Home screen widgets",
  "Smart reminders",
  "Full care history",
  "Custom task types",
  "Priority support",
];

const plans = [
  {
    name: "Monthly",
    price: "$3.99",
    period: "/month",
    note: null,
    cta: "Try Free for 7 Days",
    highlight: false,
    badge: null,
    id: "pricing-monthly-cta",
  },
  {
    name: "Yearly",
    price: "$24.99",
    period: "/year",
    note: "Save 48%",
    cta: "Try Free for 7 Days",
    highlight: true,
    badge: "Best Value",
    id: "pricing-yearly-cta",
  },
  {
    name: "Lifetime",
    price: "$199.99",
    period: "one-time",
    note: "Pay once, own forever",
    cta: "Lock in Lifetime Access",
    highlight: false,
    badge: "🚀 Launch Special",
    id: "pricing-lifetime-cta",
  },
];

export default function PricingSection() {
  return (
    <section className={`section section--gray ${styles.pricing}`} id="pricing">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <h2>One plan. Full access.</h2>
            <p>
              7-day free trial on all plans. No commitment. Cancel anytime.
            </p>
          </div>
        </AnimatedSection>
        <div className={styles.cards}>
          {plans.map((plan, idx) => (
            <AnimatedSection key={plan.name} delay={100 + idx * 150}>
              <div
                className={`${styles.card} ${plan.highlight ? styles.cardHighlight : ""} ${plan.name === "Lifetime" ? styles.cardLifetime : ""}`}
              >
                {plan.badge && (
                  <div
                    className={
                      plan.name === "Lifetime"
                        ? styles.launchBadge
                        : styles.popularBadge
                    }
                  >
                    {plan.badge}
                  </div>
                )}
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <div className={styles.priceWrap}>
                    <span className={styles.price}>{plan.price}</span>
                    <span className={styles.period}>{plan.period}</span>
                  </div>
                  {plan.note && (
                    <p className={styles.planNote}>{plan.note}</p>
                  )}
                </div>
                <ul className={styles.featureList}>
                  {allFeatures.map((f, i) => (
                    <li key={i}>
                      <span className={styles.check}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={APP_STORE_URL}
                  className={`btn ${plan.highlight ? "btn--primary" : "btn--secondary"} ${styles.planCta}`}
                  id={plan.id}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plan.cta}
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
