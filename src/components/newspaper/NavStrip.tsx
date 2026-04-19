import styles from "./NavStrip.module.css";

interface NavItemData {
  pageNumber: string;
  sectionTitle: string;
  description: string;
}

const navItems: NavItemData[] = [
  {
    pageNumber: "3",
    sectionTitle: "CHILI",
    description: "OWW Oudenaarde bezoekt Vinos Lautaro",
  },
  {
    pageNumber: "4",
    sectionTitle: "W.F.T.D.",
    description: "Yves Boussen over onze plannen voor 2017",
  },
  {
    pageNumber: "6",
    sectionTitle: "WEBSHOP",
    description: "In mei start een pilootproject.",
  },
  {
    pageNumber: "7",
    sectionTitle: "JONGEREN",
    description: "Ook scholieren halen stokken uit de wielen!",
  },
  {
    pageNumber: "8",
    sectionTitle: "U ZEI?",
    description: "Tevreden vrijwilligers zijn veel geld waard!",
  },
];

export function NavStrip() {
  return (
    <nav className={styles.navStrip}>
      {navItems.map((item) => (
        <div key={item.pageNumber} className={styles.navItem}>
          <span className={styles.pageNumber}>{item.pageNumber}</span>
          <span className={styles.sectionTitle}>{item.sectionTitle}</span>
          <p className={styles.description}>{item.description}</p>
        </div>
      ))}
    </nav>
  );
}
