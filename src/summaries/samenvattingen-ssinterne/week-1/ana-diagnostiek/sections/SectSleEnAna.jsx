import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`SLE en ANA`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij SLE zijn ANA en anti-dsDNA belangrijke diagnostische criteria. SLE kan zich uiten met onder andere vlindervormig erytheem, discoïde lupus, fotosensitiviteit, orale ulcera, artritis, serositis, nierafwijkingen, neurologische afwijkingen, hematologische afwijkingen en immunologische afwijkingen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Voor de diagnose SLE moeten minimaal 4 van de 11 criteria aanwezig zijn.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 7. ACR-classificatiecriteria voor SLE`}</Inline></SubHeading>
      <DataTable rows={[["Criteria"], ["---"], ["Vlindervormig erytheem"], ["Discoïde lupus"], ["Fotosensitiviteit"], ["Orale ulcera"], ["Artritis"], ["Serositis"], ["Nierafwijkingen"], ["Neurologische afwijkingen"], ["Hematologische afwijkingen"], ["ANA"], ["Immunologische afwijkingen: anti-dsDNA, anti-Sm, anti-fosfolipiden"]]} />
      <p className="leading-relaxed"><Inline>{`Bij SLE is het ANA-profiel vaak homogeen, met antistoffen tegen dsDNA, nucleosomen en histonen. Anti-dsDNA is vooral geassocieerd met lupus nefritis.`}</Inline></p>
    </div>
  )
}
