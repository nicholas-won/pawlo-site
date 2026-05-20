import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Post } from "@/lib/blog";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import styles from "./post.module.css";

type Props = { params: Promise<{ slug: string }> };

const siteUrl = "https://getpawlo.app";
const brandName = "Pawlo";

function stringifyJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function getWordCount(html: string) {
  return html
    .replace(/<[^>]+>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;
  const imageUrl = `${siteUrl}${post.image}`;

  return {
    title: post.seoTitle,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: "Pawlo Team", url: siteUrl }],
    creator: brandName,
    publisher: brandName,
    category: post.category,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: post.seoTitle,
      description: post.description,
      url: canonicalUrl,
      siteName: brandName,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modifiedDate,
      authors: ["Pawlo Team"],
      tags: post.keywords,
      images: [{ url: imageUrl, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.description,
      images: [imageUrl],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = post.relatedSlugs
    .map((relatedSlug) => getPostBySlug(relatedSlug))
    .filter((relatedPost): relatedPost is Post => Boolean(relatedPost));
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;
  const imageUrl = `${siteUrl}${post.image}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    headline: post.title,
    alternativeHeadline: post.seoTitle,
    description: post.description,
    datePublished: post.date,
    dateModified: post.modifiedDate,
    author: { "@type": "Organization", name: brandName, url: siteUrl },
    publisher: {
      "@type": "Organization",
      name: brandName,
      url: siteUrl,
    },
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      caption: post.imageAlt,
    },
    url: canonicalUrl,
    inLanguage: "en-US",
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    wordCount: getWordCount(post.content),
    isPartOf: {
      "@type": "Blog",
      name: "Pawlo Blog",
      url: `${siteUrl}/blog`,
    },
    about: post.searchIntent,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(faqSchema) }}
      />
      <Header />
      <main className={styles.main}>
        <article className={styles.article}>
          {/* Header */}
          <header className={styles.header}>
            <div className={styles.headerInner}>
              <Link href="/blog" className={styles.back}>← All posts</Link>
              <span className={styles.categoryTag}>{post.category}</span>
              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.description}>{post.description}</p>
              <div className={styles.meta}>
                <span>Pawlo Team</span>
                <span>·</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Hero image */}
          <div className={styles.heroImg}>
            <Image src={post.image} alt={post.imageAlt} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 800px" priority />
          </div>

          {/* Body */}
          <div className={styles.body}>
            <div
              className={styles.prose}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <section className={styles.guideLinks} aria-labelledby="related-guides-heading">
              <h2 id="related-guides-heading">Related pet care guides</h2>
              <div className={styles.guideGrid}>
                {related.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className={styles.guideLink}
                  >
                    <span>{relatedPost.category}</span>
                    <strong>{relatedPost.title}</strong>
                  </Link>
                ))}
              </div>
            </section>

            <section className={styles.faq} aria-labelledby="faq-heading">
              <h2 id="faq-heading">Frequently asked questions</h2>
              {post.faqs.map((faq) => (
                <div key={faq.question} className={styles.faqItem}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </section>

            {/* CTA */}
            <div className={styles.cta}>
              <div className={styles.ctaIcon}>🐾</div>
              <div className={styles.ctaBody}>
                <p className={styles.ctaHeading}>
                  Ready to stop wondering who fed the pet?
                </p>
                <p className={styles.ctaText}>
                  Try Pawlo free for 7 days. Get your whole household in sync today.
                </p>
                <a
                  href="https://apps.apple.com/us/app/pawlo-pet-care-tracker/id6762538892"
                  className={styles.ctaBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download on the App Store →
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Related posts */}
        {related.length > 0 && (
          <section className={styles.related}>
            <div className={styles.relatedInner}>
              <h2 className={styles.relatedHeading}>More from the blog</h2>
              <div className={styles.relatedGrid}>
                {related.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className={styles.relatedCard}>
                    <div className={styles.relatedImg}>
                      <Image src={p.image} alt={p.imageAlt} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <div className={styles.relatedBody}>
                      <span className={styles.categoryTag}>{p.category}</span>
                      <h3 className={styles.relatedTitle}>{p.title}</h3>
                      <div className={styles.meta}>
                        <span>{formatDate(p.date)}</span>
                        <span>·</span>
                        <span>{p.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
