"use client";

import { useEffect, useState } from "react";

export default function CurrentYear() {
  const [year, setYear] = useState<number>(() => new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}
