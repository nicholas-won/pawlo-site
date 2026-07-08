import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyDownloadBar from "@/components/StickyDownloadBar";
import TrustStrip from "@/components/TrustStrip";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PricingSection from "@/components/landing/PricingSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import type { AudienceConfig } from "./audienceData";
import styles from "./AudiencePage.module.css";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/pawlo-pet-care-tracker/id6762538892";

/**
 * Shared template for the audience SEO landing pages
 * (/pet-care-app-for-couples, -roommates, -families). Route pages own the
 * metadata and JSON-LD; this component renders the sections from config.
 */
export default function AudiencePage({ config }: { config: AudienceConfig }) {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBlob1} />
          <div className={styles.heroBlob2} />
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className="label-tag">{config.badge}</span>
              <h1 className={styles.headline}>
                {config.h1Lead}{" "}
                <span className={styles.highlight}>{config.h1Highlight}</span>
              </h1>
              <p className={styles.subheadline}>{config.subheadline}</p>
              <AnimatedSection delay={150}>
                <div className={styles.ctaStack}>
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.appStoreBadge}
                    id={`${config.slug}-hero-cta`}
                  >
                    <Image
                      src="/appstore-badge-black.svg"
                      alt="Download on the App Store"
                      width={156}
                      height={52}
                    />
                  </a>
                  <p className={styles.ctaNote}>
                    Try free for 7 days. No commitment. Cancel anytime.
                  </p>
                </div>
              </AnimatedSection>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.phoneMockup}>
                <div className={styles.phoneScreen}>
                  <Image
                    src={config.screenshot.src}
                    alt={config.screenshot.alt}
                    width={390}
                    height={844}
                    priority
                    sizes="(max-width: 768px) 260px, 300px"
                    className={styles.phoneScreenImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustStrip />

        {/* Pains */}
        <section className={`section ${styles.pains}`}>
          <div className="container">
            <AnimatedSection>
              <div className="section-header">
                <span className="label-tag">{config.painsLabel}</span>
                <h2>{config.painsHeading}</h2>
                <p>{config.painsIntro}</p>
              </div>
            </AnimatedSection>
            <div className={styles.painGrid}>
              {config.pains.map((pain, i) => (
                <AnimatedSection key={i} delay={i * 120}>
                  <div className={`card ${styles.painCard}`}>
                    <div className={styles.painIcon}>{pain.icon}</div>
                    <h3 className={styles.painTitle}>{pain.title}</h3>
                    <p className={styles.painText}>{pain.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className={`section section--low ${styles.features}`}>
          <div className="container">
            <AnimatedSection>
              <div className="section-header">
                <span className="label-tag">The fix</span>
                <h2>{config.featuresHeading}</h2>
              </div>
            </AnimatedSection>
            <div className={styles.featureGrid}>
              {config.features.map((feature, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>{feature.icon}</div>
                    <div>
                      <h3 className={styles.featureTitle}>{feature.title}</h3>
                      <p className={styles.featureText}>{feature.text}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <HowItWorksSection />
        <PricingSection />

        {/* FAQ */}
        <section className={`section ${styles.faq}`}>
          <div className="container container--narrow">
            <AnimatedSection>
              <div className="section-header">
                <span className="label-tag">Common questions</span>
                <h2>Questions {config.badge.toLowerCase().replace("for ", "")} ask us</h2>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <FAQAccordion items={config.faqs} />
            </AnimatedSection>
          </div>
        </section>

        {/* Related reading + cross links */}
        <section className={`section section--low ${styles.related}`}>
          <div className="container container--narrow">
            <AnimatedSection>
              <h2 className={styles.relatedHeading}>Keep reading</h2>
              <ul className={styles.relatedList}>
                {config.relatedPosts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </li>
                ))}
              </ul>
              <div className={styles.crossLinks}>
                {config.crossLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={styles.crossLink}>
                    {link.label} →
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <FinalCTASection />
      </main>
      <StickyDownloadBar />
      <Footer />
    </>
  );
}
