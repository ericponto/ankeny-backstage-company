"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "../logo";

const banner = {
  enabled: true,
  message: "Tickets for Clue are on sale now!",
  cta: {
    text: "Get tickets",
    url: "https://ankenydrama.ludus.com/",
  },
};

const donationUrl = "https://givebutter.com/ABC-donations-lmg6wc";

const navLinks = [
  { label: "Dates", href: "/important-dates" },
  { label: "Volunteer", href: "/volunteer" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {banner.enabled && (
        <div className="bg-gold-300 py-3 text-center">
          <p className="text-sm text-maroon-900">
            {banner.message}
            <a
              href={banner.cta.url}
              className="ml-2 font-medium hover:underline"
            >
              {banner.cta.text}
            </a>
          </p>
        </div>
      )}

      <header className="relative z-10 border-b border-[#e9dfd0] bg-[#fbf8f1]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-center justify-between gap-6 py-4">
            <Link href="/" className="flex shrink-0 items-center">
              <Logo />
            </Link>

            <nav className="hidden items-center justify-end gap-6 flex-1 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-[0.12em] text-stone-700 transition hover:text-maroon-700"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <a
                href={donationUrl}
                className="inline-flex rounded-full bg-maroon-500 px-6 py-2 text-sm font-bold text-white transition hover:bg-maroon-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
              >
                Donate
              </a>
            </div>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex items-center justify-center rounded-full border border-transparent p-3 text-stone-800  transition hover:border-maroon-300 hover:text-maroon-700 md:hidden"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-all ${
                    mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-all ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-all ${
                    mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="border-t border-stone-200 bg-[#fbf8f1] pb-2 pt-3 md:hidden">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-2 py-2 text-base font-semibold text-stone-800 transition hover:bg-stone-100 hover:text-maroon-700"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={donationUrl}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg bg-maroon-500 px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-maroon-700"
                >
                  Donate
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
