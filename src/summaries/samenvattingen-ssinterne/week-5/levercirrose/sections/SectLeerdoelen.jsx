import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de verschillende oorzaken van levercirrose beschrijven;`}</Inline></li>
        <li><Inline>{`de pathofysiologische veranderingen bij cirrose beschrijven;`}</Inline></li>
        <li><Inline>{`de belangrijkste symptomen en complicaties van cirrose beschrijven;`}</Inline></li>
        <li><Inline>{`de behandelingen van cirrose en de complicaties benoemen;`}</Inline></li>
        <li><Inline>{`de begrippen varicesbloeding, spontane bacteriële peritonitis, hepatorenaal syndroom en hepatische encefalopathie uitleggen;`}</Inline></li>
        <li><Inline>{`de prognose van acuut en chronisch leverfalen bepalen.`}</Inline></li>
      </ul>
    </div>
  )
}
