import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Screening en handelen op de SEH`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Op de SEH wordt gewerkt met een vragenlijst om signalen van kindermishandeling te ondervangen. Extra alertheid is nodig bij patiënten met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`suïcidepogingen;`}</Inline></li>
        <li><Inline>{`intoxicaties met alcohol of drugs;`}</Inline></li>
        <li><Inline>{`huiselijk geweld.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij chronische patiënten moet je nagaan of de zorg voor de kinderen gewaarborgd is. Vanaf de SEH kan een melding bij Veilig Thuis worden gedaan met een verkort aanmeldingsformulier.`}</Inline></p>
    </div>
  )
}
