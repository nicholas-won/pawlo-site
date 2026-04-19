"use client";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./FinalCTASection.module.css";

export default function FinalCTASection() {
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
    <section className={styles.section} id="waitlist">
      <div className={styles.inner}>
        <AnimatedSection>
          <div className={styles.card}>
            <div className={styles.content}>
              <span className={styles.badge}>Coming Soon to iOS</span>
              <h2 className={styles.heading}>
                Your pet&apos;s new{" "}
                <span className={styles.accent}>safe space.</span>
              </h2>

              {status === "success" ? (
                <div className={styles.successMessage}>
                  <span className={styles.successIcon}>🎉</span>
                  <p><strong>You&apos;re on the list!</strong> We&apos;ll email you on launch day.</p>
                </div>
              ) : (
                <div className={styles.ctaGroup}>
                  <form onSubmit={handleSubmit} className={styles.emailForm}>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className={styles.emailInput}
                      disabled={status === "loading"}
                      id="final-cta-email"
                    />
                    <button
                      type="submit"
                      className={styles.submitBtn}
                      disabled={status === "loading"}
                      id="final-cta-submit"
                    >
                      {status === "loading" ? "Sending..." : "Join the Waitlist"}
                    </button>
                  </form>
                  {status === "error" && (
                    <p className={styles.errorText}>
                      Something went wrong. Please try again.
                    </p>
                  )}
                  <p className={styles.ctaNote}>
                    Strictly limited to first 1,000 users.
                  </p>
                </div>
              )}
            </div>
            <div className={styles.bgGlow} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
