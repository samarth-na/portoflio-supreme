import type { ReactNode } from "react";
import styles from "./MainGrid.module.css";

interface MainGridProps {
  leftColumn: ReactNode;
  rightColumn: ReactNode;
}

export function MainGrid({ leftColumn, rightColumn }: MainGridProps) {
  return (
    <div className={styles.mainGrid}>
      <div className={styles.leftColumn}>{leftColumn}</div>
      <div className={styles.rightColumn}>{rightColumn}</div>
    </div>
  );
}
