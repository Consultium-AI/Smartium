import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het basismechanisme van kaliumuitscheiding`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De volgorde van de belangrijkste stappen is:`}</Inline></p>
      <DataTable rows={[["Stap", "Proces"], ["1", "Detectie van hoog kalium in de bijnier"], ["2", "Stimulatie van aldosteronafgifte"], ["3", "Natriumreabsorptie via het ENaC-kanaal"], ["4", "Ontstaan van een negatieve lading in de urine"], ["5", "Diffusie van kalium door een kaliumkanaal"]]} />
      <PBody text={`Aldosteron stimuleert dus de natriumreabsorptie via **ENaC** in de verzamelbuis. Daardoor wordt het tubuluslumen negatiever. Die negatieve lading bevordert vervolgens de diffusie van kalium naar het lumen, waardoor kalium wordt uitgescheiden.`} />
    </div>
  )
}
