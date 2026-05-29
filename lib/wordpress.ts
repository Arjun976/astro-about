const WP_BASE = process.env.NEXT_PUBLIC_WP_BASE_URL || "https://astrotrading.ae";

export interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  modified: string;
}

// Fetch a single page by slug
export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const res = await fetch(
    `${WP_BASE}/wp-json/wp/v2/pages?slug=${slug}&_fields=id,slug,title,content,excerpt,modified`,
    { next: { revalidate: 3600 } } // ISR: revalidate every hour
  );

  if (!res.ok) return null;

  const pages: WPPage[] = await res.json();
  return pages[0] ?? null;
}

// Fetch all pages (for nav or sitemap)
export async function getAllPages(): Promise<WPPage[]> {
  const res = await fetch(`${WP_BASE}/wp-json/wp/v2/pages?_fields=id,slug,title`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
}