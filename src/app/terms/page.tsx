import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../privacy/privacy.module.css";

export const metadata: Metadata = {
  title: "Terms of Service — Pawlo",
  description: "Pawlo's terms of service governing use of the app and website.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={`container container--narrow ${styles.content}`}>
          <h1>Terms of Service</h1>
          <p className={styles.updated}>Last updated: April 19, 2026</p>

          <section>
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using Pawlo (the &quot;Service&quot;), you agree to be bound
              by these Terms of Service. If you disagree with any part of the
              terms, you may not access the Service.
            </p>
          </section>

          <section>
            <h2>Description of Service</h2>
            <p>
              Pawlo is a shared pet care tracking application that allows
              household members to coordinate pet care tasks such as feeding,
              walking, and medication. The Service includes a mobile application
              for iOS and this website.
            </p>
          </section>

          <section>
            <h2>User Accounts</h2>
            <p>
              You are responsible for maintaining the security of your account and
              password. Pawlo cannot and will not be liable for any loss or damage
              from your failure to maintain the security of your account.
            </p>
            <p>
              You are responsible for all activity that occurs under your account.
              You must notify us immediately of any unauthorized use of your
              account.
            </p>
            <p>
              You may request deletion of your account at any time by visiting our{" "}
              <a href="/delete-account">Account Deletion page</a>.
            </p>
          </section>

          <section>
            <h2>Subscriptions &amp; Billing</h2>
            <p>
              Pawlo offers both free and premium subscription plans. Premium
              subscriptions are billed through Apple&apos;s App Store and are subject
              to Apple&apos;s terms and conditions for in-app purchases.
            </p>
            <ul>
              <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period.</li>
              <li>You can manage and cancel subscriptions through your Apple ID settings.</li>
              <li>Refunds are handled by Apple according to their refund policy.</li>
              <li>Free trial periods, if offered, convert to paid subscriptions unless canceled before the trial ends.</li>
              <li>Price changes to subscription plans will be communicated with at least 30 days&apos; notice.</li>
            </ul>
          </section>

          <section>
            <h2>Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any portion of the Service</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Upload malicious code or content</li>
              <li>Impersonate another person or entity</li>
              <li>Collect user information without consent</li>
            </ul>
          </section>

          <section>
            <h2>User Content &amp; Data</h2>
            <p>
              You retain ownership of any content you create within the Service,
              including pet profiles, task logs, and household data. By using the
              Service, you grant Pawlo a limited license to use this content
              solely for the purpose of providing and improving the Service.
            </p>
            <p>
              You can export or delete your data at any time through the app
              settings or by visiting our <a href="/delete-account">Account Deletion page</a>.
            </p>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality
              are owned by Pawlo and are protected by international copyright,
              trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2>Disclaimer of Warranties</h2>
            <p>
              The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis
              without warranties of any kind, either express or implied, including
              but not limited to implied warranties of merchantability, fitness for
              a particular purpose, or non-infringement.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              Pawlo is a pet care coordination tool and is not a substitute for
              professional veterinary advice. We are not liable for any harm to
              pets resulting from use or misuse of the Service.
            </p>
            <p>
              In no event shall Pawlo, its directors, employees, or agents be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of your use of the Service. Our total
              liability shall not exceed the amount you paid us in the twelve
              months preceding the claim.
            </p>
          </section>

          <section>
            <h2>Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior
              notice, for conduct that we determine violates these Terms or is
              harmful to other users, us, or third parties, or for any other
              reason at our sole discretion.
            </p>
            <p>
              Upon termination, your right to use the Service will cease
              immediately. You may request a copy of your data before termination
              by contacting us.
            </p>
          </section>

          <section>
            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the State of California, United States, without regard
              to its conflict of law provisions. Any disputes arising under these
              Terms shall be subject to the exclusive jurisdiction of the courts
              located in California.
            </p>
          </section>

          <section>
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time.
              If a revision is material, we will provide at least 30 days&apos; notice
              before new terms take effect. Continued use of the Service after
              changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              <a href="mailto:hello@getpawlo.app">hello@getpawlo.app</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
