"use client";

import { LeftColumn } from "@/components/newspaper/LeftColumn";
import { MainGrid } from "@/components/newspaper/MainGrid";
import { NavStrip } from "@/components/newspaper/NavStrip";
import { PostalHeader } from "@/components/newspaper/PostalHeader";
import { RightColumn } from "@/components/newspaper/RightColumn";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const updateZoom = () => {
      const vw = window.innerWidth;
      const targetWidth = vw - 512;
      const newZoom = Math.max(1, targetWidth / 780);
      document.documentElement.style.zoom = String(newZoom);
    };

    updateZoom();
    window.addEventListener("resize", updateZoom);
    return () => window.removeEventListener("resize", updateZoom);
  }, []);

  return (
    <div className="pageWrapper">
      <PostalHeader />
      <NavStrip />
      <MainGrid leftColumn={<LeftColumn />} rightColumn={<RightColumn />} />
    </div>
  );
}
