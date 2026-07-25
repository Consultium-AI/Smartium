import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Oorzaken van chronische nierschade`}</Inline></SubHeading>
      <PBody text={`Chronische nierschade kan ontstaan door dezelfde processen als acute nierinsufficiëntie, vooral als er definitief nierweefsel verloren gaat. Een belangrijk punt is dat **glomeruli die verloren zijn gegaan niet meer herstellen**. Daardoor ontstaat een vicieuze cirkel: de resterende glomeruli raken overbelast, waardoor er nog meer schade ontstaat.`} />
      <p className="leading-relaxed"><Inline>{`Belangrijke oorzaken zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`diabetes mellitus;`}</Inline></li>
        <li><Inline>{`hypertensie;`}</Inline></li>
        <li><Inline>{`atherosclerose met renovasculaire nefropathie;`}</Inline></li>
        <li><Inline>{`stofwisselingsziekten;`}</Inline></li>
        <li><Inline>{`structurele afwijkingen zoals cystennieren, congenitale urologische afwijkingen en de ziekte van Alport.`}</Inline></li>
      </ul>
    </div>
  )
}
