import styles from "./LeftColumn.module.css";

export function LeftColumn() {
  return (
    <div className={styles.leftColumn}>
      {/* Sub-section A: Pull Quote Block */}
      <div className={styles.pullQuoteBlock}>
        <div className={styles.paintbrushContainer}>
          <div className={styles.paintbrushPlaceholder}>paintbrush.jpg</div>
        </div>
        <div className={styles.quoteContent}>
          <blockquote className={styles.quote}>
            "De regels zijn in steen gebeiteld, maar we kunnen ze afbreken. Een
            potlood is harder dan graniet."
          </blockquote>
          <div className={styles.attribution}>
            <p>– Sam Scarpulla,</p>
            <p>
              kunstenaar die meewerkt aan onze 'Herteken de regels'-campagne
            </p>
          </div>
        </div>
        <div className={styles.circleImageContainer}>
          <div className={styles.circlePlaceholder}>circle.jpg</div>
        </div>
      </div>

      {/* Sub-section B: Article Block */}
      <article className={styles.articleBlock}>
        <h2 className={styles.headline}>samarth nagar</h2>
        <div className={styles.bodyText}>
          <p>
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
          <p>
            <span className={styles.link}>https://github.com/samarth-na</span>
          </p>
        </div>
        <div className={styles.landscapeImageContainer}>
          <div className={styles.landscapePlaceholder}>
            landscape-running.jpg
          </div>
        </div>
      </article>

      {/* Sub-section C: Cijfer Block */}
      <article className={styles.cijferBlock}>
        <h2 className={styles.headline}>now and future</h2>
        <div className={styles.bodyText}>
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
            <span className={styles.link}>
              www.oxfamwereldwinkels.be/shoutout
            </span>{" "}
            vind je alle portretten.
          </p>
        </div>
      </article>
    </div>
  );
}
