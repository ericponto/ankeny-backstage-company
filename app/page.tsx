import Logo from "./logo";
import CurrentYear from "../components/current-year";
import { Suspense } from "react";

const photos = {
  hero: "/cmiyc-hero.jpg",
  production: "/green-room.jpg",
  backstage: "/backstage.jpg",
  team: "/booth.jpg",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf8f1] text-[#302822]">
      {/* Header */}
      <header className="relative z-10 border-b border-[#e9dfd0] bg-[#fbf8f1]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="/" className="flex items-center gap-3">
            <div>
              <Logo />
            </div>
          </a>

          <a
            href="https://givebutter.com/ABC-donations-lmg6wc"
            className="rounded-full bg-maroon-500 px-6 py-2 text-sm font-bold text-white transition hover:bg-maroon-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
          >
            Donate
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative isolate min-h-[540px] overflow-hidden sm:min-h-[650px] bg-black"
      >
        <img
          src={photos.hero}
          alt="A theater stage ready for a performance"
          className="absolute inset-0 -z-20 w-full object-cover top-[-12vw]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black-900/90 via-black-800/75 to-black-800/20" />

        <div className="mx-auto flex min-h-[540px] max-w-7xl items-center px-5 py-20 sm:min-h-[650px] sm:px-8">
          <div className="text-center mx-auto">
            <h1 className="mt-[20vw] font-serif text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Great shows
              <br />
              take a <span className="text-gold-300">team</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/90 sm:text-xl">
              Your support helps provide the resources that help Ankeny speech
              and drama students bring every performance to life.
            </p>

            <div className="mt-9 flex justify-center">
              <a
                href="https://givebutter.com/ABC-donations-lmg6wc"
                className="inline-flex w-fit items-center justify-center gap-3 rounded-full border border-white/30 px-10 py-3 text-2xl font-light uppercase tracking-[0.1em] text-white transition hover:border-white hover:text-gold-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
              >
                <span
                  className="block h-px w-6 bg-gold-300"
                  aria-hidden="true"
                />
                <span>Donate</span>
                <span
                  className="block h-px w-6 bg-gold-300 -ml-2"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-2 w-full bg-gold-500" />
      </section>

      {/* Introduction */}
      <section id="about" className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-20">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-gold-700">
              Ankeny Backstage Company
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-maroon-500 sm:text-5xl">
              Our mission
            </h2>
            <div className="mt-6 flex gap-4">
              <div className="w-5 rounded-full bg-maroon-500" />
              <p className="text-lg leading-8 text-[#65594f]">
                To support the drama and speech programs at Ankeny High School,
                Southview Middle School, and Parkview Middle School by bringing
                families and community members together to provide the resources
                and opportunities students need to learn, grow, and participate
                on stage and backstage.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={photos.production}
              alt="Students getting ready in the green room."
              className="relative aspect-2/1 sm:aspect-4/3 w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f0e9dc] px-5 py-20 sm:px-8 sm:py-24 relative ">
        <div className="blur-xs inset-0 absolute">
          <div className="hidden md:block inset-0 absolute bg-gold-400/8 [clip-path:polygon(23%_0%,27%_0%,60%_100%,-10%_100%)]"></div>
          <div className="hidden md:block inset-0 absolute bg-gold-400/8 [clip-path:polygon(73%_0%,77%_0%,110%_100%,40%_100%)]"></div>
          <div className="md:hidden inset-0 absolute bg-gold-400/8 [clip-path:polygon(48%_0%,52%_0%,130%_100%,-30%_100%)]"></div>
        </div>
        <div className="mx-auto max-w-7xl relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-gold-700">
              The programs we support
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-maroon-500 sm:text-5xl">
              Learn about the AHS speech and drama programs
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <article className="group rounded-3xl border border-[#e4d6c3] bg-[#fbf8f1] p-7 shadow-sm sm:p-8">
              <h3 className="text-2xl font-bold font-serif ">Speech</h3>
              <p className="mt-4 leading-7 text-[#65594f]">
                AHS Speech gives students a place to showcase their talents,
                grow their public speaking skills, create art, and tell stories.
                With a variety of categories and a welcoming environment, every
                student has a chance to find their voice in Large Group and
                Individual competitions.
              </p>
              <a
                className="mt-6 inline-flex items-center gap-2 font-bold text-maroon-500 underline decoration-gold-500 decoration-2 underline-offset-8 transition hover:text-maroon-700"
                href="https://sites.google.com/ankenyschools.org/ahs-speech/home"
              >
                Learn more
              </a>
            </article>
            <article className="group rounded-3xl border border-[#e4d6c3] bg-[#fbf8f1] p-7 shadow-sm sm:p-8">
              <h3 className="text-2xl font-bold font-serif ">Drama</h3>
              <p className="mt-4 leading-7 text-[#65594f]">
                AHS Drama brings students together to tell stories, build
                skills, and create unforgettable experiences through the fall
                play and spring musical. Whether on stage or behind the scenes,
                students have opportunities to explore their creativity, work as
                a team, and bring stories to life.
              </p>
              <a
                className="mt-6 inline-flex items-center gap-2 font-bold text-maroon-500 underline decoration-gold-500 decoration-2 underline-offset-8 transition hover:text-maroon-700"
                href="https://ankenydrama.ludus.com/"
              >
                Find tickets
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Behind the scenes */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 grid grid-cols-2 gap-4 lg:order-1 relative">
              <div className="w-1 h-full bg-maroon-500 rounded-full absolute left-[30%] top-[-12%] rotate-33"></div>
              <div className="w-1 h-full bg-maroon-500 rounded-full absolute left-[calc(30%+24px)] top-[calc(-12%-8px)] rotate-33"></div>
              <div className="w-1 h-full bg-maroon-500 rounded-full absolute left-[calc(30%+48px)] top-[calc(-12%-16px)] rotate-33"></div>
              <img
                src="/painting.jpg"
                alt="Student painting a set piece"
                className="relative aspect-3/4 w-full rounded-2xl object-cover shadow-md"
              />
              <div className="flex flex-col gap-4 pt-10">
                <img
                  src={photos.team}
                  alt="Students working in the sound and lighting booth"
                  className="relative aspect-square w-full rounded-2xl object-cover shadow-md"
                />
                <img
                  src="/anything-goes-build.jpg"
                  alt="Parent volunteers building a set piece for the musical Anything Goes"
                  className="relative aspect-3/2 w-full rounded-2xl object-cover shadow-md"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-gold-700">
                Come be a part of it
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                We have a <span className="text-maroon-500">role</span> for you
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#65594f]">
                You don&apos;t have to know theater. You don&apos;t have to be
                an expert. You just have to be willing to help.
              </p>
              <p className="mt-4 leading-7 text-[#65594f]">
                From building sets, to selling concessions, to helping provide
                meals during tech week, there is a long list of ways to get
                involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section
        id="contact"
        className="relative overflow-hidden bg-maroon-500 px-5 py-16 text-center sm:px-8 sm:py-20"
      >
        <div className="relative mx-auto max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-gold-200">
            Contact us
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-white sm:text-6xl">
            Join the team
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/85">
            Send us an email to get involved or learn more.
          </p>
          <a
            className="mt-2 inline-block font-medium text-gold-200 hover:underline decoration-gold-300 decoration-2 underline-offset-8 transition hover:text-gold-300"
            href="mailto:admin@ankenybackstageco.org?subject=Ankeny%20Backstage%20Company"
          >
            admin@ankenybackstageco.org
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 px-5 py-8 text-white/75 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div></div>
          <p className="text-sm">
            ©{" "}
            <Suspense fallback="">
              <CurrentYear />
            </Suspense>{" "}
            Ankeny Backstage Company
          </p>
        </div>
      </footer>
    </main>
  );
}
