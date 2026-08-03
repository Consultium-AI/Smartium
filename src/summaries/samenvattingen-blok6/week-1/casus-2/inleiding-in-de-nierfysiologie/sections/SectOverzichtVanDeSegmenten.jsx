import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Overzicht van de segmenten`}</Inline></SubHeading>
      <PBody text={`**Tabel 4. Belangrijkste kenmerken van de tubulussegmenten**`} />
      <DataTable rows={[["Segment", "Locatie", "Belangrijkste functie"], ["Proximale tubulus", "Schors", "Massale reabsorptie van water, Na⁺, Cl⁻, glucose, aminozuren en HCO3⁻; secretie van creatinine en geneesmiddelen"], ["Dunne lis van Henle", "Merg", "Waterreabsorptie in neergaande deel; passieve NaCl-reabsorptie in opgaande deel"], ["Dikke lis van Henle", "Merg, opgaand deel", "Actieve Na⁺, K⁺ en Cl⁻-reabsorptie; geen waterdoorlaatbaarheid"], ["Distale tubulus", "Schors", "Fijnafstelling van NaCl, calciumreabsorptie onder invloed van PTH, H⁺-secretie"], ["Verzamelbuis", "Schors naar nierbekken", "Eindregeling van water- en zoutreabsorptie onder invloed van ADH en aldosteron"]]} />
    </div>
  )
}
