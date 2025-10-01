import Image from "next/image";

const imageSources = [
  "/IMG BG (1).png",
  "/IMG BG (2).png", 
  "/IMG BG (3).png",
  "/IMG BG (4).png",
  "/IMG BG (5).png",
  "/IMG BG.png"
];

function getCurrentDate() {
  const now = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return now.toLocaleDateString('en-US', options);
}

function Card({ imageIndex }) {
  return (
    <article className="rounded-md overflow-hidden bg-black flex flex-col ring-1 ring-neutral-800">
      <div className="relative aspect-[16/10]">
        <Image src={imageSources[imageIndex] || imageSources[0]} alt="Article cover" fill className="object-cover" />
      </div>
      <div className="p-3">
        <div className="flex items-center gap-2 text-[10px] text-neutral-300">
          <span>Sarah Doe</span>
          <span>•</span>
          <span>{getCurrentDate()}</span>
        </div>
        <h4 className="mt-1 text-sm font-semibold text-white line-clamp-2">
          Modern React Patterns: Building Scalable Applications with Advanced Hooks
        </h4>
        <p className="mt-1 text-xs text-neutral-300/90 line-clamp-3">
          Explore best practices for state management, performance optimization, and reusable logic.
        </p>
        <div className="mt-2">
          <button className="text-xs bg-white/5 text-white px-3 py-1.5 rounded-md inline-flex items-center gap-2 ring-1 ring-neutral-700 hover:bg-white/10">
            <span>Read More</span>
            <span className="ml-1">→</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default function LatestGrid() {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-sm font-semibold text-neutral-900">Latest Articles</h3>
        <p className="text-xs text-neutral-600">Stay up to date with the latest trends and insights in technology</p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} imageIndex={i} />
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <button className="text-xs bg-[#CCCCCC] text-neutral-800 px-3 py-1.5 rounded-md ring-1 ring-neutral-300 hover:bg-neutral-50 inline-flex items-center gap-2">
            Load More Articles
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}


