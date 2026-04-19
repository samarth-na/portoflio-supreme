export function PostalHeader() {
  return (
    <header className="flex items-start justify-between border-b-2 border-ink pb-2">
      <div className="shrink-0 font-sans text-[9px] leading-[1.4] text-ink-muted">
        <p>
          <strong>bpost</strong>
        </p>
        <p>PB-PP</p>
        <p>BELGIE(N)-BELGIQUE</p>
        <p className="mt-2">P918262</p>
        <p>[adresregels...]</p>
        <p>[postcode/gemeente]</p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="font-sans text-[4rem] font-black leading-none uppercase tracking-[-2px] text-ink">
          hello
        </h1>
        <p className="mt-1 font-sans text-[12px] font-normal uppercase tracking-[4px] text-ink">
          Software Architect
        </p>
      </div>

      <div className="shrink-0 text-right font-sans">
        <div className="text-[11px] uppercase leading-[1.4] tracking-[1px] text-ink">
          <p>#0008</p>
          <p>maart/april/mei</p>
          <p>2017</p>
        </div>
        <div className="mt-3 text-[9px] leading-[1.4] text-ink-muted">
          <p>
            <strong>VRAGEN OF</strong>
          </p>
          <p>
            <strong>SUGGESTIES:</strong>
          </p>
          <p>info@npow.be</p>
        </div>
      </div>
    </header>
  );
}
