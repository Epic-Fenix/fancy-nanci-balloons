import { Play, Video } from "lucide-react";

interface Reel {
  id: string;
  title: string;
  src: string;
  poster: string;
}

const POSTER = "?auto=format&fit=crop&w=600&h=1067&q=80";

const REELS: Reel[] = [
  {
    id: "shimmer-arch",
    title: "Luxury Shimmer Wall & Organic Arch",
    src: "https://videos.pexels.com/video-files/34484887/14612597_1920_1080_24fps.mp4",
    poster: `https://images.unsplash.com/photo-1780586382191-bef9c740798e${POSTER}`,
  },
  {
    id: "quinceanera-hall",
    title: "Grand Quinceañera Hall Transformation",
    src: "https://videos.pexels.com/video-files/7292568/7292568-hd_1920_1080_25fps.mp4",
    poster: `https://images.unsplash.com/photo-1602328790041-ee36d98e677c${POSTER}`,
  },
  {
    id: "nyc-technique",
    title: "NYC Technique · Masterclass in Action",
    src: "https://videos.pexels.com/video-files/6434425/6434425-hd_1080_1920_30fps.mp4",
    poster: `https://images.unsplash.com/photo-1767070805937-de496d694419${POSTER}`,
  },
];

export default function ReelsShowcase() {
  return (
    <section id="reels" className="scroll-mt-24 bg-brand-cream py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-champagne/40 bg-white/60 px-4 py-1.5 text-sm font-medium text-brand-muted">
            <Video className="h-4 w-4 text-brand-champagne" />
            Behind The Artistry
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-brand-slate sm:text-4xl">
            Watch the magic come together
          </h2>
          <p className="mt-4 text-pretty text-lg leading-8 text-brand-muted">
            A closer look at the setups, techniques, and reveals — straight from
            our events.
          </p>
        </div>

        {/* Reels: horizontal snap-scroll on mobile, 3-up grid on larger screens */}
        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
          {REELS.map((reel) => (
            <figure
              key={reel.id}
              className="group relative w-[72%] flex-none snap-start overflow-hidden rounded-3xl bg-brand-slate shadow-xl shadow-black/20 ring-1 ring-black/5 sm:w-auto"
            >
              <video
                className="aspect-[9/16] h-full w-full object-cover"
                src={reel.src}
                poster={reel.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />

              {/* "Watch Setup" badge */}
              <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                <Play className="h-3 w-3 fill-white" />
                Watch Setup
              </span>

              {/* Play micro-badge */}
              <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white opacity-80 backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
                <Play className="h-6 w-6 translate-x-0.5 fill-white" />
              </span>

              {/* Gradient overlay + title */}
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-slate/90 via-brand-slate/30 to-transparent p-4 pt-10">
                <p className="text-sm font-semibold text-white">{reel.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
