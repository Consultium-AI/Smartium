import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Geneesmiddelveiligheid bij kinderen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Kinderen zijn geen kleine volwassenen. Dat klinkt eenvoudig, maar het is precies de kern van kinderfarmacologie. Bij kinderen veranderen dosering, toedienvorm, opname, verdeling en afbraak van geneesmiddelen voortdurend met leeftijd, gewicht en ontwikkeling. Daardoor is voorschrijven bij kinderen lastiger dan bij volwassenen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een belangrijk praktisch punt is dat geneesmiddelfouten bij kinderen relatief vaak voorkomen. In een kinderziekenhuis gaat een groot deel van de meldingen over geneesmiddelen. Dat komt vooral doordat een verkeerde dosering niet altijd direct opvalt. Bij volwassenen herken je een fout vaak sneller, omdat vaste doseringen gebruikelijk zijn. Bij kinderen moet je veel vaker rekenen per kilogram lichaamsgewicht, en dat maakt fouten makkelijker.`}</Inline></p>
    </div>
  )
}
