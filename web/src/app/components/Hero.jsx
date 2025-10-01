import Image from "next/image";
import { Share_Tech, Roboto } from "next/font/google";

const shareTech = Share_Tech({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: ["400"], subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="w-full text-white bg-[linear-gradient(90deg,#794D21_0%,#DF8E3D_100%)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 relative overflow-hidden">
        <Image
          src="/vector.png"
          alt="DX background vector"
          fill
          priority
          className="object-contain opacity-30 pointer-events-none select-none"
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h1 className={`${shareTech.className} text-[28px] sm:text-[36px] font-extrabold tracking-tight drop-shadow-sm`}>
            Cutting Edge Tech Insights For Modern Developers
          </h1>
          <p className={`${roboto.className} mt-3 text-[13px] sm:text-[14px] text-amber-50/95`}>
            Stay ahead of the curve with expert analysis, tutorials, and opinions on the latest technologies shaping the future of software development.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <button className="inline-flex items-center gap-2 bg-[#0f1216] text-white text-[12px] px-4 py-2 rounded-md hover:bg-black/80">
              Explore Articles
              <span className="inline-block">→</span>
            </button>
            <button className="inline-flex items-center gap-2 bg-white/95 text-neutral-900 text-[12px] px-4 py-2 rounded-md hover:bg-white">
              Subscribe to News Letter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


