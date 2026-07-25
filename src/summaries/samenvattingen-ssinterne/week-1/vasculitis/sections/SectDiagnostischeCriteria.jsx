import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostische criteria`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor EGPA bestaan verschillende criteria. Belangrijke elementen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`astma;`}</Inline></li>
        <li><Inline>{`eosinofilie;`}</Inline></li>
        <li><Inline>{`vasculitis in meerdere organen;`}</Inline></li>
        <li><Inline>{`neuropathie;`}</Inline></li>
        <li><Inline>{`niet-fixe pulmonale infiltraten;`}</Inline></li>
        <li><Inline>{`paranasale sinusafwijkingen;`}</Inline></li>
        <li><Inline>{`extravasculaire eosinofielen;`}</Inline></li>
        <li><Inline>{`eosinofiele en necrotiserende granulomateuze ontsteking.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`ANCA is vaker aanwezig wanneer glomerulonefritis bestaat.`}</Inline></p>
    </div>
  )
}
