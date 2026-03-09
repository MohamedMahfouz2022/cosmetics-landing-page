import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ShopSection from "@/components/ShopSection";
import WhatsAppOrder from "@/components/WhatsAppOrder";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <ShopSection />
      <WhatsAppOrder />
      <Footer />
    </main>
  );
}
