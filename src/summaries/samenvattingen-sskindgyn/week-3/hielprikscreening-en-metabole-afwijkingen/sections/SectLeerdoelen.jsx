import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het vastenmetabolisme uitleggen en de verschillen tussen leeftijden beschrijven;`}</Inline></li>
        <li><Inline>{`de belangrijkste metabole oorzaken van hypoglycemie herkennen;`}</Inline></li>
        <li><Inline>{`de hielprikscreening in Nederland voor metabole ziekten beschrijven;`}</Inline></li>
        <li><Inline>{`de doelen en criteria van neonatale screening uitleggen;`}</Inline></li>
        <li><Inline>{`de erfelijkheid van deze ziekten beschrijven, vooral met het oog op het voorkomen van herhaling in een gezin.`}</Inline></li>
      </ul>
    </div>
  )
}
