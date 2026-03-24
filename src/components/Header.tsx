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
        <a href="/" className={styles.logo}>Pawlo</a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <a href="/#features" onClick={() => setMenuOpen(false)}>
            Features
          </a>
          <a href="/#testimonials" onClick={() => setMenuOpen(false)}>
            Testimonials
          </a>
          <a href="/#waitlist" onClick={() => setMenuOpen(false)}>
            Waitlist
          </a>
          <a href="/creators" className={styles.creatorsLink} onClick={() => setMenuOpen(false)}>
            Creators
          </a>
          <a
            href="/#download"
            className={styles.headerCta}
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
