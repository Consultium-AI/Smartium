import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Preventie: wat kun je doen?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Preventie in de prenatale zorg richt zich op twee grote pijlers:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Ziektepreventie**`}</Inline></li>
        <li><Inline>{`prenatale screening;`}</Inline></li>
        <li><Inline>{`neonatale screening;`}</Inline></li>
        <li><Inline>{`vaccinatie van pasgeborenen.`}</Inline></li>
        <li><Inline>{`**Gezondheidsbevordering**`}</Inline></li>
        <li><Inline>{`stoppen met roken;`}</Inline></li>
        <li><Inline>{`vermijden van overgewicht;`}</Inline></li>
        <li><Inline>{`voorlichting en begeleiding.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarnaast zijn belangrijk:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`tijdig starten met preconceptiezorg;`}</Inline></li>
        <li><Inline>{`regelmatige controles;`}</Inline></li>
        <li><Inline>{`tijdig herkennen van complicaties;`}</Inline></li>
        <li><Inline>{`goede begeleiding tijdens de baring;`}</Inline></li>
        <li><Inline>{`goede kraamzorg.`}</Inline></li>
      </ul>
      <PBody text={`Goede zorg begint dus al **vóór de zwangerschap**.`} />
    </div>
  )
}
