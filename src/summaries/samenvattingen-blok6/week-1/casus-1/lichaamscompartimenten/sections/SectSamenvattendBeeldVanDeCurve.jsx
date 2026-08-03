import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvattend beeld van de curve`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een geneesmiddel met een middelmatige compartimentverdeling kun je dus het volgende onthouden:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Hoge leeftijd**: minder klaring door verminderde nierfunctie, dus Cmax omhoog en T1/2 omhoog.`}</Inline></li>
        <li><Inline>{`**Obesitas**: groter Vd, dus Cmax omlaag en T1/2 omhoog.`}</Inline></li>
        <li><Inline>{`**Geneesmiddeleninteractie**: vooral effect op metabolisme, dus Cmax en T1/2 kunnen beide kanten op veranderen, terwijl Vd gelijk blijft.`}</Inline></li>
      </ul>
    </div>
  )
}
