import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wanneer doe je cervixcytologie?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Cervixcytologie, dus het maken van een uitstrijkje van de cervix, wordt gedaan bij verschillende indicaties:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bevolkingsonderzoek tussen 30 en 60 jaar;`}</Inline></li>
        <li><Inline>{`klachten zoals contactbloedingen, onverklaarbare fluor of abnormaal bloedverlies;`}</Inline></li>
        <li><Inline>{`follow-up;`}</Inline></li>
        <li><Inline>{`bij een DES-dochter;`}</Inline></li>
        <li><Inline>{`bij een zichtbare of palpabele afwijking van de cervix.`}</Inline></li>
      </ul>
    </div>
  )
}
