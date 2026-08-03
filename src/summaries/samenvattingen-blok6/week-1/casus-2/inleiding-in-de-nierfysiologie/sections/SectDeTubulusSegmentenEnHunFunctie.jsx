import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De tubulus: segmenten en hun functie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na de glomerulus komt het filtraat in de tubulus. De tubulus bestaat uit verschillende segmenten, en elk segment heeft een eigen taak. Samen zorgen ze voor terugresorptie van nuttige stoffen, uitscheiding van afvalstoffen en regeling van water, zouten, bloeddruk en pH.`}</Inline></p>
      <PBody text={`**Tabel 3. Volgorde van de tubulussegmenten**`} />
      <DataTable rows={[["Volgorde", "Segment"], ["1", "Proximale tubulus"], ["2", "Dunne deel van de lis van Henle"], ["3", "Dikke deel van de lis van Henle"], ["4", "Distale tubulus"], ["5", "Verzamelbuis"]]} />
    </div>
  )
}
