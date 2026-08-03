import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Secundair spontane pneumothorax`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een secundair spontane pneumothorax ontstaat bij een bestaande longziekte of een andere aandoening met longbetrokkenheid. De long is dan al beschadigd, waardoor een pneumothorax makkelijker optreedt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke oorzaken zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`COPD en emfyseem`}</Inline></li>
        <li><Inline>{`tuberculose`}</Inline></li>
        <li><Inline>{`cystische longziekten`}</Inline></li>
        <li><Inline>{`bacteriële pneumonie, waarbij door necrose van longweefsel en viscerale pleura lucht kan lekken`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij deze vorm is de long dus al kwetsbaar. Daarom herstelt een secundaire spontane pneumothorax meestal minder makkelijk vanzelf dan een primaire.`}</Inline></p>
    </div>
  )
}
