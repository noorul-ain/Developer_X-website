import Image from "next/image";

function getCurrentDate() {
  const now = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return now.toLocaleDateString('en-US', options);
}

export default function Recommended() {
  return (
    <section className="bg-[#f6efe1] py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-[10px] uppercase tracking-wide text-white bg-[#DF8E3D] border border-neutral-300 rounded px-2 py-1 inline-block">Featured Article</div>
        <h3 className="mt-1 text-sm font-bold text-neutral-900">Recommended</h3>
        <p className="text-xs text-neutral-600">Explore recommendations that match your interests</p>

        {/* Featured card */}
        <div className="mt-4 rounded-xl overflow-hidden ring-2 ring-sky-400/70 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image side */}
            <div className="relative min-h-[300px] md:min-h-[360px]">
              <Image src="/rectangle8.png" alt="Featured" fill className="object-cover" />
              <div className="absolute left-3 top-3 text-[10px] bg-black/80 text-white px-2 py-1 rounded-md">
                Artificial Intelligence
              </div>
            </div>
            {/* Content side */}
            <div className="bg-[#161a25] text-white p-5 md:p-7 flex flex-col justify-center md:min-h-[360px]">
              <div className="flex items-center gap-2 text-[10px] text-neutral-300">
                <span className="inline-flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Sarah Chen
                </span>
                <span>•</span>
                <span>6 min read</span>
                <span>•</span>
                <span>{getCurrentDate()}</span>
              </div>
              <h4 className="mt-2 text-sm font-semibold">
                The Future of AI-Powered Development: How Machine Learning is Revolutionizing Code
              </h4>
              <p className="mt-2 text-xs text-neutral-300">
                Explore how artificial intelligence and machine learning are transforming the way we write, test, and deploy code. From automated code completion to intelligent debugging, discover the tools that are reshaping—
              </p>
              <div className="mt-3">
                <button className="text-xs bg-white text-neutral-900 px-3 py-1.5 rounded-md inline-flex items-center gap-1">
                  Read More
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category chips */}
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {[
            "All",
            "Web Development",
            "Artificial Intelligence",
            "Data Science",
            "Mobile Development",
            "DevOps",
            "Backend Development",
          ].map((label, idx) => (
            <button
              key={label}
              className={`${idx === 0 ? "bg-neutral-900 text-white" : "bg-[#CCCCCC]"} text-[10px] px-3 py-1.5 rounded-full ring-1 ring-neutral-300 text-neutral-800`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}


