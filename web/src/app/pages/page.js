import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "All Pages – Developer.X" };

const links = [
  { href: "/", label: "Home (/)" },
  { href: "/home", label: "Home (/home)" },
  { href: "/articles", label: "Articles" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function PagesIndex() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl font-bold text-neutral-900">Pages</h1>
        <p className="mt-2 text-sm text-neutral-600">Quick links to all routes.</p>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="block rounded-md ring-1 ring-neutral-200 bg-white p-4 hover:ring-neutral-300">
                <span className="text-sm font-semibold text-neutral-900">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}


