import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../privacy/privacy.module.css";

export const metadata: Metadata = {
  title: "Delete Your Account — Pawlo",
  description: "Request deletion of your Pawlo account and all associated data.",
};

export default function DeleteAccountPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={`container container--narrow ${styles.content}`}>
          <h1>Delete Your Account</h1>
          <p className={styles.updated}>
            We&apos;re sorry to see you go. Your request will be processed within 30 days.
          </p>

          <section>
            <h2>What Gets Deleted</h2>
            <p>When you request account deletion, we will permanently delete:</p>
            <ul>
              <li>Your account and profile information</li>
              <li>All pet profiles you created</li>
              <li>All task logs and care history associated with your account</li>
              <li>Your household memberships</li>
              <li>Any other personally identifiable data tied to your account</li>
            </ul>
            <p>
              <strong>Note:</strong> Task logs you completed that are visible to other household members may remain visible to them under an anonymized label. Pet profiles and tasks created by other household members will not be deleted.
            </p>
          </section>

          <section>
            <h2>Before You Delete</h2>
            <ul>
              <li>
                <strong>Cancel your subscription first.</strong> Account deletion does not automatically cancel an active Premium subscription. Please cancel through{" "}
                <strong>Settings → Apple ID → Subscriptions</strong> before submitting your deletion request to avoid future charges.
              </li>
              <li>
                <strong>Export your data.</strong> Once deleted, your data cannot be recovered. If you need a copy, email us before submitting your request.
              </li>
            </ul>
          </section>

          <section>
            <h2>How to Delete Your Account</h2>

            <h3>Option 1: In-App (fastest)</h3>
            <p>
              Open Pawlo → <strong>Settings</strong> → <strong>Account</strong> → <strong>Delete Account</strong>.
            </p>

            <h3>Option 2: Email Request</h3>
            <p>
              Send an email to{" "}
              <a href="mailto:contact@getpawlo.app?subject=Account%20Deletion%20Request&body=Please%20delete%20my%20Pawlo%20account%20associated%20with%20this%20email%20address.">
                contact@getpawlo.app
              </a>{" "}
              with the subject line <strong>&quot;Account Deletion Request&quot;</strong> from the email address associated with your account. We will process your request within 30 days and send a confirmation when complete.
            </p>
          </section>

          <section>
            <h2>Data Retention After Deletion</h2>
            <p>
              After processing your deletion request, we may retain certain information where required by law or for legitimate business purposes (e.g., fraud prevention, legal obligations). Any retained data will be anonymized and will not be used to identify you.
            </p>
          </section>

          <section>
            <h2>Questions?</h2>
            <p>
              If you have any questions about the deletion process, contact us at{" "}
              <a href="mailto:contact@getpawlo.app">contact@getpawlo.app</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
