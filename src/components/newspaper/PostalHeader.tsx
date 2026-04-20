"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/theme";

const GREETINGS = [
  "hello",
  "hola",
  "namaste",
  "bonjour",
  "konichiwa",
  "ni hao",
];
const TYPING_SPEED = 150; // ms per character (slower)
const PAUSE_DURATION = 5000; // 2.5 second pause after typing

export function PostalHeader() {
  const { toggleTheme } = useTheme();
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentWord = GREETINGS[indexRef.current];

      if (!isDeleting) {
        // Typing forward
        charIndex++;
        setDisplayedText(currentWord.slice(0, charIndex));

        if (charIndex < currentWord.length) {
          setTimeout(type, TYPING_SPEED);
        } else {
          // Finished typing - pause then start deleting
          setTimeout(() => {
            isDeleting = true;
            type();
          }, PAUSE_DURATION);
        }
      } else {
        // Deleting
        charIndex--;
        setDisplayedText(currentWord.slice(0, charIndex));

        if (charIndex > 0) {
          setTimeout(type, TYPING_SPEED / 2); // Faster deletion
        } else {
          // Move to next greeting
          isDeleting = false;
          indexRef.current = (indexRef.current + 1) % GREETINGS.length;
          setTimeout(type, 200); // Brief pause before next word
        }
      }
    };

    // Start typing after a small delay
    const startTimeout = setTimeout(type, 300);
    return () => clearTimeout(startTimeout);
  }, []);

  return (
    <header className="flex flex-col md:flex-row md:items-start md:justify-between pb-4 md:pb-2">
      <div className="order-2 md:order-1 shrink-0 font-sans text-xs md:text-[9px] leading-[1.4] text-muted mb-4 md:mb-0">
        <p>
          <strong>bpost</strong>
        </p>
        <p>PB-PP</p>
        <p>BELGIE(N)-BELGIQUE</p>
        <p className="mt-2">P918262</p>
        <p>[adresregels...]</p>
        <p>[next/TS]</p>
      </div>

      <div className="order-1 md:order-2 flex flex-1 flex-col items-center justify-center mb-4 md:mb-0">
        <h1 className="font-sans text-3xl md:text-[4rem] uppercase font-normal tracking-wide">
          {displayedText}
        </h1>
      </div>

      <div className="order-3 shrink-0 text-right font-sans">
        <div className="text-sm md:text-[11px] uppercase leading-[1.4] tracking-[1px] text-dark">
          <button
            type="button"
            onClick={toggleTheme}
            className="touch-target border-[0.5px] border-cool-divider bg-paper px-3 py-1 md:px-2 md:py-0.5 text-dark transition-colors duration-300"
          >
            THEME
          </button>
          <p className="mt-1">april/mei</p>
          <p>2017</p>
        </div>
        <div className="mt-3 text-xs md:text-[9px] leading-[1.4] text-muted">
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
