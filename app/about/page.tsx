import { Metadata } from "next";
import { getPageBySlug } from "@/lib/wordpress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/about/HeroBanner";
import AboutSection from "@/components/about/AboutSection";
import HighlightsBar from "@/components/about/HighlightsBar";
import TrustedBrands from "@/components/about/TrustedBrands";
import WhyChooseSection from "@/components/about/WhyChooseSection";
import WhyChooseCards from "@/components/about/WhyChooseCards";
import ContactBanner from "@/components/ContactBanner";
import RecentPosts from "@/components/RecentPosts";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("about");
  if (!page) return { title: "About Us | Astro International" };

  // Strip HTML tags for the description
  const description = page.excerpt.rendered
    ? page.excerpt.rendered.replace(/<[^>]*>?/gm, "").trim()
    : "Astro International provides medical equipment and personal protective safety products across Dubai and the GCC region.";

  return {
    title: `${page.title.rendered} | Astro International`,
    description: description,
    alternates: {
      canonical: `https://astrotrading.ae/about`,
    },
  };
}

export default async function AboutPage() {
  const page = await getPageBySlug("about");
  const featuredImage = page?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <>
      <Header activePage="about" />
      <HeroBanner 
        title={page?.title.rendered ?? "About Us"} 
        bgImage={featuredImage}
      />
      <main className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* Render WP Content if available */}
        {page?.content.rendered && (
          <div 
            className="prose prose-lg max-w-none py-10 font-poppins"
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          />
        )}
        
        <AboutSection />
        <HighlightsBar />
        <TrustedBrands />
      </main>
      <WhyChooseSection />
      <WhyChooseCards />
      <RecentPosts />
      <ContactBanner />
      <Footer />
    </>
  );
}