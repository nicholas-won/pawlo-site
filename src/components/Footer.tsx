import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>Pawlo</div>
          <p className={styles.tagline}>
            The shared pet checklist for multi-person households.
          </p>
          <p className={styles.copyright}>© 2025 Pawlo. All rights reserved.</p>
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
