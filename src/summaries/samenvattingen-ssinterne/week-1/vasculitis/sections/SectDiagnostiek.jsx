import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij verdenking op reuscelarteritis bepaal je CRP en BSE. De diagnostische criteria zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`leeftijd boven 50 jaar;`}</Inline></li>
        <li><Inline>{`nieuw ontstane hoofdpijn;`}</Inline></li>
        <li><Inline>{`afwijkingen aan de arteria temporalis;`}</Inline></li>
        <li><Inline>{`BSE boven 50 mm/uur;`}</Inline></li>
        <li><Inline>{`afwijkend biopt van de arteria temporalis.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Drie of meer van deze criteria geven een hoge waarschijnlijkheid voor de diagnose. Het biopt van de arteria temporalis blijft de gouden standaard, al komen nieuwe beeldvormingstechnieken op.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijk is dat de behandeling niet mag wachten op het biopt. Start direct met steroïden en regel het biopt zo snel mogelijk, bij voorkeur binnen 1 week. Een biopt kan nog positief zijn tot 6 weken na start van steroïden.`}</Inline></p>
    </div>
  )
}
