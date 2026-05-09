"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
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
    <section className={styles.hero} id="hero">
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.inner}>
        <div className={styles.content}>
          <AnimatedSection>
            <div className={styles.badge}>
              <div className={styles.avatarStack}>
                <div className={styles.avatar}>🐕</div>
                <div className={styles.avatar}>🐈</div>
                <div className={styles.avatar}>🐾</div>
              </div>
              <span className={styles.badgeText}>Join 500+ pet parents on the waitlist</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className={styles.headline}>
              Never wonder if someone{" "}
              <span className={styles.highlight}>fed the pet.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className={styles.subheadline}>
              Pawlo is the shared pet care app for couples, families, and
              roommates. Track feeding, walks, and medication across your whole
              household — so your pet is never double-fed or missed.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            {status === "success" ? (
              <div className={styles.successMessage}>
                <span className={styles.successIcon}>🎉</span>
                <p>
                  <strong>You&apos;re on the list!</strong>{" "}We&apos;ll email
                  you on launch day.
                </p>
              </div>
            ) : (
              <div>
                <form onSubmit={handleSubmit} className={styles.emailForm}>
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
                    className={styles.submitBtn}
                    disabled={status === "loading"}
                    id="prelaunch-submit"
                  >
                    {status === "loading" ? "Sending..." : "Join Waitlist"}
                  </button>
                </form>
                {status === "error" && (
                  <p className={styles.errorText}>
                    Something went wrong. Please try again.
                  </p>
                )}
                <p className={styles.formNote}>Free forever plan available. iOS launch coming soon.</p>
              </div>
            )}
          </AnimatedSection>
        </div>

        {/* Live Phone Mockup */}
        <AnimatedSection delay={400} className={styles.heroVisual}>
          <div className={styles.phoneWrap}>
            <div className={styles.phoneMockup}>
              <div className={styles.phoneScreen}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/home.png"
                  alt="Pawlo home screen showing pet care tasks"
                  className={styles.phoneScreenImg}
                />
              </div>
            </div>

            {/* Floating streak card */}
            <div className={styles.floatingCard}>
              <div className={styles.floatingIcon}>🔥</div>
              <div>
                <div className={styles.floatingTitle}>7-day streak!</div>
                <div className={styles.floatingMeta}>Max · Keep it up!</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
