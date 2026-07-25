import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Profylaxe`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het doel van profylaxe is het voorkomen van gewrichtsbloedingen en gewrichtsschade op lange termijn. Daarbij streef je ernaar dat de dalspiegel van factor VIII of IX boven 1% blijft. Zo wordt een ernstige hemofiliepatiënt tijdelijk meer als een matig-ernstige of milde patiënt, waardoor spontane bloedingen afnemen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Gebruikelijk is:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hemofilie A: factor VIII 2–3 keer per week, ongeveer 25 IE/kg;`}</Inline></li>
        <li><Inline>{`hemofilie B: factor IX 2 keer per week, ongeveer 50 IE/kg.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Indicaties voor profylaxe zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`alle kinderen met ernstige hemofilie A of B;`}</Inline></li>
        <li><Inline>{`kinderen met matig ernstige hemofilie die frequent bloeden;`}</Inline></li>
        <li><Inline>{`patiënten met frequente gewrichtsbloedingen of ernstige weke-delenbloedingen;`}</Inline></li>
        <li><Inline>{`recidiverende bloedingen in één gewricht;`}</Inline></li>
        <li><Inline>{`chronische synovitis;`}</Inline></li>
        <li><Inline>{`intensieve fysiotherapie of revalidatie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Op volwassen leeftijd stopt ongeveer 30% van de hemofiliepatiënten met profylaxe.`}</Inline></p>
    </div>
  )
}
