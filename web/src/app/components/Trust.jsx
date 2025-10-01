import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function FeatureCard({ title, desc, imageSrc }) {
  return (
    <div className="rounded-md bg-transparent text-neutral-200 p-4 border border-neutral-700/70">
      <div className="flex flex-col items-start gap-3">
        <div className="w-7 h-7 rounded bg-neutral-800 flex items-center justify-center overflow-hidden">
          <Image src={imageSrc} alt="feature" width={20} height={20} />
        </div>
        <div className="text-sm font-semibold text-center w-full">{title}</div>
      </div>
      <p className="mt-2 text-xs text-neutral-400">{desc}</p>
    </div>
  );
}

export default function Trust() {
  return (
    <section className="w-full bg-[#0f1216] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className={`${inter.className} text-sm font-semibold text-neutral-100`}>Why Companies Trust Developer.X</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <FeatureCard
            title="Verified & updated information"
            desc="Only companies with proven tech competencies can become featured in a top listing. Build your reputation as a top developer with Developer.X"
            imageSrc="/trust3(1).png"
          />
          <FeatureCard
            title="Support & help"
            desc="Developer.X brings more qualified leads to featured companies thanks to the better visibility in the top listings and higher traffic to their websites"
            imageSrc="/trust3(2).png"
          />
          <FeatureCard
            title="Research & surveys"
            desc="We provide featured companies with detailed analytics about the top listing page performance as well as use custom tagged url for you to track the listing effectiveness"
            imageSrc="/trust3(3).png"
          />
        </div>
      </div>
    </section>
  );
}


