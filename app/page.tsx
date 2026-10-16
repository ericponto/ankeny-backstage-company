import Image from "next/image";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  MaskHappyIcon,
  MaskSadIcon,
} from "@phosphor-icons/react/ssr";
import { ActionLink } from "./_components/action-link";
import { SurfaceCard } from "./_components/surface-card";
import { TextLink } from "./_components/text-link";

const photos = {
  hero: "/cmiyc-hero.jpg",
  production: "/green-room.jpg",
  backstage: "/backstage.jpg",
  team: "/booth.jpg",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory-50 text-[#302822]">
      {/* Hero */}
      <section
        id="home"
        className="relative isolate min-h-[540px] overflow-hidden sm:min-h-[650px] bg-black"
      >
        <Image
          src={photos.hero}
          alt="A theater stage ready for a performance"
          fill
          className="absolute inset-0 -z-20 w-full object-cover !top-[-12vw]"
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
              <ActionLink
                href="https://givebutter.com/ABC-donations-lmg6wc"
                variant="ghost"
                size="lg"
                className="w-fit gap-3 px-10 font-light tracking-[0.1em]"
                external
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
              </ActionLink>
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
            <Image
              src={photos.production}
              alt="Students getting ready in the green room."
              width={1200}
              height={800}
              className="relative aspect-2/1 sm:aspect-4/3 w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-sand-100 px-5 py-20 sm:px-8 sm:py-24 relative ">
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

          <div className="mt-14 grid gap-10 md:gap-6 md:grid-cols-2">
            <SurfaceCard className="group relative p-7 sm:p-8">
              <div className="absolute -top-7 left-7 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold-200 text-gold-800 shadow-md">
                <MaskSadIcon size={30} weight="fill" aria-hidden="true" />
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold font-serif ">Speech</h3>
              </div>
              <p className="mt-4 leading-7 text-[#65594f]">
                AHS Speech gives students a place to showcase their talents,
                grow their public speaking skills, create art, and tell stories.
                With a variety of categories and a welcoming environment, every
                student has a chance to find their voice in Large Group and
                Individual competitions.
              </p>
              <div className="mt-6 flex items-center justify-between gap-3">
                <TextLink
                  href="https://sites.google.com/ankenyschools.org/ahs-speech/home"
                  external
                >
                  Learn more
                </TextLink>
                <div className="ml-auto flex items-center gap-3">
                  <a
                    className="inline-flex items-center gap-2 rounded-full p-2 text-sm font-semibold text-maroon-500 transition hover:border-maroon-700 hover:text-maroon-800"
                    href="https://www.facebook.com/profile.php?id=61574074319966"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook for Ankeny Speech"
                  >
                    <FacebookLogoIcon
                      size={22}
                      weight="bold"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    className="inline-flex items-center gap-2 rounded-full p-2 text-sm font-semibold text-maroon-500 transition hover:border-maroon-700 hover:text-maroon-800"
                    href="https://www.instagram.com/ankenyspeech"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram for Ankeny Speech"
                  >
                    <InstagramLogoIcon
                      size={22}
                      weight="bold"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </SurfaceCard>
            <SurfaceCard className="group relative p-7 sm:p-8">
              <div className="absolute -top-7 left-7 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-maroon-100 text-maroon-600 shadow-md">
                <MaskHappyIcon size={30} weight="fill" aria-hidden="true" />
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold font-serif ">Drama</h3>
              </div>
              <p className="mt-4 leading-7 text-[#65594f]">
                AHS Drama brings students together to tell stories, build
                skills, and create unforgettable experiences through the fall
                play and spring musical. Whether on stage or behind the scenes,
                students have opportunities to explore their creativity, work as
                a team, and bring stories to life.
              </p>
              <div className="mt-6 flex items-center justify-between gap-3">
                <TextLink href="https://ankenydrama.ludus.com/" external>
                  Find tickets
                </TextLink>
                <div className="ml-auto flex items-center gap-3">
                  <a
                    className="inline-flex items-center gap-2 rounded-full p-2 text-sm font-semibold text-maroon-500 transition hover:border-maroon-700 hover:text-maroon-800"
                    href="https://www.instagram.com/ankenyhsdrama/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram for Ankeny Drama"
                  >
                    <InstagramLogoIcon
                      size={22}
                      weight="bold"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </SurfaceCard>
          </div>
        </div>
        <TextLink
          href="/important-dates"
          className="absolute bottom-10 right-16"
          showArrow
        >
          See upcoming dates
        </TextLink>
      </section>

      {/* Behind the scenes */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 grid grid-cols-2 gap-4 lg:order-1 relative">
              <div className="w-1 h-full bg-maroon-500 rounded-full absolute left-[30%] top-[-12%] rotate-33"></div>
              <div className="w-1 h-full bg-maroon-500 rounded-full absolute left-[calc(30%+24px)] top-[calc(-12%-8px)] rotate-33"></div>
              <div className="w-1 h-full bg-maroon-500 rounded-full absolute left-[calc(30%+48px)] top-[calc(-12%-16px)] rotate-33"></div>
              <Image
                src="/painting.jpg"
                alt="Student painting a set piece"
                width={900}
                height={1200}
                className="relative aspect-3/4 w-full rounded-2xl object-cover shadow-md"
              />
              <div className="flex flex-col gap-4 pt-10">
                <Image
                  src={photos.team}
                  alt="Students working in the sound and lighting booth"
                  width={1200}
                  height={900}
                  className="relative aspect-square w-full rounded-2xl object-cover shadow-md"
                />
                <Image
                  src="/anything-goes-build.jpg"
                  alt="Parent volunteers building a set piece for the musical Anything Goes"
                  width={900}
                  height={600}
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
              <TextLink
                href="/volunteer"
                className="mt-6 inline-flex"
                showArrow
              >
                Learn more about volunteering
              </TextLink>
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
          <TextLink
            href="mailto:admin@ankenybackstageco.org?subject=Ankeny%20Backstage%20Company"
            className="mt-2 inline-block font-medium decoration-gold-300 decoration-2"
            tone="gold"
          >
            admin@ankenybackstageco.org
          </TextLink>
        </div>
      </section>
    </main>
  );
}
