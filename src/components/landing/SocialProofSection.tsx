import AnimatedSection from "@/components/AnimatedSection";
import styles from "./SocialProofSection.module.css";

const stats = [
  { number: "94M", label: "US households own a pet" },
  { number: "1 in 3", label: "have multiple pets" },
  { number: "67%", label: "of US households include a pet" },
];

const testimonials = [
  {
    quote: "We stopped arguing about who feeds the dog. Seriously, this app fixed our morning routine.",
    author: "Sarah & Mike",
    detail: "Beta testers",
  },
  {
    quote: "As a dog walker, knowing the pup was already fed before I arrive is a game-changer.",
    author: "Jess T.",
    detail: "Pet sitter",
  },
  {
    quote: "My roommate and I finally have a system. No more 'I thought you did it' moments.",
    author: "Alex R.",
    detail: "Cat household",
  },
];

export default function SocialProofSection() {
  return (
    <section className={`section ${styles.social}`}>
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <h2>Built for pet households everywhere</h2>
            <p>Trusted by multi-person households who share pet care responsibilities.</p>
          </div>
        </AnimatedSection>

        <div className={styles.stats}>
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 150}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{s.number}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className={styles.testimonials}>
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 150}>
              <div className={styles.testimonialCard}>
                <div className={styles.stars}>★★★★★</div>
                <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className={styles.authorName}>{t.author}</p>
                    <p className={styles.authorDetail}>{t.detail}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
