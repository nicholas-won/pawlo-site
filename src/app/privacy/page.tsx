import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — Pawlo",
  description: "Pawlo's privacy policy. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={`container container--narrow ${styles.content}`}>
          <h1>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: April 19, 2026</p>

          <section>
            <h2>Introduction</h2>
            <p>
              Pawlo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you use our mobile application and website
              (collectively, the &quot;Service&quot;).
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with
              the terms of this privacy policy, please do not access the Service.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect the following personal information:</p>
            <ul>
              <li><strong>Account Information:</strong> Your name, email address, and profile information when you create an account.</li>
              <li><strong>Pet Information:</strong> Names, types, and care details about your pets that you choose to enter.</li>
              <li><strong>Task Logs:</strong> Records of pet care activities you log in the app, including timestamps and which household member completed each task.</li>
              <li><strong>Household Membership:</strong> Information about which users belong to which households.</li>
              <li><strong>Email Address (Waitlist):</strong> If you join our waitlist, we collect your email address to notify you about the app launch and product updates.</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <ul>
              <li>Device type and operating system version</li>
              <li>App usage analytics and page view data (collected via Vercel Analytics and Vercel Speed Insights)</li>
              <li>Crash reports and performance data</li>
              <li>IP address and approximate location (country/region level, for analytics only)</li>
            </ul>

            <h3>Push Notifications</h3>
            <p>
              With your permission, we may send push notifications to your device to alert you about pet care tasks, conflict detection events, and reminders. You can disable push notifications at any time in your device settings.
            </p>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve the Service</li>
              <li>Sync pet care tasks across your household in real-time</li>
              <li>Send push notifications about pet care tasks and reminders (with your consent)</li>
              <li>Detect and prevent duplicate task completion (Conflict Detection)</li>
              <li>Process subscription payments (handled by Apple)</li>
              <li>Respond to your support requests</li>
              <li>Send email updates about the app launch and product news (waitlist subscribers only, with the ability to unsubscribe)</li>
              <li>Analyze usage trends to improve the app</li>
            </ul>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <p>We use the following third-party services to operate the Service. Each has its own privacy policy governing their use of your data:</p>
            <ul>
              <li><strong>Vercel</strong> — Website and API hosting. Collects usage analytics and performance data. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a></li>
              <li><strong>Kit (ConvertKit)</strong> — Email marketing platform used to manage our waitlist and send launch announcements. <a href="https://kit.com/privacy" target="_blank" rel="noopener noreferrer">Kit Privacy Policy</a></li>
              <li><strong>Apple</strong> — Manages in-app purchases, subscriptions, and payment processing via the App Store. <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple Privacy Policy</a></li>
            </ul>
          </section>

          <section>
            <h2>Data Sharing</h2>
            <p>
              <strong>We do not sell your personal data.</strong> We do not share your
              personal information with third parties for their marketing purposes.
            </p>
            <p>We may share information with:</p>
            <ul>
              <li><strong>Your household members:</strong> Other users in your household can see task completion data, pet information, and basic profile information.</li>
              <li><strong>Service providers:</strong> We may share information with third-party vendors who help us operate the Service (see Third-Party Services above).</li>
              <li><strong>Legal requirements:</strong> We may disclose information if required by law or to protect our rights.</li>
            </ul>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information. However, no method of
              electronic storage is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2>Data Retention</h2>
            <p>
              We retain your personal information for as long as your account is
              active or as needed to provide the Service. You can request deletion
              of your account and associated data at any time by visiting our{" "}
              <a href="/delete-account">Account Deletion page</a>.
            </p>
            <p>
              Waitlist email addresses are retained until you unsubscribe or request removal.
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data (see our <a href="/delete-account">Account Deletion page</a>)</li>
              <li>Export your data</li>
              <li>Withdraw consent for data processing</li>
              <li>Unsubscribe from marketing emails at any time using the unsubscribe link in any email we send</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:hello@getpawlo.app">hello@getpawlo.app</a>.
            </p>
          </section>

          <section>
            <h2>Children&apos;s Privacy</h2>
            <p>
              The Service is not directed to children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If we learn that we have collected personal information from a child
              under 13, we will take steps to delete such information promptly.
              If you believe we have collected information from a child under 13,
              please contact us at <a href="mailto:hello@getpawlo.app">hello@getpawlo.app</a>.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify
              you of any changes by posting the new privacy policy on this page
              and updating the &quot;Last updated&quot; date. For material changes, we will
              provide additional notice such as an in-app notification or email.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions about this privacy policy or our data
              practices, please contact us at:
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
