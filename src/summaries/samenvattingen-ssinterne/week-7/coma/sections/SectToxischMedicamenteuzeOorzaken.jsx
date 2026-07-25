import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Toxisch-medicamenteuze oorzaken`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een veelvoorkomende oorzaak van verlaagd bewustzijn is intoxicatie met medicatie, drugs, alcohol of andere toxines. Dit kan gaan om een bijwerking, een overdosering of een intoxicatie ondanks een ogenschijnlijk normale dosering, bijvoorbeeld door veranderde farmacokinetiek. Stoffen kunnen op verschillende manieren coma veroorzaken: door directe werking op het CZS, door verdringing van zuurstof, door verstoring van zuurstoftransport of door stilleggen van het celmetabolisme.`}</Inline></p>
      <PBody text={`Omdat het lastig is om alle stoffen apart te onthouden, worden intoxicaties vaak ingedeeld in **toxidromen**: herkenbare syndromen met een bepaalde combinatie van klachten en symptomen. De belangrijkste toxidromen zijn anticholinerg, cholinerg, sympathicomimetisch, serotonerg en sedatief. Vooral het **serotonerge** en het **sedatieve** toxidroom kunnen tot coma leiden.`} />
    </div>
  )
}
