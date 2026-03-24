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
      <div className={styles.inner}>
        <div className={styles.content}>
          <AnimatedSection>
            <div className={styles.badge}>
              <div className={styles.avatarStack}>
                <div className={styles.avatar}>🐕</div>
                <div className={styles.avatar}>🐈</div>
                <div className={styles.avatar}>🐾</div>
              </div>
              <span className={styles.badgeText}>Join 500+ pet parents</span>
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
              The curated sanctuary for your pet&apos;s schedule. Pawlo
              coordinates feeding, walks, and meds so your best friend
              never gets double-dosed.
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
            )}
            {status === "error" && (
              <p className={styles.errorText}>
                Something went wrong. Please try again.
              </p>
            )}
          </AnimatedSection>
        </div>
        <AnimatedSection delay={400} className={styles.mockupWrap}>
          <div className={styles.mockupFrame}>
            <img
              src="/mockup-hero.png"
              alt="Pawlo app showing pet care tasks on iPhone"
              className={styles.mockup}
              width={380}
              height={500}
            />
            <div className={styles.floatingCard}>
              <div className={styles.floatingIcon}>🐾</div>
              <div>
                <p className={styles.floatingTitle}>Luna was just fed!</p>
                <p className={styles.floatingMeta}>By Dad • 2 mins ago</p>
              </div>
            </div>
          </div>
          <div className={styles.blob1} />
          <div className={styles.blob2} />
        </AnimatedSection>
      </div>
    </section>
  );
}
