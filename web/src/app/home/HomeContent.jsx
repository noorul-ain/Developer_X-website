import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trust from "../components/Trust";
import Recommended from "../components/Recommended";
import LatestGrid from "../components/LatestGrid";
import Footer from "../components/Footer";

export default function HomeContent() {
  return (
    <div className="font-sans min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Trust />
      <Recommended />
      <LatestGrid />
      <Footer />
    </div>
  );
}


