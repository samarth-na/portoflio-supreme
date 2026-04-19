"use client";

import { useEffect } from "react";
import { ApproachSection } from "@/components/newspaper/ApproachSection";
import { LeftColumn } from "@/components/newspaper/LeftColumn";
import { MainGrid } from "@/components/newspaper/MainGrid";
import { NavStrip } from "@/components/newspaper/NavStrip";
import { PostalHeader } from "@/components/newspaper/PostalHeader";
import { RightColumn } from "@/components/newspaper/RightColumn";

export default function Home() {
  useEffect(() => {
    const updateZoom = () => {
      const vw = window.innerWidth;
      const targetWidth = vw - 500;
      const newZoom = Math.max(1, targetWidth / 780);
      document.documentElement.style.zoom = String(newZoom);
    };

    // Delay initial zoom to allow page to render first, then animate
    const timeoutId = setTimeout(updateZoom, 50);

    window.addEventListener("resize", updateZoom);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateZoom);
    };
  }, []);

  return (
    <div className="pageWrapper mt-10">
      <PostalHeader />
      <NavStrip />
      <MainGrid leftColumn={<LeftColumn />} rightColumn={<RightColumn />} />
      <ApproachSection />
    </div>
  );
}
