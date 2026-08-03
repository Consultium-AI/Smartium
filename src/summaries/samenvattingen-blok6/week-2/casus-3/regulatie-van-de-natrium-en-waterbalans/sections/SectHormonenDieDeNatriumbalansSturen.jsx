import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hormonen die de natriumbalans sturen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De natriumbalans staat onder invloed van meerdere hormonen en systemen, vooral van het RAAS-systeem. Dit systeem beïnvloedt de natriumreabsorptie op verschillende plekken in het nefron.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Angiotensine II heeft op veel plaatsen in het nefron een effect. Het stimuleert natriumreabsorptie in de proximale tubulus via NHE3, in de lis van Henle via NKCC2 en in de distale tubulus via NCC. Aldosteron werkt vooral op ENaC in de verzamelbuis. Het sympathisch zenuwstelsel en atriaal natriuretisch peptide zijn vooral werkzaam in de glomerulus, maar hebben ook invloed op de proximale tubulus en de medulla.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Invloed van hormonen op natriumreabsorptie`}</Inline></SubHeading>
      <DataTable rows={[["Hormoon/systeem", "Belangrijkste werking"], ["Angiotensine II", "Proximaal NHE3, lis van Henle NKCC2, distaal NCC"], ["Aldosteron", "Verzamelbuis ENaC"], ["Sympathisch zenuwstelsel", "Vooral glomerulus, ook proximale tubulus en medulla"], ["Atriaal natriuretisch peptide", "Vooral glomerulus, ook proximale tubulus en medulla"]]} />
      <PBody text={`**Aandachtsvraag:** welk hormoon werkt vooral op ENaC?
**Mini-antwoord:** aldosteron.`} />
    </div>
  )
}
