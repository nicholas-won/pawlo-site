"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🐾</span>
          <span className={styles.logoText}>Pawlo</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <a href="/#how-it-works" onClick={() => setMenuOpen(false)}>
            How It Works
          </a>
          <a href="/#features" onClick={() => setMenuOpen(false)}>
            Features
          </a>
          <a href="/#pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>
          <a href="/creators" className={styles.creatorsLink}>
            Creators
          </a>
          <a
            href="/#download"
            className={`btn btn--primary ${styles.headerCta}`}
            onClick={() => setMenuOpen(false)}
          >
            Download
          </a>
        </nav>

        <button
          className={`${styles.menuToggle} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
