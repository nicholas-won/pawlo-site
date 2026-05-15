"use client";

import { useState } from "react";
import styles from "./Footer.module.css";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/pawlo-pet-care-tracker/id6762538892";

export default function Footer() {
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
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>Pawlo</div>
          <p className={styles.tagline}>
            The shared pet checklist for multi-person households.
          </p>

          {/* Newsletter signup */}
          <div className={styles.newsletter}>
            <p className={styles.newsletterLabel}>
              📬 Get pet care tips &amp; app updates
            </p>
            {status === "success" ? (
              <p className={styles.newsletterSuccess}>
                🎉 You&apos;re subscribed!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className={styles.newsletterForm}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={styles.newsletterInput}
                  disabled={status === "loading"}
                  id="footer-newsletter-email"
                />
                <button
                  type="submit"
                  className={styles.newsletterBtn}
                  disabled={status === "loading"}
                  id="footer-newsletter-submit"
                >
                  {status === "loading" ? "..." : "Subscribe"}
                </button>
              </form>
            )}
            {status === "error" && (
              <p className={styles.newsletterError}>
                Something went wrong. Please try again.
              </p>
            )}
          </div>

          <p className={styles.copyright}>© 2026 Pawlo. All rights reserved.</p>
        </div>

        <div className={styles.linkCol}>
          <h4 className={styles.linkHeading}>Product</h4>
          <ul className={styles.linkList}>
            <li>
              <a href="/#features">Features</a>
            </li>
            <li>
              <a href="/#pricing">Pricing</a>
            </li>
            <li>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download for iOS
              </a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/support">Support</a>
            </li>
          </ul>
        </div>

        <div className={styles.linkCol}>
          <h4 className={styles.linkHeading}>Company</h4>
          <ul className={styles.linkList}>
            <li>
              <a href="/creators">Creators</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
          </ul>
        </div>

        <div className={styles.linkCol}>
          <h4 className={styles.linkHeading}>Connect</h4>
          <ul className={styles.linkList}>
            <li>
              <a
                href="https://www.instagram.com/pawlohq"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@pawlohq"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
            </li>
            <li>
              <a href="mailto:contact@getpawlo.app">contact@getpawlo.app</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
