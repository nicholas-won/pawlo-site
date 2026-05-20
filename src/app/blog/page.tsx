import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts, formatDate } from "@/lib/blog";
import styles from "./page.module.css";

const siteUrl = "https://getpawlo.app";
const blogDescription =
  "Practical guides on shared pet care, dog feeding schedules, pet medication tracking, and coordinating pets between couples, families, and roommates.";

function stringifyJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const metadata: Metadata = {
  title: "Shared Pet Care Blog | Pawlo Pet Care Tips & Guides",
  description: blogDescription,
  keywords: [
    "shared pet care",
    "pet care app",
    "dog feeding tracker",
    "pet medication tracker",
    "pet care app for couples",
    "pet care app for roommates",
    "family pet care app",
  ],
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "Shared Pet Care Blog | Pawlo Pet Care Tips & Guides",
    description:
      "Practical guides on shared pet care for households — feeding schedules, medication tracking, and coordination tips.",
    url: `${siteUrl}/blog`,
    siteName: "Pawlo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shared Pet Care Blog | Pawlo Pet Care Tips & Guides",
    description:
      "Practical guides on shared pet care for couples, families, roommates, and multi-pet households.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteUrl}/blog#blog`,
    name: "Pawlo Blog",
    description: blogDescription,
    url: `${siteUrl}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Pawlo",
      url: siteUrl,
    },
    inLanguage: "en-US",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${siteUrl}/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.modifiedDate,
      articleSection: post.category,
      keywords: post.keywords.join(", "),
    })),
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pawlo shared pet care guides",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(itemListSchema) }}
      />
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.label}>Pawlo Blog</span>
            <h1 className={styles.heroHeading}>
              Pet care tips for the whole household
            </h1>
            <p className={styles.heroSub}>
              Practical guides on shared pet care, feeding schedules, medication
              tracking, and keeping every household member on the same page.
            </p>
          </div>
        </div>

        <div className={styles.container}>
          {/* Featured post */}
          <Link href={`/blog/${featured.slug}`} className={styles.featured}>
            <div className={styles.featuredImg}>
              <Image src={featured.image} alt={featured.imageAlt} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className={styles.featuredBody}>
              <span className={styles.categoryTag}>{featured.category}</span>
              <h2 className={styles.featuredTitle}>{featured.title}</h2>
              <p className={styles.featuredDesc}>{featured.description}</p>
              <div className={styles.meta}>
                <span>{formatDate(featured.date)}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
            </div>
          </Link>

          {/* Post grid */}
          <div className={styles.grid}>
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.cardImg}>
                  <Image src={post.image} alt={post.imageAlt} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.categoryTag}>{post.category}</span>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.cardDesc}>{post.description}</p>
                  <div className={styles.meta}>
                    <span>{formatDate(post.date)}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
