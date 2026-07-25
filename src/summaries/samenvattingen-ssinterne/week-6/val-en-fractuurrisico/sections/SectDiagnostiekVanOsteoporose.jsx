import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek van osteoporose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De diagnose osteoporose stel je met een DXA-scan. Daarmee meet je de botdichtheid, uitgedrukt in een T-score.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Interpretatie van de T-score`}</Inline></SubHeading>
      <DataTable rows={[["T-score", "Betekenis"], ["≥ -1", "normale botdichtheid"], ["-1 tot -2,5", "osteopenie"], ["≤ -2,5", "osteoporose"]]} />
      <p className="leading-relaxed"><Inline>{`Bij de DXA kan ook een VFA worden verricht: Vertebral Fracture Assessment. Daarmee beoordeel je de wervels op fracturen. Dat is belangrijk, omdat veel wervelfracturen geen klachten geven en de aanwezigheid van een wervelfractuur invloed heeft op het beleid.`}</Inline></p>
    </div>
  )
}
