import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import PropertyList from "./components/PropertyList";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-elite-black text-white selection:bg-elite-gold selection:text-black">
      <Navbar />
      <Hero />
      <FeatureSection />
      <PropertyList />
      <Footer />
    </main>
  );
}
