import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waterbalans: osmolaliteit als stuurmechanisme`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De waterbalans draait vooral om het behoud van de osmolaliteit. Die wordt primair bewaakt door osmoreceptoren in de hypothalamus. Als de osmolaliteit stijgt, reageert het lichaam met twee belangrijke mechanismen: er wordt meer antidiuretisch hormoon, ADH, afgegeven en er ontstaat dorst. De nieren zijn vervolgens het uitvoerende orgaan dat de urine kan concentreren of verdunnen, afhankelijk van de behoefte.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De nier kan dus niet alleen water vasthouden, maar ook juist veel water uitscheiden. Dat gebeurt via een samenspel van transportprocessen, de osmotische gradiënt in de nier en de werking van ADH.`}</Inline></p>
    </div>
  )
}
