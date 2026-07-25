import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Voorlichting en begeleiding`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Naast medicatie zijn uitleg en begeleiding belangrijk. Je bespreekt:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`wat astma is;`}</Inline></li>
        <li><Inline>{`hoe de inhalatiemedicatie gebruikt moet worden;`}</Inline></li>
        <li><Inline>{`dat de patiënt moet oefenen met inhaleren;`}</Inline></li>
        <li><Inline>{`hoe prikkelende stoffen en allergenen vermeden kunnen worden;`}</Inline></li>
        <li><Inline>{`hoe de peakflowmeter gebruikt wordt;`}</Inline></li>
        <li><Inline>{`wat te doen bij klachten of verergering.`}</Inline></li>
      </ul>
      <PBody text={`**Aandachtsvraag:** Waarom is inhalatietechniek zo belangrijk?
**Mini-antwoord:** Omdat de medicatie alleen goed werkt als deze op de juiste manier in de luchtwegen terechtkomt.`} />
    </div>
  )
}
