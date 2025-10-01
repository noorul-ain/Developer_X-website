import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "Contact – Developer.X" };

export default function Contact() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl font-bold text-neutral-900">Contact</h1>
        <p className="mt-2 text-sm text-neutral-600">We'd love to hear from you.</p>
        <form className="mt-6 max-w-lg space-y-3">
          <input className="w-full rounded-md ring-1 ring-neutral-300 px-3 py-2 text-sm" placeholder="Your name" />
          <input className="w-full rounded-md ring-1 ring-neutral-300 px-3 py-2 text-sm" placeholder="Your email" />
          <textarea rows="4" className="w-full rounded-md ring-1 ring-neutral-300 px-3 py-2 text-sm" placeholder="Message" />
          <button className="rounded-md bg-neutral-900 text-white text-sm px-4 py-2">Send</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}


