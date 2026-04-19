import Image from "next/image";
export function LeftColumn() {
  return (
    <div className="flex flex-col">
      <div className="relative m-[7px] flex border-b border-cool-divider p-[7px] animate-fade-in-up">
        <div className="flex flex-1 flex-col justify-center">
          <blockquote className="font-sans  italic text-dark text-fill-current">
            "De regels zijn in steen gebeiteld, maar we kunnen ze afbreken. Een
            potlood is harder dan graniet."
          </blockquote>
        </div>
        <div className=" ">
          <Image
            src="/images/Dune-Timothee-Solo-Lede.jpg"
            alt="circle"
            width={70}
            height={70}
            className="newspaper-placeholder-frame newspaper-hover-lift overflow-hidden rounded-full text-[8px]"
          />
        </div>
      </div>

      <article className="m-[6px_7px] p-[6px_7px] animate-fade-in-up [animation-delay:0.1s]">
        <h2 className="mb-[6px] font-sans text-[11px] font-bold uppercase tracking-[2px] text-accent">
          samarth nagar
        </h2>
        <div className="font-sans text-[11px] leading-[1.55] text-dark">
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

      <article className="m-[6px_7px] border-t border-cool-divider p-[6px_7px] animate-fade-in-up [animation-delay:0.2s]">
        <h2 className="mb-[6px] font-sans text-[11px] font-bold uppercase tracking-[2px] text-accent">
          now and future
        </h2>
        <div className="font-sans text-[11px] leading-[1.55] text-dark">
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
