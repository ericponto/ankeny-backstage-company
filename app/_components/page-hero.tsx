type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-maroon-700 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_100%_at_50%_0%,rgb(201_149_12/22%),transparent_75%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-maroon-950/40" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 sm:py-20">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-gold-400">
          {eyebrow}
        </p>
        <h1 className="font-serif text-4xl leading-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
