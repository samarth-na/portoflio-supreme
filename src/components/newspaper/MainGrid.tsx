import type { ReactNode } from "react";

interface MainGridProps {
  leftColumn: ReactNode;
  rightColumn: ReactNode;
}

export function MainGrid({ leftColumn, rightColumn }: MainGridProps) {
  return (
    <div className="grid grid-cols-[1fr_0.6fr] gap-0">
      <div className="border-r-[0.5px] border-cool-divider p-0">{leftColumn}</div>
      <div className="p-0">{rightColumn}</div>
    </div>
  );
}
