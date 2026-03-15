import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutTrust from "@/components/AboutTrust";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductCategories />
        <FeaturedProducts />
        <AboutTrust />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
