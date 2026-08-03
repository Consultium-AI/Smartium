import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Compensatie: volledig of gedeeltelijk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het lichaam probeert een afwijkende pH altijd te corrigeren.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Bij een **respiratoire stoornis** compenseren de nieren door bicarbonaat aan te passen.`}</Inline></li>
        <li><Inline>{`Bij een **metabole stoornis** compenseren de longen door de ventilatie aan te passen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De richting van de compensatie volgt dezelfde richting als de primaire verandering in de verhouding tussen bicarbonaat en CO₂.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Primaire stoornis en compensatie`}</Inline></SubHeading>
      <DataTable rows={[["Primaire stoornis", "Primaire verandering", "Compensatie"], ["Metabole acidose", "HCO₃⁻ ↓", "pCO₂ ↓"], ["Metabole alkalose", "HCO₃⁻ ↑", "pCO₂ ↑"], ["Respiratoire acidose", "pCO₂ ↑", "HCO₃⁻ ↑"], ["Respiratoire alkalose", "pCO₂ ↓", "HCO₃⁻ ↓"]]} />
      <p className="leading-relaxed"><Inline>{`Respiratoire compensatie is snel, maar niet volledig. Metabole compensatie verloopt langzamer, maar kan uiteindelijk wel volledig zijn.`}</Inline></p>
    </div>
  )
}
