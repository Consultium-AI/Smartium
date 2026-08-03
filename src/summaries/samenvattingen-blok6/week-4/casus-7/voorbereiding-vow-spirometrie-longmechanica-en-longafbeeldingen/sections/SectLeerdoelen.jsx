import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`beschrijven hoe ventilatie in het respiratoire systeem tot stand komt;`}</Inline></li>
        <li><Inline>{`uitleggen hoe de elastische eigenschappen van de long invloed hebben op longvolumes;`}</Inline></li>
        <li><Inline>{`de basisprincipes van spirometrie en flow-volumecurves uitleggen;`}</Inline></li>
        <li><Inline>{`referentiewaarden gebruiken om gemeten longfunctiewaarden te interpreteren;`}</Inline></li>
        <li><Inline>{`onderscheid maken tussen normale en afwijkende longfunctie;`}</Inline></li>
        <li><Inline>{`aanvullende testen voor astmadiagnostiek beschrijven.`}</Inline></li>
      </ul>
    </div>
  )
}
