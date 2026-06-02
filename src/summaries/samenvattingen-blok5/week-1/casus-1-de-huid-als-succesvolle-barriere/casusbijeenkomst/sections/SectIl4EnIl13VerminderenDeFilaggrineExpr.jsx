import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`IL-4 en IL-13 verminderen de filaggrine-expressie;`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`tight junction-eiwitten worden downgereguleerd;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`dysbiose kan ontstaan.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Tight junctions zijn verbindingen tussen cellen die helpen om de barrière gesloten te houden. Als die afnemen, wordt de huid nog lekker. Dysbiose betekent dat de normale balans van micro-organismen op de huid verstoord raakt.`}</Inline></p>
      <PBody text={`**Kortom:** barrièrebeschadiging en inflammatie versterken elkaar steeds opnieuw.`} />
    </div>
  )
}
