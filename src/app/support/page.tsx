import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportContent from "./SupportContent";
import styles from "./support.module.css";

export const metadata: Metadata = {
  title: "Support & FAQ — Pawlo",
  description: "Get help with Pawlo. Find answers to common questions about getting started, using the app, subscriptions, and troubleshooting.",
};

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.header}>
            <h1>Support & FAQ</h1>
            <p>Find answers to common questions. Need more help? Contact us at <a href="mailto:hello@getpawlo.app">hello@getpawlo.app</a>.</p>
          </div>
          <SupportContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
