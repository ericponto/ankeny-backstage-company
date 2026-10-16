export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      {eyebrow && (
        <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-gold-700">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 font-serif text-4xl tracking-tight text-maroon-500 sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-7 text-stone-600">{description}</p>
      )}
    </div>
  );
}
