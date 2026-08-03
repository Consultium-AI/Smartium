import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hypersensitivity pneumonitis is een interstitiële longziekte die ontstaat door herhaalde inhalatie van een uitlokkend antigeen bij een gevoelige persoon. De ziekte kan worden veroorzaakt door allerlei blootstellingen, zowel op het werk als thuis of bij hobby’s. Belangrijke risicofactoren zijn genetische aanleg, de intensiteit van de blootstelling en de duur van de blootstelling.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De diagnose stel je met een goede anamnese en aanvullend onderzoek. Daarbij zijn IgG-antistoffen, BAL met lymfocytose, een longbiopt met niet-verkazende granulomen en HRCT-bevindingen zoals ground-glass opaciteiten, centrilobulaire noduli en fibrose belangrijk.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De behandeling begint met het vermijden van het antigeen. Daarnaast kunnen corticosteroïden, immunosuppressiva, antifibrotische middelen en ondersteunende zorg nodig zijn. In ernstige gevallen met uitgebreide fibrose kan longtransplantatie uiteindelijk nodig zijn.`}</Inline></p>
    </div>
  )
}
