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

export const metadata = {
  title: "About Us | Astro International",
  description:
    "Astro International provides medical equipment and personal protective safety products across Dubai and the GCC region.",
};

export default async function AboutPage() {
  // Fetch WP data — currently the about page content is empty in WP,
  // but this is wired up for when you add ACF fields or content blocks
  const page = await getPageBySlug("about");

  return (
    <>
      <Header activePage="about" />
      <HeroBanner title={page?.title.rendered ?? "About Us"} />
      <main className="max-w-[1400px] mx-auto px-5 md:px-10">
        <AboutSection />
        <HighlightsBar />
        <TrustedBrands />
      </main>
      <WhyChooseSection />
      <WhyChooseCards />
      <ContactBanner />
      <Footer />
    </>
  );
}