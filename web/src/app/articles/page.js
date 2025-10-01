import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "Articles – Developer.X" };

export default function Articles() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl font-bold text-neutral-900">Articles</h1>
        <p className="mt-2 text-sm text-neutral-600">Browse the latest articles and tutorials.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-md bg-white ring-1 ring-neutral-200 p-4">
              <div className="aspect-[16/10] bg-neutral-200 rounded" />
              <h3 className="mt-3 text-sm font-semibold text-neutral-900">Sample article {i + 1}</h3>
              <p className="mt-1 text-xs text-neutral-600">Short description of the article content.</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}


