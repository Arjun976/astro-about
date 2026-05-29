const WP_BASE = process.env.NEXT_PUBLIC_WP_BASE_URL || "https://astrotrading.ae";

export interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  modified: string;
  featured_media?: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
      media_details?: {
        width: number;
        height: number;
      };
    }>;
  };
}

// Fetch a single page by slug
export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const res = await fetch(
    `${WP_BASE}/wp-json/wp/v2/pages?slug=${slug}&_embed`,
    { next: { revalidate: 3600 } } // ISR: revalidate every hour
  );

  if (!res.ok) return null;

  const pages: WPPage[] = await res.json();
  
  // Debug: Print the raw data to the terminal
  console.log(`\n--- WordPress API Data [Slug: ${slug}] ---`);
  console.log(JSON.stringify(pages[0], null, 2));
  console.log(`--- End of Data ---\n`);

  return pages[0] ?? null;
}

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

// Fetch all pages (for nav or sitemap)
export async function getAllPages(): Promise<WPPage[]> {
  const res = await fetch(`${WP_BASE}/wp-json/wp/v2/pages?_fields=id,slug,title`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
}

// Fetch recent posts
export async function getRecentPosts(count: number = 3): Promise<WPPost[]> {
  const res = await fetch(
    `${WP_BASE}/wp-json/wp/v2/posts?per_page=${count}&_embed`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) return [];
  return res.json();
}