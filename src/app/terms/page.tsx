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
            <p>
              Your use of Pawlo is also governed by our Privacy Policy, available at <a href="/privacy">getpawlo.app/privacy</a>, which is incorporated into these Terms by reference. By using the Service, you acknowledge that you have read and understood our Privacy Policy.
            </p>
          </section>

          <section>
            <h2>Eligibility</h2>
            <p>
              You must be at least 13 years of age to create an account or use Pawlo. By using the app, you represent that you meet this requirement. If you are between 13 and 18 years of age, you represent that your parent or legal guardian has reviewed and agreed to these Terms on your behalf.
            </p>
            <p>
              Pawlo is not directed at children under the age of 13, and we do not knowingly collect personal information from anyone under 13. If we become aware that a user is under 13, we will promptly delete their account and associated data. If you believe a child under 13 has created an account, please contact us at <a href="mailto:contact@getpawlo.app">contact@getpawlo.app</a>.
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
            <h3>Household Data Sharing</h3>
            <p>
              Pawlo is designed as a shared household tool. When you join or create a household, certain information is visible to all members of that household, including your display name, task completions, completion timestamps, and streak data. This visibility is core to the Service and cannot be disabled. By joining a household, you consent to this sharing with the other members of that household.
            </p>
            <p>
              If you leave a household, your historical activity data may remain visible to remaining members. You can request deletion of your data at any time through the app settings or by contacting us at <a href="mailto:contact@getpawlo.app">contact@getpawlo.app</a>.
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
            <h2>Third-Party Services</h2>
            <p>
              Pawlo relies on third-party service providers to deliver the Service, including but not limited to payment processing, data storage, analytics, and push notifications. By using the Service, you acknowledge that your data may be processed by these providers in accordance with their own terms and privacy policies. Pawlo is not responsible for the practices of any third-party service providers. In-app purchases and subscription billing are processed by Apple and are subject to Apple&apos;s Media Services Terms and Conditions.
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
              Pawlo&apos;s Conflict Detection feature is an informational coordination tool only. It is designed to help household members communicate about pet care tasks but does not guarantee accuracy, real-time delivery, or completeness of alerts under all conditions, including periods of limited or no network connectivity. Conflict Detection is not a medical device, veterinary safety system, or substitute for direct communication between household members regarding pet medication. Pawlo expressly disclaims all liability for any harm arising from reliance on Conflict Detection alerts or the absence thereof.
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
              We may terminate or suspend your account immediately, without prior notice, for conduct that we determine violates these Terms or is harmful to other users, us, or third parties. If we terminate your account without cause, and you are an active paid subscriber, we will provide a pro-rated refund for the unused portion of your current billing period. No refund will be issued for terminations resulting from violations of these Terms. You may cancel your account at any time through your Apple ID subscription settings.
            </p>
            <p>
              Upon termination, your right to use the Service will cease
              immediately. You may request a copy of your data before termination
              by contacting us.
            </p>
          </section>

          <section>
            <h2>Dispute Resolution &amp; Arbitration</h2>
            <p>
              You and Pawlo agree that any dispute, claim, or controversy arising out of or relating to these Terms or your use of the Service will be resolved by binding individual arbitration rather than in court, except that either party may bring claims in small claims court if they qualify.
            </p>
            <p>
              You and Pawlo each waive the right to a trial by jury and the right to participate in a class action, collective action, or representative proceeding.
            </p>
            <p>
              Arbitration will be conducted by a mutually agreed arbitration service under its then-current rules. The arbitration will take place in California, or via videoconference at either party&apos;s election. The arbitrator&apos;s decision shall be final and binding and may be entered as a judgment in any court of competent jurisdiction.
            </p>
            <p>
              This arbitration agreement does not apply to claims for injunctive or equitable relief to protect intellectual property rights, or to any claim that qualifies for small claims court.
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
            <h2>Affiliate Program</h2>
            <p>
              Pawlo operates an affiliate program through which third parties (&quot;Affiliates&quot;) may promote the Service in exchange for commission on referred subscriptions. Affiliates are independent parties and are not employees or agents of Pawlo. Pawlo is not responsible for any representations, claims, or content made by Affiliates about the Service.
            </p>
            <p>
              Affiliate commission structures and program terms are subject to change at any time. Current program terms are available at <a href="/creators">getpawlo.app/creators</a>. Participation in the affiliate program is governed by a separate Affiliate Agreement.
            </p>
          </section>

          <section>
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice before new terms take effect via email to the address associated with your account, an in-app notification, or both. It is your responsibility to maintain a valid email address on your account. Continued use of the Service after changes take effect constitutes acceptance of the revised Terms. If you do not agree to the revised Terms, you must stop using the Service before they take effect.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              <a href="mailto:contact@getpawlo.app">contact@getpawlo.app</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
