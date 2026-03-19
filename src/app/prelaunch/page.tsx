"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ConflictDetectionSection from "@/components/landing/ConflictDetectionSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import styles from "./prelaunch.module.css";

export default function PrelaunchPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <AnimatedSection>
                <div className={styles.heroContent}>
                  <div className={styles.badge}>
                    🐾 Coming Soon to iOS
                  </div>
                  <h1 className={styles.headline}>
                    Never wonder if someone{" "}
                    <span className={styles.highlight}>fed the pet.</span>
                    <br />
                    Coming soon to iOS.
                  </h1>
                  <p className={styles.subheadline}>
                    Pawlo is a shared daily checklist for multi-person pet
                    households. Be the first to know when it launches.
                  </p>

                  {status === "success" ? (
                    <div className={styles.successMessage}>
                      <span className={styles.successIcon}>🎉</span>
                      <p>
                        <strong>You&apos;re on the list!</strong> We&apos;ll email
                        you on launch day.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className={styles.emailForm}>
                      <div className={styles.inputGroup}>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className={styles.emailInput}
                          disabled={status === "loading"}
                          id="prelaunch-email"
                        />
                        <button
                          type="submit"
                          className={`btn btn--primary ${styles.submitBtn}`}
                          disabled={status === "loading"}
                          id="prelaunch-submit"
                        >
                          {status === "loading" ? "Sending..." : "Notify Me"}
                        </button>
                      </div>
                      {status === "error" && (
                        <p className={styles.errorText}>
                          Something went wrong. Please try again.
                        </p>
                      )}
                      <p className={styles.disclaimer}>
                        No spam. Just one email on launch day.
                      </p>
                    </form>
                  )}

                  <p className={styles.creatorsLink}>
                    Want to earn money promoting Pawlo?{" "}
                    <a href="/creators">Join the Creator Program →</a>
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className={styles.heroMockup}>
                  <img
                    src="/mockup-hero.png"
                    alt="Pawlo app showing Today's Routine for a pet named Max"
                    width={380}
                    height={500}
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
        </section>

        {/* Reuse existing sections */}
        <ProblemSection />
        <HowItWorksSection />
        <ConflictDetectionSection />
        <FeaturesSection />

        {/* Bottom CTA */}
        <section className={styles.bottomCta}>
          <div className="container">
            <AnimatedSection>
              <div className={styles.bottomCtaContent}>
                <h2>Be the first to try Pawlo</h2>
                <p>
                  Join the waitlist and we&apos;ll let you know the second we
                  launch.
                </p>
                <a href="#top" className="btn btn--primary btn--large" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("prelaunch-email")?.focus();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}>
                  Join the Waitlist
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
