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
    <nav className="flex overflow-x-auto md:overflow-visible border-y-[0.5px] border-cool-divider scrollbar-hide">
      {navItems.map((item) => (
        <div
          key={item.pageNumber}
          className="flex-shrink-0 flex-1 min-w-[140px] md:min-w-0 border-r-[0.5px] border-cool-divider px-3 py-2 md:px-2.5 md:py-1.5 touch-target transition-colors duration-200 ease-out hover:bg-accent-subtle last:border-r-0 flex-row items-center"
        >
          <span className="mr-1 font-heading text-[14px] md:text-[14px] font-bold text-yellow">
            {item.pageNumber}
          </span>
          <span className="font-heading text-sm md:text-[11px] font-bold uppercase tracking-[0.5px] text-yellow">
            {item.sectionTitle}
          </span>
          <p className="mt-0.5 font-serif text-sm md:text-[11px] leading-[1.4] text-light">
            {item.description}
          </p>
        </div>
      ))}
    </nav>
  );
}
