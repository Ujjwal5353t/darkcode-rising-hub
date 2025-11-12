import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Themes from "@/components/Themes";
import Prizes from "@/components/Prizes";
import Schedule from "@/components/Schedule";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Themes />
      <Prizes />
      <Schedule />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
