export function LeftColumn() {
  return (
    <div className="flex flex-col">
      <div className="relative m-[7px] flex border-b border-ink p-[7px] animate-fade-in-up">
        <div className="mr-[7px] shrink-0">
          <div className="newspaper-placeholder-frame newspaper-hover-lift h-auto w-[clamp(40px,15vw,60px)] aspect-[60/80] text-[9px]">
            paintbrush.jpg
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <blockquote className="font-sans text-[16px] leading-[1.4] italic text-ink">
            "De regels zijn in steen gebeiteld, maar we kunnen ze afbreken. Een
            potlood is harder dan graniet."
          </blockquote>
          <div className="mt-1 font-sans text-[10px] leading-[1.4] text-ink">
            <p>– Sam Scarpulla,</p>
            <p>
              kunstenaar die meewerkt aan onze 'Herteken de regels'-campagne
            </p>
          </div>
        </div>
        <div className="absolute right-[7px] top-[7px]">
          <div className="newspaper-placeholder-frame newspaper-hover-lift h-[clamp(35px,12vw,55px)] w-[clamp(35px,12vw,55px)] overflow-hidden rounded-full text-[8px]">
            circle.jpg
          </div>
        </div>
      </div>

      <article className="m-[6px_7px] p-[6px_7px] animate-fade-in-up [animation-delay:0.1s]">
        <h2 className="mb-[6px] font-sans text-[11px] font-bold uppercase tracking-[2px] text-ink">
          samarth nagar
        </h2>
        <div className="font-sans text-[11px] leading-[1.55] text-ink">
          <p className="mb-[6px]">
            I’m a full-stack developer who focuses on building systems that are
            not just functional, but efficient, scalable, and genuinely useful.
            My work sits at the intersection of modern web development and
            emerging AI workflows, where I spend a lot of time experimenting
            with agent-based systems, developer tooling, and performance
            optimization. I’m particularly interested in how complex processes
            can be simplified into intuitive interfaces without losing depth or
            control. What drives me is a strong preference for clarity and
            efficiency. I don’t like unnecessary complexity—whether it’s in
            code, UI, or system design. Instead, I try to break problems down,
            understand how they work at a deeper level, and then rebuild them in
            a way that feels clean and intentional. This mindset carries through
            everything I build, from small tools to larger applications.
          </p>
          <p className="mb-[6px]">
            <span className="text-accent underline underline-offset-[2px] transition-colors duration-200 hover:text-accent-hover">
              https://github.com/samarth-na
            </span>
          </p>
        </div>
        <div className="mt-[6px] w-full">
          <div className="newspaper-placeholder-frame newspaper-hover-lift h-[180px] w-full text-[10px]">
            landscape-running.jpg
          </div>
        </div>
      </article>

      <article className="m-[6px_7px] border-t border-ink p-[6px_7px] animate-fade-in-up [animation-delay:0.2s]">
        <h2 className="mb-[6px] font-sans text-[11px] font-bold uppercase tracking-[2px] text-ink">
          now and future
        </h2>
        <div className="font-sans text-[11px] leading-[1.55] text-ink">
          <p>
            Right now, I’m focused on building and refining developer-centric
            tools and AI-assisted workflows. A big part of my work involves
            understanding how systems behave under real constraints—like token
            limits, performance bottlenecks, and usability challenges—and then
            optimizing them in practical ways. Rather than just using tools as
            they are, I’m more interested in improving them, extending them, or
            sometimes rethinking how they should work entirely. I also spend a
            significant amount of time working on frontend systems using modern
            frameworks, where I care deeply about UI clarity and interaction
            design. For me, a good interface is one that makes powerful
            functionality feel simple, not overwhelming. This balance between
            capability and usability is something I continuously try to improve.{" "}
            <span className="text-accent underline underline-offset-[2px] transition-colors duration-200 hover:text-accent-hover">
              www.oxfamwereldwinkels.be/shoutout
            </span>{" "}
            vind je alle portretten.
          </p>
        </div>
      </article>
    </div>
  );
}
