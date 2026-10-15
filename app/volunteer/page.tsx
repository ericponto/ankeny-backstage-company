import {
  ForkKnifeIcon,
  HammerIcon,
  TicketIcon,
} from "@phosphor-icons/react/ssr";
import PageHero from "../_components/page-hero";

const opportunities = [
  {
    icon: ForkKnifeIcon,
    category: "DURING TECH WEEK",
    name: "Tech week help",
    description:
      "Help keep everyone fed, and ready to go during the busiest week of a production.",
    examples: ["Provide or serve a meal", "Serve as a green room guardian"],
  },
  {
    icon: HammerIcon,
    category: "BEFORE & AFTER THE SHOW",
    title: "Help build the world on stage.",
    name: "Set build & strike",
    description:
      "Help construct the set before the show and take it down after.",
    examples: ["Set construction", "Strike after the show"],
  },
  {
    icon: TicketIcon,
    category: "DURING PERFORMANCES",
    title: "Help the show run smoothly.",
    name: "Front of house",
    description: "Help welcome the audience and make show nights run smoothly.",
    examples: ["Take tickets and welcome guests", "Sell concessions"],
  },
];

function OpportunitySection({
  icon: Icon,
  category,
  title,
  name,
  description,
  examples,
}: (typeof opportunities)[number]) {
  return (
    <section className="grid gap-4 border-t border-stone-300 py-10 md:grid-cols-[100px_1fr_1fr] md:gap-6 md:py-12">
      <div>
        <div className="flex items-center justify-center rounded-full bg-gold-200 text-gold-900 shadow-sm p-3 md:p-4 w-fit">
          <Icon size={26} weight="fill" aria-hidden="true" />
        </div>
      </div>

      <div>
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-maroon-700">
          {category}
        </p>
        <h2 className="mt-3 font-serif text-2xl leading-snug sm:text-3xl">
          {name}
        </h2>
      </div>

      <div>
        <p className="leading-7 text-stone-600">{description}</p>
        <ul className="mt-5 space-y-2">
          {examples.map((example) => (
            <li key={example} className="flex gap-3 text-sm text-stone-700">
              <span aria-hidden="true" className="text-gold-600">
                ✳
              </span>
              {example}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function VolunteerPage() {
  return (
    <main className="min-h-screen bg-ivory-100 text-stone-900">
      <PageHero
        eyebrow="Volunteer"
        title="Come help us backstage"
        description="If you can swing a hammer, serve a meal, or just lend a hand, we can use your help. There are many ways to support our students."
      />

      <section
        id="get-involved"
        className="bg-ivory-100 px-5 py-4 sm:px-8 sm:py-8"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-5 text-4xl font-bold text-maroon-700 font-serif">
            Opportunities
          </h2>
          <p className="text-lg mb-8 max-w-3xl">
            Here are a few examples of common volunteer opportunities, but there
            are many ways to help. Anyway you can lend a hand, we&apos;d love to
            have you join the team.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          {opportunities.map((opportunity) => (
            <OpportunitySection key={opportunity.category} {...opportunity} />
          ))}
        </div>
      </section>
      <section className="bg-sand-100 px-5 sm:px-8 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-16">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold-700">
                Special event
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-snug sm:text-4xl">
                Large Group Speech
              </h2>
              <p className="mt-3 font-semibold text-maroon-800">
                Saturday, January 23, 2027
              </p>
            </div>

            <div>
              <p className="text-lg font-semibold leading-7">
                We&apos;re hosting the district contest this year
              </p>
              <p className="mt-4 leading-7 text-stone-600">
                We&apos;ll need a large team of volunteers to help run this
                event. If you can spare some time that day, this is a great way
                to support our students and visiting schools.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-maroon-700 px-5 py-12 text-ivory-100 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mt-3 font-serif text-3xl leading-snug sm:text-4xl ">
            Ready to volunteer?
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-200">
            First, let us know you&apos;re interested in helping out by sending
            us an email. Second, to volunteer in any Ankeny Community School
            District program you’ll need to be regsistered through the school
            district.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="flex flex-col rounded-2xl border border-gold-500/30 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Contact us</h3>
              <p className="flex-1 mt-4 leading-7 text-stone-200">
                Reach out to the ABC team to learn more about volunteer
                opportunities and how to get involved.
              </p>
              <a
                href="mailto:admin@ankenybackstageco.org"
                className="font-semibold mt-5 inline-flex items-center text-gold-200 hover:underline decoration-gold-300 underline-offset-4 transition hover:text-gold-100"
              >
                admin@ankenybackstageco.org
              </a>
            </div>
            <div className="flex flex-col rounded-2xl border border-gold-500/30 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Register</h3>
              <p className="flex-1 mt-4 leading-7 text-stone-200">
                Complete the registration process through the Ankeny Community
                School District's Volunteer Portal to be eligible to volunteer.
              </p>
              <a
                href="https://app.betterimpact.com/PublicEnterprise/48bb9455-72f6-4445-a4bd-db232e49183e"
                className="font-semibold mt-5 inline-flex items-center text-gold-200 hover:underline decoration-gold-300 underline-offset-4 transition hover:text-gold-100"
              >
                Register for Volunteer Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
