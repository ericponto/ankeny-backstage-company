import { FacebookLogoIcon, InstagramLogoIcon } from "@phosphor-icons/react/ssr";
import { Suspense } from "react";

import CurrentYear from "./current-year";

export default async function Footer() {
  return (
    <footer className="bg-gray-950 px-5 py-8 text-white/75 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm">
          ©{" "}
          <Suspense fallback="">
            <CurrentYear />
          </Suspense>{" "}
          Ankeny Backstage Company
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/ankenybackstageco"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold transition hover:text-gold-200"
            aria-label="Facebook"
          >
            <FacebookLogoIcon size={24} weight="bold" aria-hidden="true" />
          </a>
          <a
            href="https://www.instagram.com/ankenybackstage"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold transition hover:text-gold-200"
            aria-label="Instagram"
          >
            <InstagramLogoIcon size={24} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
