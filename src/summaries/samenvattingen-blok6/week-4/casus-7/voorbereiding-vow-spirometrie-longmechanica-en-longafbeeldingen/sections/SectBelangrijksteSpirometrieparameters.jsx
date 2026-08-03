import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Belangrijkste spirometrieparameters`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij geforceerde spirometrie zijn vooral deze parameters belangrijk:`}</Inline></p>
      <DataTable rows={[["Tabel 1. Belangrijkste spirometrieparameters"], ["Parameter", "Betekenis"], ["FVC", "Forced Vital Capacity: de hoeveelheid lucht die na maximale inademing met kracht volledig wordt uitgeblazen"], ["FEV1", "Forced Expiratory Volume in 1 second: de hoeveelheid lucht die in de eerste seconde wordt uitgeblazen"], ["FEV1/FVC-ratio", "Verhouding tussen FEV1 en FVC; maat voor obstructie"], ["PEF", "Peak Expiratory Flow: de maximale uitademingssnelheid"]]} />
      <p className="leading-relaxed"><Inline>{`De FEV1/FVC-ratio is normaal ongeveer 80%, maar neemt af met de leeftijd.`}</Inline></p>
    </div>
  )
}
