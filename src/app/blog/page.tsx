import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import { IconArrowRight } from "@/components/icons";
import { SITE_NAME } from "@/lib/site";

const TITLE = "Blog";
const DESCRIPTION =
  "Kuyumcular için dijital vitrin, altın kuru ve pazarlama üzerine yazılar.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-20">
      <div className="fade-up max-w-2xl">
        <span className="text-xs text-fg-dim">Blog</span>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-3 text-balance">
          {TITLE}
        </h1>
        <p className="text-fg-dim mt-4 leading-relaxed">{DESCRIPTION}</p>
      </div>

      {posts.length === 0 ? (
        <p className="fade-up delay-1 text-fg-dim mt-16">
          Yakında burada yazılar olacak.
        </p>
      ) : (
        <div className="fade-up delay-1 hairline-t mt-10">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group hairline-b flex flex-col gap-2 py-8"
            >
              <span className="text-xs text-fg-faint">{formatDate(post.date)}</span>
              <h2 className="text-lg sm:text-xl font-medium tracking-tight group-hover:text-[var(--gold-3)] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-fg-dim leading-relaxed">{post.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-sm text-fg-dim mt-1">
                Devamını oku
                <IconArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
