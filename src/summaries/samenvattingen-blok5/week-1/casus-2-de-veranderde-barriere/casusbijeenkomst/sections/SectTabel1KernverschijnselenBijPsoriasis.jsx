import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Tabel 1. Kernverschijnselen bij psoriasis in deze casus`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Kenmerk"], ["---", "---"], ["Huid", "Rode, schilferende, scherp begrensde plaques"], ["Locatie", "Hele lichaam, eerder knieën, ellebogen en hoofdhuid"], ["Nagels", "Brokkelig, geel, verdikt; olievlekfenomeen, onycholyse"], ["Gewrichten", "Ochtendstijfheid, pijn, moeite met openen van potjes"], ["Complicatie", "Cellulitis van het linker onderbeen"]]} />
    </div>
  )
}
