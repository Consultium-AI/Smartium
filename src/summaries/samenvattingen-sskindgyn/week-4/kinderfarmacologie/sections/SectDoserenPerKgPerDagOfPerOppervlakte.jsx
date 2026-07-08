import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Doseren: per kg, per dag of per oppervlakte`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Kinderdoseringen worden vaak gegeven als totale dagdosis per kilogram, verdeeld over meerdere giften. Soms staat dezelfde dosis in een andere notatie, bijvoorbeeld 4dd 25 mg/kg in plaats van 100 mg/kg/dag in 4 doses. Dat vraagt goed lezen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Sommige middelen, vooral cytostatica, worden gedoseerd per lichaamsoppervlak in plaats van per kilogram. Daarvoor bestaan verschillende formules. De formule van Mosteller is het eenvoudigst:`}</Inline></p>
      <PBody text={`**S = √(L × M / 3600)**`} />
      <p className="leading-relaxed"><Inline>{`waarbij S het lichaamsoppervlak in m² is, L de lengte in cm en M het gewicht in kg.`}</Inline></p>
    </div>
  )
}
