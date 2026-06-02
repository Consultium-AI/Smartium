import { Inline, PBody, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Inflammatie leidt weer tot verdere barrièrestoring`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Ontsteking maakt de barrière vervolgens nog slechter:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Inline>{`IL-4 en IL-13 verminderen de filaggrine-expressie;`}</Inline>
        </li>
        <li>
          <Inline>{`tight junction-eiwitten worden downgereguleerd;`}</Inline>
        </li>
        <li>
          <Inline>{`dysbiose kan ontstaan.`}</Inline>
        </li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Tight junctions zijn verbindingen tussen cellen die helpen om de barrière gesloten te houden. Als die afnemen, wordt de huid nog lekker. Dysbiose betekent dat de normale balans van micro-organismen op de huid verstoord raakt.`}</Inline>
      </p>
      <PBody text={`**Kortom:** barrièrebeschadiging en inflammatie versterken elkaar steeds opnieuw.`} />
    </div>
  )
}
