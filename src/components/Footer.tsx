import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <a href="/" className={styles.logo}>
            <span className={styles.logoIcon}>🐾</span>
            <span>Pawlo</span>
          </a>
          <p className={styles.tagline}>
            The shared pet checklist for multi-person households.
          </p>
        </div>

        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h4>Product</h4>
            <a href="/#features">Features</a>
            <a href="/#pricing">Pricing</a>
            <a href="/support">Support</a>
          </div>
          <div className={styles.linkGroup}>
            <h4>Company</h4>
            <a href="/creators">Creators</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
          <div className={styles.linkGroup}>
            <h4>Connect</h4>
            <a href="https://instagram.com/pawloapp" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://tiktok.com/@pawloapp" target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
            <a href="mailto:hello@pawlo.app">hello@pawlo.app</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Pawlo. All rights reserved.</p>
        <p className={styles.madeWith}>Made with ❤️ in California</p>
      </div>
    </footer>
  );
}
