import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import styles from "./post.module.css";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Pawlo Blog`,
    description: post.description,
    alternates: { canonical: `https://getpawlo.app/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://getpawlo.app/blog/${post.slug}`,
      siteName: "Pawlo",
      type: "article",
      publishedTime: post.date,
      images: [{ url: `https://getpawlo.app${post.image}`, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Pawlo" },
    publisher: {
      "@type": "Organization",
      name: "Pawlo",
      url: "https://getpawlo.app",
    },
    image: `https://getpawlo.app${post.image}`,
    url: `https://getpawlo.app/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.image} alt={post.imageAlt} />
          </div>

          {/* Body */}
          <div className={styles.body}>
            <div
              className={styles.prose}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA */}
            <div className={styles.cta}>
              <div className={styles.ctaIcon}>🐾</div>
              <div className={styles.ctaBody}>
                <p className={styles.ctaHeading}>
                  Ready to stop wondering who fed the pet?
                </p>
                <p className={styles.ctaText}>
                  Pawlo is free to download on the App Store. Get your whole
                  household in sync today.
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
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.image} alt={p.imageAlt} />
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
