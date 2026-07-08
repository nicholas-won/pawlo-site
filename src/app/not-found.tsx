import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found — Pawlo",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />

        <span className={styles.paw1} aria-hidden="true">🐾</span>
        <span className={styles.paw2} aria-hidden="true">🐾</span>
        <span className={styles.paw3} aria-hidden="true">🐾</span>

        <div className={styles.inner}>
          <div className={styles.dog} aria-hidden="true">
            🐕
            <span className={styles.dirt}>🕳️</span>
          </div>

          <span className="label-tag">404 — page not found</span>

          <h1 className={styles.heading}>
            Uh oh — this page got <span className={styles.highlight}>buried.</span>
          </h1>

          <p className={styles.copy}>
            Like a favorite bone, it might be under the couch, behind the shed,
            or gone for good. What we know for sure: it&apos;s not here.
          </p>

          <div className={styles.actions}>
            <Link href="/" className="btn btn--primary">
              🏠 Back to home
            </Link>
            <Link href="/blog" className="btn btn--secondary">
              Read the blog
            </Link>
          </div>

          <p className={styles.popular}>
            Sniffing for something specific?{" "}
            <Link href="/pet-care-app-for-couples">For couples</Link>
            {" · "}
            <Link href="/pet-care-app-for-roommates">For roommates</Link>
            {" · "}
            <Link href="/pet-care-app-for-families">For families</Link>
            {" · "}
            <Link href="/support">Support</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
