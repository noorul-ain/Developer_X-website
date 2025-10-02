import Image from "next/image";
import { Share_Tech, Roboto } from "next/font/google";

const shareTech = Share_Tech({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: ["400"], subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="w-full text-white bg-[linear-gradient(90deg,#794D21_0%,#DF8E3D_100%)]">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 py-8 sm:py-14 relative overflow-hidden">
        <Image
          src="/vector.png"
          alt="DX background vector"
          fill
          priority
          className="object-contain opacity-30 pointer-events-none select-none"
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h1 className={`${shareTech.className} text-[20px] sm:text-[28px] md:text-[36px] font-extrabold tracking-tight drop-shadow-sm`}>
            Cutting Edge Tech Insights For Modern Developers
          </h1>
          <p className={`${roboto.className} mt-2 sm:mt-3 text-[11px] sm:text-[13px] md:text-[14px] text-amber-50/95`}>
            Stay ahead of the curve with expert analysis, tutorials, and opinions on the latest technologies shaping the future of software development.
          </p>
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0f1216] text-white text-[10px] sm:text-[12px] px-3 sm:px-4 py-2 rounded-md hover:bg-black/80">
              Explore Articles
              <span className="inline-block">→</span>
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/95 text-neutral-900 text-[10px] sm:text-[12px] px-3 sm:px-4 py-2 rounded-md hover:bg-white">
              Subscribe to News Letter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


