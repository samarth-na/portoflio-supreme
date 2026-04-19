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
    <nav className="flex border-y border-cool-divider">
      {navItems.map((item) => (
        <div
          key={item.pageNumber}
          className="flex-1 border-r border-cool-divider px-2.5 py-1.5 transition-colors duration-200 ease-out hover:bg-accent-subtle last:border-r-0"
        >
          <span className="mr-1 font-sans text-[14px] font-bold text-accent">
            {item.pageNumber}
          </span>
          <span className="font-sans text-[11px] font-bold uppercase tracking-[0.5px] text-accent">
            {item.sectionTitle}
          </span>
          <p className="mt-0.5 font-serif text-[11px] leading-[1.4] text-light">
            {item.description}
          </p>
        </div>
      ))}
    </nav>
  );
}
