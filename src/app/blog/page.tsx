import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts, formatDate } from "@/lib/blog";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog — Pawlo Pet Care Tips & Guides",
  description:
    "Practical guides on shared pet care, dog feeding schedules, pet medication tracking, and coordinating pet care between couples, families, and roommates.",
  alternates: {
    canonical: "https://getpawlo.app/blog",
  },
  openGraph: {
    title: "Blog — Pawlo Pet Care Tips & Guides",
    description:
      "Practical guides on shared pet care for households — feeding schedules, medication tracking, and coordination tips.",
    url: "https://getpawlo.app/blog",
    siteName: "Pawlo",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={featured.image} alt={featured.imageAlt} />
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt={post.imageAlt} />
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
