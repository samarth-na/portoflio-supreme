"use client";

import { useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  className = "",
}: AccordionItemProps) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Desktop: always show content, no accordion
  if (!isMobile) {
    return <div className={className}>{children}</div>;
  }

  // Mobile: accordion behavior
  return (
    <div className={`border-b-[0.5px] border-cool-divider ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 touch-target"
        aria-expanded={isOpen}
      >
        <h3 className="font-sans text-base font-bold uppercase tracking-[2px] text-primary text-left">
          {title}
        </h3>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <div className="accordion-inner pb-4">{children}</div>
      </div>
    </div>
  );
}
