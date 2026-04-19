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
        <h2 className={styles.headline}>BOEKJE OPEN OVER HET SCHETSBOEKJE</h2>
        <div className={styles.bodyText}>
          <p>
            Hoe zou jij de handelsregels hertekenen? Inspireer ons in het
            schetsboekje gemaakt van oude Oxfam-affiches! Met dank aan RE-DO,
            twee Antwerpse dames die papierafval een nieuw leven geven. De
            elastiekjes rond de boekjes zijn overschotjes van fabrikant Elesta
            en ook het potlood is van gerecycleerd papier. De cover werd
            gezeefdrukt met de schets die kunstenaar Sam Scarpulla maakte voor
            onze campagne 'Herteken de regels'. Elk boekje is dus helemaal
            gerecycleerd en zal dankzij jullie input nog unieker worden!
          </p>
          <p>
            <span className={styles.link}>
              extranet.oxfamwereldwinkels.be/weekvandevrijwilliger
            </span>
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
        <h2 className={styles.headline}>HET CIJFER: 427</h2>
        <div className={styles.bodyText}>
          <p>
            Met de actie 'A shout-out for fair trade' (van 12 tot 16 december
            2016) wilde Oxfam-Wereldwinkels fair trade hoorbaar maken in heel
            Vlaanderen. En dat is meer dan gelukt! Op 5 dagen tijd schreeuwden
            voorbijgangers in 5 stations hun verontwaardiging over oneerlijke
            handelsregels uit. Haalde hun keel 100 decibel, dan activeerden ze
            een camera en werd hun schreeuw vastgelegd op de gevoelige plaat.
            Resultaat: een mooie reeks zwart-witportretten van 427 mensen die
            hun keel open zetten voor eerlijke handel. Een duidelijke boodschap
            waarvoor beleidsmakers niet doof kunnen blijven. Op{" "}
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
