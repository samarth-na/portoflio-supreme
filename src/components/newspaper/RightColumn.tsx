import styles from "./RightColumn.module.css";

export function RightColumn() {
  return (
    <div className={styles.rightColumn}>
      {/* Sub-section A: Hatched Decorative Box */}
      <div className={styles.hatchedBox} />

      {/* Sub-section B: World Fair Trade Day Article */}
      <article className={styles.wftdArticle}>
        <div className={styles.wftdHeadline}>
          <h2>WORLD FAIR TRADE DAY</h2>
          <h3>13 MEI 2017</h3>
        </div>
        <hr className={styles.wftdDivider} />
        <p className={styles.wftdSubtitle}>
          Fietsen voor eerlijke en betere handelsregels!
        </p>

        {/* Two-column bullet grid */}
        <div className={styles.bulletGrid}>
          {/* Left sub-column: first 3 bullets */}
          <div className={styles.leftBullets}>
            <ul className={styles.bulletList}>
              <li className={styles.bulletItem}>
                Wereldwinkeliers fietsen (en wandelen) de komende maanden om
                kilometers te verzamelen. Met die kilometers verkleinen we de
                afstand tussen boeren in het Zuiden en de politiek van by ons.
                Zo klinkt de stem van de producenten luider in het politieke
                debat hier.
              </li>
              <li className={styles.bulletItem}>
                Producenten worden constant stokken in de wielen gestoken door
                het huidige ontwikkelingsbeleid. Een voorbeeld daarvan is het
                systeem van tariefescalatie, waarbij importtarieven stijgen
                naarmate producten verder afgewerkt zijn. Op die manier krijgt
                het Zuiden geen kans om verder te ontwikkelen.
              </li>
              <li className={styles.bulletItem}>
                Dat gebrek aan kansen klagen we al langer aan – herinner je de
                Week van de Fair Trade onder het motto 'Handel! Maar dan
                eerlijk' [...]
              </li>
            </ul>
          </div>

          {/* Right sub-column: last 2 bullets + link + assets */}
          <div className={styles.rightBullets}>
            <ul className={styles.bulletList}>
              <li className={styles.bulletItem}>
                overhandigen aan enkele Europarlementariërs op het
                Luxemburgplein voor de Europese instellingen in Brussel.
              </li>
              <li className={styles.bulletItem}>
                Wat jij kan doen? Meefietsen (of mee organiseren) met je
                wereldwinkel of met je regio, en veel ander fietsvolk
                uitnodigen! Of je kan de groep fietsers in Brussel vervoegen!
              </li>
            </ul>

            <span className={styles.wftdLink}>
              extranet.oww.be/worldfairtradeday
            </span>

            {/* Bicycle SVG placeholder */}
            <div className={styles.bicycleContainer}>
              <div className={styles.bicyclePlaceholder}>bicycle.svg</div>
            </div>

            {/* Oxfam Logo */}
            <div className={styles.oxfamLogoContainer}>
              <div className={styles.oxfamIconPlaceholder}>icon</div>
              <div className={styles.oxfamText}>
                OXFAM
                <span>Wereldwinkels</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
