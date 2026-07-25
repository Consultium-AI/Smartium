import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Mechanismen van aritmie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn drie belangrijke mechanismen waardoor ritmestoornissen kunnen ontstaan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Automaticiteit**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een cel of groep cellen depolariseert sneller dan normaal en neemt de pacemakerfunctie over. Dit zie je bijvoorbeeld bij sommige atriale tachycardieën en ventriculaire tachycardieën.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Nadepolarisatie**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Tijdens de repolarisatie wordt de drempel opnieuw overschreden, waardoor extra depolarisaties ontstaan. Dit kan leiden tot bijvoorbeeld PVC’s, PAC’s of polymorfe VT’s.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Re-entry**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dit is het belangrijkste mechanisme. Er ontstaat als het ware een kortsluiting in het geleidingssysteem, waardoor elektrische activiteit blijft rondcirkelen en de sinusknoop wordt buitengespeeld. Voorbeelden zijn AVNRT, AVRT en sommige VT’s.`}</Inline></p>
    </div>
  )
}
