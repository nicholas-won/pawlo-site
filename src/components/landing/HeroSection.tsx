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
                <div className={styles.phoneNotch} />
                <div className={styles.phoneUi}>
                  <div className={styles.puiHeader}>
                    <div>
                      <div className={styles.puiTitle}>Luna&apos;s Day 🐕</div>
                      <div className={styles.puiDate}>Friday, Apr 18</div>
                    </div>
                    <div className={styles.puiStreak}>🔥 12</div>
                  </div>

                  <div className={styles.puiTask}>
                    <div className={`${styles.puiCheck} ${styles.puiCheckDone}`}>✓</div>
                    <div className={styles.puiTaskBody}>
                      <span className={`${styles.puiTaskName} ${styles.puiTaskDone}`}>Morning Feed</span>
                      <span className={styles.puiTaskWho}>by Mom · 7:00 AM</span>
                    </div>
                    <div className={styles.puiAvt}>M</div>
                  </div>

                  <div className={styles.puiTask}>
                    <div className={`${styles.puiCheck} ${styles.puiCheckDone}`}>✓</div>
                    <div className={styles.puiTaskBody}>
                      <span className={`${styles.puiTaskName} ${styles.puiTaskDone}`}>Morning Walk</span>
                      <span className={styles.puiTaskWho}>by Dad · 8:10 AM</span>
                    </div>
                    <div className={styles.puiAvt}>D</div>
                  </div>

                  <div className={styles.puiConflict}>
                    <span>⚠️</span>
                    <span>Conflict: Dad about to double-feed!</span>
                  </div>

                  <div className={styles.puiTask}>
                    <div className={`${styles.puiCheck} ${styles.puiCheckOpen}`} />
                    <div className={styles.puiTaskBody}>
                      <span className={styles.puiTaskName}>Evening Feed</span>
                      <span className={styles.puiTaskWho}>not done yet</span>
                    </div>
                  </div>

                  <div className={styles.puiTask}>
                    <div className={`${styles.puiCheck} ${styles.puiCheckOpen}`} />
                    <div className={styles.puiTaskBody}>
                      <span className={styles.puiTaskName}>Flea Medication</span>
                      <span className={styles.puiTaskWho}>monthly · due today</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification card */}
            <div className={styles.floatingCard}>
              <div className={styles.floatingIcon}>🐾</div>
              <div>
                <div className={styles.floatingTitle}>Luna was just fed!</div>
                <div className={styles.floatingMeta}>By Dad · 2 mins ago</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
