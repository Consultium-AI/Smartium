import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Intraventriculaire hemorrhagie (IVH)`}</Inline></SubHeading>
      <PBody text={`Bij ongeveer **20% van de premature pasgeborenen** worden intracraniële bloedingen gezien. Daarom worden prematuren vaak met echo gevolgd via de open fontanel. Dat is een praktische en bed-side toegankelijke methode.`} />
      <p className="leading-relaxed"><Inline>{`IVH wordt gegradeerd:`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Gradering van IVH`}</Inline></SubHeading>
      <DataTable rows={[["Graad", "Beschrijving"], ["I", "bloeding beperkt tot de germinale matrix"], ["II", "bloeding breekt door in het ventrikel, maar vult minder dan 50%"], ["III", "bloeding vult meer dan 50% van het ventrikel"], ["IV", "bloeding met periventriculaire parenchymbeschadiging door veneus infarct"]]} />
      <PBody text={`De prognose hangt af van de **locatie en grootte** van de bloeding en van eventueel bijkomend **veneus infarct**. Een groot hematoom kan de veneuze afvoer belemmeren en ook de liquorcirculatie verstoren, waardoor **posthemorragische hydrocefalie** kan ontstaan.`} />
    </div>
  )
}
