import { Suspense } from "react";

import CurrentYear from "./current-year";

export default async function Footer() {
  return (
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
  );
}
