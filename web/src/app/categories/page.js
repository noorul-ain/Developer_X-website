import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "Categories – Developer.X" };

const categories = [
  "Web Development",
  "AI & Machine Learning",
  "Mobile Development",
  "DevOps",
  "Data Science",
];

export default function Categories() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl font-bold text-neutral-900">Categories</h1>
        <p className="mt-2 text-sm text-neutral-600">Explore articles by topic.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((c) => (
            <a key={c} href="#" className="rounded-md ring-1 ring-neutral-200 bg-white p-4 hover:ring-neutral-300">
              <div className="text-sm font-semibold text-neutral-900">{c}</div>
              <div className="mt-1 text-xs text-neutral-600">Discover posts in {c}.</div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}


