import Link from "next/link";
import PageHero from "../_components/page-hero";

const events = [
  {
    id: "clue",
    category: "DRAMA",
    title: "Fall Play: Clue",
    description:
      "A mansion, a mystery, and a cast of suspicious characters. Come see how it all unfolds.",
    featured: true,
    cta: {
      text: "Tickets on sale now",
      url: "https://ankenydrama.ludus.com/",
    },
    dates: [
      { label: "Tech week", date: "Nov 2–5, 2026" },
      {
        label: "Performances",
        date: "Nov 6–8, 2026",
        detail: (
          <>
            11/6: 7pm
            <br />
            11/7: 2pm & 7pm
            <br />
            11/8: 2pm
          </>
        ),
      },
    ],
  },
  {
    id: "large-group-speech",
    category: "SPEECH",
    title: "Large Group Speech",
    description:
      "Students work together to perform, create, and compete in a variety of speech categories.",
    dates: [
      {
        label: "District",
        date: "Jan 23, 2027",
        detail: "Hosted by Ankeny High School",
      },
      { label: "State", date: "Feb 6, 2027" },
      { label: "All-State", date: "Feb 19, 2027" },
    ],
  },
  {
    id: "individual-speech",
    category: "SPEECH",
    title: "Individual Speech",
    description:
      "Students take the spotlight with individual performances and presentations.",
    dates: [
      { label: "District", date: "Feb 27, 2027" },
      { label: "State", date: "Mar 13, 2027" },
      { label: "All-State", date: "Apr 5, 2027" },
    ],
  },
  {
    id: "spring-musical",
    category: "DRAMA",
    title: "Spring Musical",
    description:
      "Another chance for students to bring a story to life on stage. Musical title to be announced!",
    dates: [
      { label: "Tech week", date: "Apr 5–8, 2027", detail: "April 5–8" },
      {
        label: "Performances",
        date: "Apr 9–11, 2027",
        detail: "April 9, 10 & 11",
      },
    ],
  },
];

function DateRow({
  label,
  date,
  detail,
}: {
  label: string;
  date: string;
  detail?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 border-t border-maroon-100 py-4 sm:flex-row sm:gap-6">
      <div className="w-32 shrink-0 text-sm font-bold uppercase tracking-wide text-maroon-700">
        {label}
      </div>
      <div>
        <p className="font-semibold text-stone-900">{date}</p>
        {detail && <p className="mt-0.5 text-sm text-stone-600">{detail}</p>}
      </div>
    </div>
  );
}

export default function ImportantDatesPage() {
  return (
    <main className="min-h-screen bg-ivory-100 text-stone-900">
      <PageHero
        eyebrow="Important dates"
        title="Mark your calendar"
        description="From opening nights to competition days, here's what's coming up for Ankeny's school drama and speech programs."
      />

      {/* Event list */}
      <section
        id="upcoming-events"
        className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20"
      >
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-700">
            The 2026–2027 season
          </p>
          <h2 className="mt-3 font-serif text-4xl text-maroon-500 sm:text-4xl">
            What&apos;s happening
          </h2>
          <p className="mt-4 leading-7 text-stone-600">
            Save the dates, plan a night out, and cheer on our students.
            We&apos;ll share more details as each event gets closer.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {events.map((event) => (
            <article
              key={event.id}
              className={`rounded-2xl border relative ${
                event.featured
                  ? "border-gold-400 shadow-md shadow-gold-900/5"
                  : "border-stone-200"
              } bg-white`}
            >
              {event.featured && (
                <div className="absolute -top-4 left-4 rounded-md bg-gold-200 border border-gold-400 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-maroon-950">
                  Coming soon
                </div>
              )}

              <div className="p-6 sm:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-maroon-700">
                  {event.category}
                </p>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl">
                  {event.title}
                </h3>
                <p className="mt-3 min-h-12 leading-6 text-stone-600">
                  {event.description}
                </p>

                <div className="mt-5">
                  {event.dates.map((date) => (
                    <DateRow key={date.label} {...date} />
                  ))}
                </div>

                {event.cta && (
                  <div className="mt-6">
                    <a
                      href={event.cta.url}
                      className="inline-flex items-center  rounded-full bg-maroon-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-maroon-700"
                    >
                      {event.cta.text}
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-stone-500">
          Dates are subject to change. Check with the program or school for the
          most up-to-date information.
        </p>
      </section>
    </main>
  );
}
