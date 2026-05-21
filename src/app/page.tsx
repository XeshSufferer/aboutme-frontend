import { Separator } from "@/components/ui/separator";
import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";
import { Experience } from "@/components/experience";
import { Clock } from "@/components/clock";
import { Weather } from "@/components/weather";
import { MusicPlayer } from "@/components/music-player";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6">
        <Hero />

        <Separator className="mb-12 bg-cyan-900/20" />

        <section className="mb-12 space-y-6">
          <TechStack />
        </section>

        <Separator className="mb-12 bg-cyan-900/20" />

        <section className="mb-12 space-y-6">
          <Experience />
        </section>

        <Separator className="mb-12 bg-cyan-900/20" />

        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Калининград
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl bg-card border border-cyan-900/20 p-6 flex flex-col items-center justify-center gap-4">
              <Clock />
            </div>
            <div className="rounded-xl bg-card border border-cyan-900/20 p-6 flex flex-col items-center justify-center gap-4">
              <Weather />
            </div>
          </div>
        </section>

        <Separator className="mb-12 bg-cyan-900/20" />

        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Lo-fi</h2>
          <MusicPlayer />
        </section>
      </main>

      <Footer />
    </div>
  );
}
