import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Zwangerschap`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Zwangerschap geeft een langdurige cardiovasculaire belasting. Er is:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`toename van bloedvolume`}</Inline></li>
        <li><Inline>{`toename van cardiac output`}</Inline></li>
        <li><Inline>{`afname van systemische vaatweerstand`}</Inline></li>
        <li><Inline>{`daling van de bloeddruk, vooral in de eerste helft van de zwangerschap`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dit is een fysiologische aanpassing aan de behoeften van moeder en foetus.`}</Inline></p>
    </div>
  )
}
