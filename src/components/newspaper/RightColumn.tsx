export function RightColumn() {
  return (
    <div className="flex flex-col">
      <div className="h-[60px] w-full border-b border-cool-divider" />

      <article className="m-[5px_6px] mt-[6px] p-[5px_6px] animate-fade-in-up [animation-delay:0.1s]">
        <div className="mb-[6px]">
          <h2 className="font-sans text-[12px] font-bold uppercase tracking-[1px] text-accent">
            WORLD FAIR TRADE DAY
          </h2>
          <h3 className="mt-[2px] font-sans text-[14px] font-bold uppercase tracking-[1px] text-dark">
            13 MEI 2017
          </h3>
        </div>
        <hr className="my-1 border-0 border-t border-cool-divider" />
        <p className="mb-[6px] font-sans text-[12px] font-bold italic text-dark">
          Fietsen voor eerlijke en betere handelsregels!
        </p>

        <div className="grid grid-cols-2 gap-[6px]">
          <div>
            <ul className="m-0 list-none p-0">
              <li className="prose-bullet-item mb-[5px] font-sans text-[11px] leading-[1.5] text-dark">
                Wereldwinkeliers fietsen (en wandelen) de komende maanden om
                kilometers te verzamelen. Met die kilometers verkleinen we de
                afstand tussen boeren in het Zuiden en de politiek van by ons.
                Zo klinkt de stem van de producenten luider in het politieke
                debat hier.
              </li>
              <li className="prose-bullet-item mb-[5px] font-sans text-[11px] leading-[1.5] text-dark">
                Producenten worden constant stokken in de wielen gestoken door
                het huidige ontwikkelingsbeleid. Een voorbeeld daarvan is het
                systeem van tariefescalatie, waarbij importtarieven stijgen
                naarmate producten verder afgewerkt zijn. Op die manier krijgt
                het Zuiden geen kans om verder te ontwikkelen.
              </li>
              <li className="prose-bullet-item mb-[5px] font-sans text-[11px] leading-[1.5] text-dark">
                Dat gebrek aan kansen klagen we al langer aan – herinner je de
                Week van de Fair Trade onder het motto 'Handel! Maar dan
                eerlijk' [...]
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <ul className="m-0 list-none p-0">
              <li className="prose-bullet-item mb-[5px] font-sans text-[11px] leading-[1.5] text-dark">
                overhandigen aan enkele Europarlementariërs op het
                Luxemburgplein voor de Europese instellingen in Brussel.
              </li>
              <li className="prose-bullet-item mb-[5px] font-sans text-[11px] leading-[1.5] text-dark">
                Wat jij kan doen? Meefietsen (of mee organiseren) met je
                wereldwinkel of met je regio, en veel ander fietsvolk
                uitnodigen! Of je kan de groep fietsers in Brussel vervoegen!
              </li>
            </ul>

            <span className="mt-[5px] inline-block text-[11px] text-accent underline underline-offset-[2px] transition-colors duration-200 hover:text-accent-hover">
              extranet.oww.be/worldfairtradeday
            </span>

            <div className="mt-[6px] h-auto w-[clamp(80px,30%,120px)] aspect-[120/80]">
              <div className="newspaper-placeholder-frame newspaper-hover-lift h-full w-full text-[9px]">
                bicycle.svg
              </div>
            </div>

            <div className="mt-[6px] flex items-center gap-1">
              <div className="newspaper-placeholder-frame h-[clamp(24px,8vw,32px)] w-[clamp(24px,8vw,32px)] rounded-full text-[8px]">
                icon
              </div>
              <div className="font-sans text-[13px] font-bold leading-[1.2] text-dark">
                OXFAM
                <span className="block font-normal">Wereldwinkels</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
