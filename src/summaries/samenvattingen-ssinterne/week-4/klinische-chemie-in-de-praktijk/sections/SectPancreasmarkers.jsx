import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Pancreasmarkers`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De pancreas maakt enzymen aan die gebruikt kunnen worden als biomarkers bij pancreatitis.`}</Inline></p>
      <SubHeading><Inline>{`Acute pancreatitis`}</Inline></SubHeading>
      <PBody text={`Voor **acute pancreatitis** worden twee bloedtesten genoemd:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**amylase**`}</Inline></li>
        <li><Inline>{`**lipase**`}</Inline></li>
      </ul>
      <PBody text={`Bij een acute pancreatitis verwacht je een **verhoging** van deze biomarkers.`} />
      <SubHeading><Inline>{`Chronische pancreatitis`}</Inline></SubHeading>
      <PBody text={`Bij **chronische pancreatitis** wordt als biomarker onder andere **elastase** gebruikt, meestal in de ontlasting. Daarbij verwacht je juist een **verlaging** van de uitslag, omdat de exocriene functie van de pancreas afneemt.`} />
    </div>
  )
}
