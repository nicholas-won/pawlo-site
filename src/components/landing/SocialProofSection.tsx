import AnimatedSection from "@/components/AnimatedSection";
import styles from "./SocialProofSection.module.css";

const testimonials = [
  {
    quote:
      "Pawlo saved our lab from getting three breakfasts every single morning. The conflict alerts are literal lifesavers.",
    name: "Sarah Jenkins",
    role: "Human to Buster",
    avatar: "👩",
  },
  {
    quote:
      "The cleanest UI I've ever seen for a pet app. It doesn't feel like a chore to use—it feels like part of our morning ritual.",
    name: "David Chen",
    role: "Human to Mochi",
    avatar: "👨",
    offset: true,
  },
  {
    quote:
      "Finally, I can see exactly when the dog was walked without having to text my roommate three times. Absolute game changer.",
    name: "Alex Rivera",
    role: "Human to Duke",
    avatar: "🧔",
  },
];

export default function SocialProofSection() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.inner}>
        <AnimatedSection>
          <div className={styles.header}>
            <h2 className={styles.heading}>
              What pet parents{" "}
              <span className={styles.accent}>are saying</span>
            </h2>
            <p className={styles.subtitle}>
              Trusted by families who treat pets like royalty.
            </p>
          </div>
        </AnimatedSection>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <AnimatedSection
              key={i}
              delay={i * 100}
              className={`${styles.card} ${t.offset ? styles.cardOffset : ""}`}
            >
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
