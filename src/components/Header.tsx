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
          <div className={styles.logoPaw}>🐾</div>
          Pawlo
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <a href="/#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="/#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="/#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="/#waitlist" className={styles.headerCta} onClick={() => setMenuOpen(false)}>
            Join the Beta
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
