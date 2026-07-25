import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Interventies bij de C`}</Inline></SubHeading>
      <SubHeading><Inline>{`Vaattoegang`}</Inline></SubHeading>
      <PBody text={`Bij een acuut zieke patiënt plaats je een **perifeer infuus**. Bij ernstige instabiliteit zijn vaak twee infusen gewenst. Als dat niet snel lukt, kan een **intra-osseale toegang** worden gebruikt.`} />
      <SubHeading><Inline>{`Vloeistoftoediening`}</Inline></SubHeading>
      <PBody text={`Bij resuscitatie start je meestal met een **kristalloïd**, bij voorkeur:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Ringer’s lactaat**`}</Inline></li>
        <li><Inline>{`**NaCl 0,9%**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Ringer’s lactaat heeft de meest fysiologische samenstelling.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij ernstige shock geef je vloeistof op geleide van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bloeddruk`}</Inline></li>
        <li><Inline>{`hartfrequentie`}</Inline></li>
        <li><Inline>{`bewustzijn`}</Inline></li>
        <li><Inline>{`temperatuur van de extremiteiten`}</Inline></li>
        <li><Inline>{`urineproductie`}</Inline></li>
        <li><Inline>{`lactaat`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Bloedproducten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij bloedverlies kan bloed nodig zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bij voorkeur gekruist of bloedgroep- en rhesusspecifiek bloed`}</Inline></li>
        <li><Inline>{`in nood kan O-neg bloed worden gebruikt`}</Inline></li>
        <li><Inline>{`bij grote bloedingen ook plasma en stollingsproducten`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Permissive hypotension`}</Inline></SubHeading>
      <PBody text={`Bij ernstige bloedingen die nog niet gestopt zijn, streef je soms bewust niet meteen naar een normale bloeddruk, maar naar een systolische bloeddruk rond **80 mmHg**.`} />
      <SubHeading><Inline>{`Hypothermie voorkomen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Patiënten in shock kunnen snel afkoelen. Dat verslechtert de prognose en moet worden voorkomen. Verwarm daarom infuusvloeistoffen en dek de patiënt goed toe.`}</Inline></p>
      <SubHeading><Inline>{`Aanvullend onderzoek`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`laboratoriumonderzoek`}</Inline></li>
        <li><Inline>{`12-afleidingen ECG`}</Inline></li>
        <li><Inline>{`X-thorax`}</Inline></li>
        <li><Inline>{`eventueel echo of CT`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 2. Infuusvloeistoffen in het kort`}</Inline></SubHeading>
      <DataTable rows={[["Vloeistof", "Kenmerk"], ["NaCl 0,9%", "veel gebruikt, minder fysiologisch dan Ringer’s lactaat"], ["Ringer’s lactaat", "meest fysiologische samenstelling"], ["Glucose 5%", "andere verdeling in het lichaam, niet standaard voor resuscitatie"], ["Colloïden", "minder geschikt bij ernstig zieke of septische patiënten"]]} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
