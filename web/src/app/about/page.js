import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "About – Developer.X" };

export default function About() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl font-bold text-neutral-900">About Developer.X</h1>
        <p className="mt-2 text-sm text-neutral-700 max-w-2xl">
          We provide cutting-edge insights, tutorials, and research to help developers build the future of technology. Our content is crafted by engineers and reviewed for accuracy.
        </p>
      </main>
      <Footer />
    </div>
  );
}


