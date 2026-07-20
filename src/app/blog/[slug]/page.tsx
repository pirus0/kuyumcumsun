import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import BlogContent from "@/components/BlogContent";
import { IconArrowRight } from "@/components/icons";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | ${SITE_NAME}`,
      description: post.excerpt,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${SITE_NAME}`,
      description: post.excerpt,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <div className="max-w-2xl mx-auto px-6 sm:px-8 py-20">
      <Link
        href="/blog"
        className="fade-up inline-flex items-center gap-1.5 text-sm text-fg-dim hover:text-fg transition-colors"
      >
        <IconArrowRight size={14} className="rotate-180" />
        Blog
      </Link>

      <div className="fade-up delay-1 mt-8">
        <span className="text-xs text-fg-faint">{formatDate(post.date)}</span>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-3 text-balance">
          {post.title}
        </h1>
      </div>

      <div className="fade-up delay-2 mt-10">
        <BlogContent blocks={post.content} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </div>
  );
}
