import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof moet je kunnen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de kenmerkende diagnostiek bij acute en chronische leukemie beschrijven;`}</Inline></li>
        <li><Inline>{`onderscheid maken tussen acute en chronische leukemie, en tussen myeloïde en lymfatische leukemie;`}</Inline></li>
        <li><Inline>{`de risicogroepindeling van de vier hoofdvormen van leukemie hanteren;`}</Inline></li>
        <li><Inline>{`de principes van de behandeling van de vier hoofdvormen van leukemie beschrijven;`}</Inline></li>
        <li><Inline>{`globaal het volledige traject van diagnose, behandeling, prognose en follow-up beschrijven.`}</Inline></li>
      </ul>
    </div>
  )
}
