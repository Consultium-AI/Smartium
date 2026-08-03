import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Huidafwijkingen en typische beelden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Huidafwijkingen zijn een belangrijk onderdeel van sarcoïdose. Voorbeelden zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**erythema nodosum**`}</Inline></li>
        <li><Inline>{`**lupus pernio**`}</Inline></li>
        <li><Inline>{`papulaire sarcoïdose`}</Inline></li>
        <li><Inline>{`nodulaire huidlaesies`}</Inline></li>
        <li><Inline>{`hypopigmentatie`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Erythema nodosum past bij pijnlijke, ontstoken huidafwijkingen, vaak op de benen. Lupus pernio is een meer chronische, karakteristieke huidmanifestatie.`}</Inline></p>
    </div>
  )
}
