import { FlipWords } from "@/components/ui/flip-words";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  const words = [
    "Polished",
    "Chic",
    "Sleek",
    "Elegant",
    "Artful",
    "Refined",
    "Innovative",
    "Graceful",
    "Minimalist",
    "Luxurious",
    "Captivating",
    "Aesthetic",
  ];

  return (
    <main>
      <div className="bg-grid-white/[0.02] relative flex h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
        <div className="absolute inset-0 h-screen w-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="h-full w-full"
            particleColor="#FFFFFF"
          />
        </div>
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          <div className="flex h-[40rem] items-center justify-center px-4">
            <div className="mx-auto text-4xl font-normal text-neutral-600 dark:text-neutral-400">
              Build
              <FlipWords words={words} /> <br />
              websites with{" "}
              <span className="cursor-pointer underline">
                <a href="mailto:ahmed.abdalla.mailbox@gmail.com">Me</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
