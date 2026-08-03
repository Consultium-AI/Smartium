import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de neurofysiologische opbouw van het perifere autonome zenuwstelsel beschrijven, met aandacht voor neurotransmitters en receptoren;`}</Inline></li>
        <li><Inline>{`beredeneren wat de effecten zijn van cholinerge en noradrenerge farmacologische interventies op het autonome zenuwstelsel.`}</Inline></li>
      </ul>
    </div>
  )
}
