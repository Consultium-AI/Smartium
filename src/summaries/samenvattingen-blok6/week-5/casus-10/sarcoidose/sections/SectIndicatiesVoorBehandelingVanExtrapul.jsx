import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Indicaties voor behandeling van extrapulmonale sarcoïdose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Sommige extrapulmonale vormen moeten wél behandeld worden. Dat geldt voor:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**uveïtis**`}</Inline></li>
      </ul>
      <PBody text={`De diagnose en behandelindicatie worden vastgesteld door een oogarts. Soms volstaan **lokale steroïden** in plaats van systemische therapie.`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**hypercalciëmie**`}</Inline></li>
        <li><Inline>{`**cardiale laesies**`}</Inline></li>
        <li><Inline>{`**neurologische laesies**`}</Inline></li>
        <li><Inline>{`**ernstige leverbetrokkenheid**`}</Inline></li>
      </ul>
    </div>
  )
}
