"use client";

import { useTheme } from "@/components/theme";

export function PostalHeader() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-start justify-between pb-2">
      <div className="shrink-0 font-sans text-[9px] leading-[1.4] text-muted">
        <p>
          <strong>bpost</strong>
        </p>
        <p>PB-PP</p>
        <p>BELGIE(N)-BELGIQUE</p>
        <p className="mt-2">P918262</p>
        <p>[adresregels...]</p>
        <p>[next/TS]</p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="font-sans text-[4rem] uppercase font-normal   ">
          hello
        </h1>
      </div>

      <div className="shrink-0 text-right font-sans">
        <div className="text-[11px] uppercase leading-[1.4] tracking-[1px] text-dark">
          <button
            type="button"
            onClick={toggleTheme}
            className="border-[0.5px] border-cool-divider bg-paper px-2 py-0.5 text-dark transition-colors duration-300"
          >
            THEME
          </button>
          <p className="mt-1">april/mei</p>
          <p>2017</p>
        </div>
        <div className="mt-3 text-[9px] leading-[1.4] text-muted">
          <p>
            <strong>VRAGEN OF</strong>
          </p>
          <p>
            <strong>SUGGESTIES:</strong>
          </p>
          <p>info@npow.be</p>
        </div>
      </div>
    </header>
  );
}
