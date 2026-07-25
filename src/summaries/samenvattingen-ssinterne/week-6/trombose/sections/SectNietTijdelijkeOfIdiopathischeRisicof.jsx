import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Niet-tijdelijke of idiopathische risicofactoren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voorbeelden zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`chronische leukemie;`}</Inline></li>
        <li><Inline>{`inflammatoire darmziekte;`}</Inline></li>
        <li><Inline>{`permanente centrale lijn;`}</Inline></li>
        <li><Inline>{`trombose zonder aanwijsbare oorzaak;`}</Inline></li>
        <li><Inline>{`orale anticonceptie die niet gestopt kan worden, bijvoorbeeld vanwege endometriose.`}</Inline></li>
      </ul>
    </div>
  )
}
