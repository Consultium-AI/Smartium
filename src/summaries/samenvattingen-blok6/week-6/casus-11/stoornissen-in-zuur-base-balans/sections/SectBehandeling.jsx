import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling richt zich vooral op de oorzaak van de stoornis.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Metabole alkalose**: denk aan 0,9% NaCl en verhoging van de plasma-K⁺.`}</Inline></li>
        <li><Inline>{`**Metabole acidose**: behandel de oorzaak, bijvoorbeeld verbetering van orgaanperfusie bij lactaatacidose of insuline bij diabetische ketoacidose.`}</Inline></li>
        <li><Inline>{`**Respiratoire alkalose**: behandel de oorzaak van hyperventilatie.`}</Inline></li>
        <li><Inline>{`**Acute respiratoire acidose**: mechanische ventilatie kan nodig zijn.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Alleen bij ernstige afwijkingen kan directe correctie met zuur of bicarbonaat worden overwogen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bij metabole alkalose als de pH boven 7,7 komt;`}</Inline></li>
        <li><Inline>{`bij metabole acidose als de pH onder 7,1 komt.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarbij wordt gekeken naar base excess of base tekort, en de plasma-K⁺ wordt goed gevolgd, omdat veranderingen in pH de kaliumspiegel beïnvloeden. Per stijging van de pH met 0,1 daalt het plasma-K⁺ met 0,3–0,6 mM, wat gevaarlijke hartritmestoornissen kan geven.`}</Inline></p>
    </div>
  )
}
