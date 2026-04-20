"use client";

import { AccordionItem } from "./AccordionItem";

export function ApproachSection() {
  return (
    <section className="mt-8 md:mt-12 border-t-2 border-dark pt-6 md:pt-8">
      <h2 className="mb-6 md:mb-8 font-serif text-2xl md:text-4xl italic text-dark">
        Approach & Mindset
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4">
        <div className="md:col-span-4">
          <AccordionItem
            title="🧠 Philosophy"
            defaultOpen={true}
            className="md:border-r-[0.5px] md:border-cool-divider md:pr-4"
          >
            <h3 className="mb-3 font-sans text-[11px] font-bold uppercase tracking-[2px] text-accent">
              🧠 Philosophy
            </h3>
            <p className="font-sans text-sm md:text-[11px] leading-relaxed md:leading-[1.6] text-dark">
              Understanding systems deeply rather than assembling solutions.
              Knowing why something works, its limitations, and how it can be
              improved.
            </p>
          </AccordionItem>
        </div>

        <div className="md:col-span-4">
          <AccordionItem
            title="💡 What Makes It Different"
            className="md:border-r-[0.5px] md:border-cool-divider md:px-4"
          >
            <h3 className="mb-3 font-sans text-[11px] font-bold uppercase tracking-[2px] text-accent">
              💡 What Makes It Different
            </h3>
            <p className="font-sans text-sm md:text-[11px] leading-relaxed md:leading-[1.6] text-dark">
              Strong focus on optimization and usability. Making things work
              well under real-world conditions—reducing costs, improving
              responsiveness.
            </p>
          </AccordionItem>
        </div>

        <div className="md:col-span-4">
          <AccordionItem title="🔍 Project Philosophy">
            <h3 className="mb-3 font-sans text-[11px] font-bold uppercase tracking-[2px] text-accent">
              🔍 Project Philosophy
            </h3>
            <p className="font-sans text-sm md:text-[11px] leading-relaxed md:leading-[1.6] text-dark">
              Quality over quantity. Each project driven by real problems or
              curiosity—exploring deeper aspects like system behavior and
              performance tradeoffs.
            </p>
          </AccordionItem>
        </div>
      </div>

      <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-6">
          <AccordionItem title="📈 Growth & Learning">
            <div className="newspaper-placeholder-frame newspaper-hover-lift h-[120px] w-full p-4">
              <span className="font-mono text-[10px] text-muted">
                📈 Growth & Learning
              </span>
              <p className="mt-2 font-sans text-sm md:text-[11px] leading-relaxed md:leading-[1.5] text-dark">
                Hands-on exploration—building things, breaking them, improving
                them. Developing practical understanding of system design,
                databases, and cloud infrastructure.
              </p>
            </div>
          </AccordionItem>
        </div>

        <div className="md:col-span-6">
          <AccordionItem title="📬 Contact">
            <div className="newspaper-placeholder-frame newspaper-hover-lift h-[120px] w-full p-4">
              <span className="font-mono text-[10px] text-muted">
                📬 Contact
              </span>
              <p className="mt-2 font-sans text-sm md:text-[11px] leading-relaxed md:leading-[1.5] text-dark">
                Open to interesting problems involving tools, systems, or AI and
                web development. Challenging projects welcome.
              </p>
            </div>
          </AccordionItem>
        </div>
      </div>

      <div className="mt-6 md:mt-8 border-t-[0.5px] border-cool-divider pt-4 md:pt-6">
        <h3 className="mb-4 font-sans text-[11px] font-bold uppercase tracking-[2px] text-accent">
          🛠 Skills & Stack
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-3">
            <AccordionItem title="💻 Core Stack">
              <div className="border-[0.5px] border-cool-divider p-3">
                <span className="font-mono text-[9px] text-muted">
                  💻 Core Stack
                </span>
                <ul className="mt-2 font-sans text-xs md:text-[10px] leading-relaxed md:leading-[1.7] text-dark">
                  <li>Next.js, React</li>
                  <li>Tailwind CSS, shadcn/ui</li>
                  <li>Node.js, APIs</li>
                  <li>PostgreSQL, libSQL</li>
                </ul>
              </div>
            </AccordionItem>
          </div>

          <div className="md:col-span-3">
            <AccordionItem title="⚡ Specialized">
              <div className="border-[0.5px] border-cool-divider p-3">
                <span className="font-mono text-[9px] text-muted">
                  ⚡ Specialized
                </span>
                <ul className="mt-2 font-sans text-xs md:text-[10px] leading-relaxed md:leading-[1.7] text-dark">
                  <li>Agentic AI systems</li>
                  <li>Token optimization</li>
                  <li>UI/UX refinement</li>
                  <li>System design</li>
                </ul>
              </div>
            </AccordionItem>
          </div>

          <div className="md:col-span-3">
            <AccordionItem title="🧠 Working Knowledge">
              <div className="border-[0.5px] border-cool-divider p-3">
                <span className="font-mono text-[9px] text-muted">
                  🧠 Working Knowledge
                </span>
                <ul className="mt-2 font-sans text-xs md:text-[10px] leading-relaxed md:leading-[1.7] text-dark">
                  <li>Azure, Cloudflare</li>
                  <li>Performance tuning</li>
                  <li>API design</li>
                  <li>Drizzle ORM</li>
                </ul>
              </div>
            </AccordionItem>
          </div>

          <div className="md:col-span-3">
            <AccordionItem title="🚫 What I Don't Do">
              <div className="border-[0.5px] border-cool-divider p-3">
                <span className="font-mono text-[9px] text-muted">
                  🚫 What I Don&apos;t Do
                </span>
                <ul className="mt-2 font-sans text-xs md:text-[10px] leading-relaxed md:leading-[1.7] text-dark">
                  <li>Surface-level expertise</li>
                  <li>Depth over hype</li>
                  <li>Boilerplate work</li>
                  <li>Fake specialities</li>
                </ul>
              </div>
            </AccordionItem>
          </div>
        </div>

        <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-6">
            <AccordionItem title="🌐 Web Skills">
              <div className="border-[0.5px] border-cool-divider p-3">
                <span className="font-mono text-[9px] text-muted">
                  🌐 Web Skills
                </span>
                <ul className="mt-2 font-sans text-xs md:text-[10px] leading-relaxed md:leading-[1.7] text-dark">
                  <li>Next.js & React ecosystem</li>
                  <li>TypeScript & modern JavaScript</li>
                  <li>Responsive design & CSS</li>
                  <li>API integration & REST/GraphQL</li>
                  <li>Frontend performance optimization</li>
                </ul>
              </div>
            </AccordionItem>
          </div>

          <div className="md:col-span-6">
            <AccordionItem title="☁️ Cloud & Infrastructure">
              <div className="border-[0.5px] border-cool-divider p-3">
                <span className="font-mono text-[9px] text-muted">
                  ☁️ Cloud & Infrastructure
                </span>
                <ul className="mt-2 font-sans text-xs md:text-[10px] leading-relaxed md:leading-[1.7] text-dark">
                  <li>Azure & Cloudflare Workers</li>
                  <li>Serverless architectures</li>
                  <li>Database management (PostgreSQL, libSQL)</li>
                  <li>CI/CD & deployment pipelines</li>
                  <li>Performance monitoring & tuning</li>
                </ul>
              </div>
            </AccordionItem>
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-8 border-t-[0.5px] border-cool-divider pt-4 md:pt-6">
        <h3 className="mb-4 font-sans text-[11px] font-bold uppercase tracking-[2px] text-accent">
          🚀 Featured Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-4">
            <AccordionItem title="🧠 AI Coding Agent">
              <div className="newspaper-placeholder-frame newspaper-hover-lift h-[140px] p-3">
                <span className="font-mono text-[9px] text-muted">
                  🧠 AI Coding Agent
                </span>
                <p className="mt-2 font-sans text-xs md:text-[10px] leading-relaxed md:leading-[1.5] text-dark">
                  Developer interface for managing AI coding workflows with
                  token visibility and efficiency focus.
                </p>
                <span className="mt-2 block font-mono text-[8px] text-muted">
                  Next.js, Tailwind, shadcn
                </span>
              </div>
            </AccordionItem>
          </div>

          <div className="md:col-span-4">
            <AccordionItem title="📊 Token Analyzer">
              <div className="newspaper-placeholder-frame newspaper-hover-lift h-[140px] p-3">
                <span className="font-mono text-[9px] text-muted">
                  📊 Token Analyzer
                </span>
                <p className="mt-2 font-sans text-xs md:text-[10px] leading-relaxed md:leading-[1.5] text-dark">
                  Visual breakdown of input/output tokens, cached vs real usage.
                  60-70% token reduction achieved.
                </p>
                <span className="mt-2 block font-mono text-[8px] text-muted">
                  TypeScript, Node.js, CLI
                </span>
              </div>
            </AccordionItem>
          </div>

          <div className="md:col-span-4">
            <AccordionItem title="🗂 Kanban App">
              <div className="newspaper-placeholder-frame newspaper-hover-lift h-[140px] p-3">
                <span className="font-mono text-[9px] text-muted">
                  🗂 Kanban App
                </span>
                <p className="mt-2 font-sans text-xs md:text-[10px] leading-relaxed md:leading-[1.5] text-dark">
                  Modern task management with smooth UX, modular design, and
                  real-world usability focus.
                </p>
                <span className="mt-2 block font-mono text-[8px] text-muted">
                  Next.js, Tailwind, shadcn
                </span>
              </div>
            </AccordionItem>
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-8 border-t-[0.5px] border-cool-divider pt-4 md:pt-6">
        <h3 className="mb-4 font-sans text-[11px] font-bold uppercase tracking-[2px] text-accent">
          📈 Experience & Timeline
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-6">
            <AccordionItem title="2025 – Present">
              <div className="border-l-2 border-accent pl-4">
                <span className="font-mono text-[9px] text-muted">
                  2025 – Present
                </span>
                <h4 className="mt-1 font-sans text-sm md:text-[11px] font-bold text-dark">
                  Independent Developer
                </h4>
                <p className="mt-1 font-sans text-xs md:text-[10px] leading-relaxed md:leading-[1.5] text-dark">
                  Built multiple full-stack applications and developer tools.
                  Focused on AI-assisted workflows and system optimization.
                </p>
              </div>
            </AccordionItem>
          </div>

          <div className="md:col-span-6">
            <AccordionItem title="Ongoing">
              <div className="border-l-2 border-accent pl-4">
                <span className="font-mono text-[9px] text-muted">Ongoing</span>
                <h4 className="mt-1 font-sans text-sm md:text-[11px] font-bold text-dark">
                  Continuous Learning
                </h4>
                <p className="mt-1 font-sans text-xs md:text-[10px] leading-relaxed md:leading-[1.5] text-dark">
                  Deep diving into system design, databases, cloud
                  infrastructure through hands-on experimentation.
                </p>
              </div>
            </AccordionItem>
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-8 border-t border-dark pt-4 md:pt-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-4 md:col-start-5">
            <blockquote className="text-center font-serif text-lg md:text-xl italic text-dark">
              &ldquo;Focused on depth, not surface-level features.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
