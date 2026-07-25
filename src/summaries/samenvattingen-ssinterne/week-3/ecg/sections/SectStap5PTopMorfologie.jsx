import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stap 5: P-top morfologie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De P-top geeft informatie over de atria. Normaal is de P-top positief in I, II, III, aVL en aVF, en bifasisch in V1.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De P-top bestaat eigenlijk uit twee componenten: eerst de rechteratriumactivatie en daarna de linkeratriumactivatie.`}</Inline></p>
      <SubHeading><Inline>{`Afwijkingen van de P-top`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Rechteratriumdilatatie**: hoge, spitse P-top in II, vaak > 2,5 mm. In V1 wordt het positieve deel dominanter. Dit heet ook **P-pulmonale**.`}</Inline></li>
        <li><Inline>{`**Linkeratriumdilatatie**: verbrede, M-vormige P-top in II, vaak > 120 ms. In V1 wordt het negatieve deel dominanter. Dit heet ook **P-mitrale**.`}</Inline></li>
        <li><Inline>{`**Ectopisch atriaal ritme**: de P-top is niet meer positief in I, II en III, omdat een andere atriale focus het ritme bepaalt.`}</Inline></li>
      </ul>
    </div>
  )
}
