"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import styles from "./creators.module.css";

const faqItems = [
  {
    question: "How do I get paid?",
    answer:
      "We pay via PayPal or Venmo on a monthly basis. The minimum payout threshold is $25. You'll receive a payment for all qualifying commissions by the 15th of each month.",
  },
  {
    question: "Do I need a big following?",
    answer:
      "Not at all! Nano creators (under 5K followers) often drive the highest conversion rates because their audiences are highly engaged and trusting. What matters is that your audience loves pets.",
  },
  {
    question: "What content should I post?",
    answer:
      "We provide a content idea pack with ready-to-use captions, screenshot mockups, and video concepts. The best performing content is usually authentic — share why you love using Pawlo with your own pets.",
  },
  {
    question: "Is there a cost to join?",
    answer:
      "No, the affiliate program is completely free to join. There are no hidden fees or requirements to purchase anything.",
  },
  {
    question: "Can I use the app for free?",
    answer:
      "Yes! All approved affiliates receive lifetime Premium access for free. This lets you showcase all features to your audience.",
  },
  {
    question: "How does tracking work?",
    answer:
      "You'll get a unique affiliate link and custom offer code. When someone downloads Pawlo through your link or uses your code, the subscription is automatically tracked and attributed to you.",
  },
];

export default function CreatorsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    socialHandle: "",
    followerCount: "",
    reason: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [followers, setFollowers] = useState(5000);
  const [downloadRate, setDownloadRate] = useState(2);
  const [subscribeRate, setSubscribeRate] = useState(5);

  const monthlyDownloads = Math.round((followers * downloadRate) / 100);
  const monthlySubscribers = Math.round((monthlyDownloads * subscribeRate) / 100);
  const monthlyEarnings = (monthlySubscribers * 2.99 * 0.3).toFixed(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <AnimatedSection>
              <div className={styles.heroContent}>
                <div className={styles.heroBadge}>💰 Affiliate Program</div>
                <h1 className={styles.heroHeadline}>
                  Earn every time a pet household{" "}
                  <span className={styles.highlight}>subscribes.</span>
                </h1>
                <p className={styles.heroSub}>
                  Join Pawlo&apos;s affiliate program — promote an app pet parents
                  love, and earn recurring commissions.
                </p>
                <a href="#apply" className="btn btn--primary btn--large">
                  Apply Now
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* How It Works */}
        <section className={`section ${styles.howItWorks}`}>
          <div className="container">
            <AnimatedSection>
              <div className="section-header">
                <h2>How it works</h2>
                <p>Start earning in three simple steps.</p>
              </div>
            </AnimatedSection>
            <div className={styles.steps}>
              {[
                {
                  num: "1",
                  icon: "📝",
                  title: "Apply & get approved",
                  desc: "Fill out the form below. We review applications within 48 hours.",
                },
                {
                  num: "2",
                  icon: "📣",
                  title: "Share with your audience",
                  desc: "Use your unique link and offer code. We provide content ideas and assets.",
                },
                {
                  num: "3",
                  icon: "💸",
                  title: "Earn commissions",
                  desc: "Get 25-30% of every subscription your audience starts. Paid monthly.",
                },
              ].map((step, i) => (
                <AnimatedSection key={i} delay={i * 150}>
                  <div className={styles.stepCard}>
                    <div className={styles.stepNum}>{step.num}</div>
                    <span className={styles.stepIcon}>{step.icon}</span>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Commission Tiers */}
        <section className={`section section--gray ${styles.tiers}`}>
          <div className="container">
            <AnimatedSection>
              <div className="section-header">
                <h2>Commission tiers</h2>
                <p>Earn more as you grow with Pawlo.</p>
              </div>
            </AnimatedSection>
            <div className={styles.tierCards}>
              <AnimatedSection delay={100}>
                <div className={styles.tierCard}>
                  <h3>Standard</h3>
                  <div className={styles.tierRate}>25%</div>
                  <p className={styles.tierDesc}>of first payment</p>
                  <ul>
                    <li>Unique affiliate link</li>
                    <li>Custom offer code</li>
                    <li>Content idea pack</li>
                    <li>Real-time dashboard</li>
                  </ul>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <div className={styles.tierCard}>
                  <h3>Ambassador</h3>
                  <div className={styles.tierRate}>30%</div>
                  <p className={styles.tierDesc}>first + 10% recurring</p>
                  <ul>
                    <li>Everything in Standard</li>
                    <li>Recurring commissions</li>
                    <li>Priority support</li>
                    <li>Early feature access</li>
                  </ul>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={300}>
                <div className={`${styles.tierCard} ${styles.tierHighlight}`}>
                  <div className={styles.tierBadge}>Limited</div>
                  <h3>Founding Partner</h3>
                  <div className={styles.tierRate}>30%</div>
                  <p className={styles.tierDesc}>first + 15% recurring</p>
                  <ul>
                    <li>Everything in Ambassador</li>
                    <li>Highest recurring rate</li>
                    <li>Co-marketing opportunities</li>
                    <li>Direct founder access</li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Earnings Calculator */}
        <section className={`section ${styles.calculator}`}>
          <div className="container">
            <AnimatedSection>
              <div className="section-header">
                <h2>Estimate your earnings</h2>
                <p>See how much you could earn with Pawlo.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className={styles.calcCard}>
                <div className={styles.calcSliders}>
                  <div className={styles.sliderGroup}>
                    <label>
                      Followers who see your post
                      <strong>{followers.toLocaleString()}</strong>
                    </label>
                    <input
                      type="range"
                      min="500"
                      max="100000"
                      step="500"
                      value={followers}
                      onChange={(e) => setFollowers(Number(e.target.value))}
                      className={styles.slider}
                    />
                    <div className={styles.sliderRange}>
                      <span>500</span>
                      <span>100K</span>
                    </div>
                  </div>
                  <div className={styles.sliderGroup}>
                    <label>
                      Download rate
                      <strong>{downloadRate}%</strong>
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="10"
                      step="0.5"
                      value={downloadRate}
                      onChange={(e) => setDownloadRate(Number(e.target.value))}
                      className={styles.slider}
                    />
                    <div className={styles.sliderRange}>
                      <span>0.5%</span>
                      <span>10%</span>
                    </div>
                  </div>
                  <div className={styles.sliderGroup}>
                    <label>
                      Subscribe rate
                      <strong>{subscribeRate}%</strong>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      step="1"
                      value={subscribeRate}
                      onChange={(e) => setSubscribeRate(Number(e.target.value))}
                      className={styles.slider}
                    />
                    <div className={styles.sliderRange}>
                      <span>1%</span>
                      <span>20%</span>
                    </div>
                  </div>
                </div>
                <div className={styles.calcResult}>
                  <div className={styles.resultItem}>
                    <span className={styles.resultLabel}>Downloads</span>
                    <span className={styles.resultValue}>{monthlyDownloads}</span>
                  </div>
                  <div className={styles.resultItem}>
                    <span className={styles.resultLabel}>Subscribers</span>
                    <span className={styles.resultValue}>{monthlySubscribers}</span>
                  </div>
                  <div className={`${styles.resultItem} ${styles.resultHighlight}`}>
                    <span className={styles.resultLabel}>Monthly earnings</span>
                    <span className={styles.resultBig}>${monthlyEarnings}</span>
                  </div>
                  <p className={styles.resultNote}>
                    Per post. Compounds with every new post you share.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* What You Get */}
        <section className={`section section--gray ${styles.perks}`}>
          <div className="container">
            <AnimatedSection>
              <div className="section-header">
                <h2>What you get</h2>
              </div>
            </AnimatedSection>
            <div className={styles.perkGrid}>
              {[
                { icon: "🔗", title: "Unique affiliate link + QR code" },
                { icon: "🏷️", title: "Custom offer code for your audience" },
                { icon: "👑", title: "Free lifetime Premium" },
                { icon: "📊", title: "Real-time earnings dashboard" },
                { icon: "🎨", title: "Content ideas + asset pack" },
                { icon: "🚀", title: "Priority feature access" },
              ].map((perk, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className={styles.perkItem}>
                    <span className={styles.perkIcon}>{perk.icon}</span>
                    <span className={styles.perkTitle}>{perk.title}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className={`section ${styles.whoFor}`}>
          <div className="container">
            <AnimatedSection>
              <div className={styles.whoForContent}>
                <h2>Who this is for</h2>
                <p className={styles.whoForDesc}>
                  Pet Instagram creators, TikTok pet accounts, dog & cat
                  bloggers, pet YouTube channels, and anyone with a pet-loving
                  audience.
                </p>
                <p className={styles.whoForEmphasis}>
                  Whether you have 500 followers or 500,000 — if your audience
                  loves pets, this is for you.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Application Form */}
        <section className={`section section--gray ${styles.apply}`} id="apply">
          <div className="container">
            <AnimatedSection>
              <div className="section-header">
                <h2>Apply now</h2>
                <p>Takes less than 2 minutes. We review within 48 hours.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className={styles.formCard}>
                {submitted ? (
                  <div className={styles.successMessage}>
                    <span className={styles.successIcon}>🎉</span>
                    <h3>Application submitted!</h3>
                    <p>
                      Thanks for applying! We&apos;ll review your application and
                      get back to you within 48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="name">Full name</label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Your name"
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="socialHandle">
                          Instagram or TikTok handle
                        </label>
                        <input
                          type="text"
                          id="socialHandle"
                          required
                          value={formData.socialHandle}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              socialHandle: e.target.value,
                            })
                          }
                          placeholder="@yourhandle"
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="followerCount">Follower count</label>
                        <select
                          id="followerCount"
                          required
                          value={formData.followerCount}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              followerCount: e.target.value,
                            })
                          }
                        >
                          <option value="">Select range</option>
                          <option value="<1K">Less than 1K</option>
                          <option value="1K-5K">1K – 5K</option>
                          <option value="5K-25K">5K – 25K</option>
                          <option value="25K-100K">25K – 100K</option>
                          <option value="100K+">100K+</option>
                        </select>
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="reason">
                        Why do you want to promote Pawlo?
                      </label>
                      <textarea
                        id="reason"
                        rows={3}
                        value={formData.reason}
                        onChange={(e) =>
                          setFormData({ ...formData, reason: e.target.value })
                        }
                        placeholder="Tell us a bit about yourself and your audience..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn--primary btn--large"
                      id="creator-apply-btn"
                    >
                      Apply Now
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ */}
        <section className={`section ${styles.faqSection}`}>
          <div className="container">
            <AnimatedSection>
              <div className="section-header">
                <h2>Frequently asked questions</h2>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <FAQAccordion items={faqItems} />
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
