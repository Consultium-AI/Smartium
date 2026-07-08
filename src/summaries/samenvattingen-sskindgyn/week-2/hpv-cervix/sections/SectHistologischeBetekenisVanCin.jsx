import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Histologische betekenis van CIN`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij histologie wordt gekeken hoe diep de afwijking in het epitheel zit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**CIN 1**: de afwijkende cellen zitten in het onderste derde deel van het epitheel.`}</Inline></li>
        <li><Inline>{`**CIN 2**: ongeveer twee derde van het epitheel is dysplastisch.`}</Inline></li>
        <li><Inline>{`**CIN 3**: bijna alle cellen zijn dysplastisch, maar de **basaalmembraan** is nog intact.`}</Inline></li>
        <li><Inline>{`**Carcinoom**: de maligne cellen groeien door de basaalmembraan heen.`}</Inline></li>
      </ul>
      <PBody text={`CIN 1 wordt ook wel **LSIL** genoemd, wat staat voor lage graad squameuze intra-epitheliale laesie. CIN 2 en CIN 3 vallen onder **HSIL**, hoge graad squameuze intra-epitheliale laesies.`} />
    </div>
  )
}
