import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat test een NPO?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Meestal worden de volgende domeinen onderzocht:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`taalvaardigheden;`}</Inline></li>
        <li><Inline>{`aandacht, concentratie en mentale verwerkingssnelheid;`}</Inline></li>
        <li><Inline>{`executieve functies, planning en abstraherend vermogen;`}</Inline></li>
        <li><Inline>{`geheugen;`}</Inline></li>
        <li><Inline>{`visueel-ruimtelijke en constructieve vaardigheden;`}</Inline></li>
        <li><Inline>{`sociale cognitie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een NPO duurt gemiddeld 2 tot 3 uur.`}</Inline></p>
    </div>
  )
}
