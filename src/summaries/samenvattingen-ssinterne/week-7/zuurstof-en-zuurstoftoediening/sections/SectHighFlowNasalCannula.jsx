import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`High flow nasal cannula`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De high flow nasal cannula geeft verwarmde, bevochtigde lucht. De flow kan oplopen tot 60 l/min en de FiO2 kan tot 100% worden ingesteld. Daarnaast geeft deze methode enige PEEP, dus positieve eind-expiratoire druk. HFNC is niet overal op de verpleegafdeling beschikbaar.`}</Inline></p>
      <DataTable rows={[["Methode", "Flow", "FiO2", "Kenmerk"], ["Neusbril", "afhankelijk van instelling", "variabel", "eenvoudige toediening"], ["Zuurstofmasker", "6–10 l/min", "40–60%", "FiO2 lastig precies in te schatten"], ["Venturi-masker", "4–15 l/min", "instelbaar en constant", "opzetstuk bepaalt FiO2"], ["NRB-masker", "10–15 l/min", "60–90%", "zak moet gevuld blijven"], ["HFNC", "tot 60 l/min", "tot 100%", "verwarmd, bevochtigd, met enige PEEP"]]} />
    </div>
  )
}
