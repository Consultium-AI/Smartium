import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Tabel 3. Globale behandellogica bij gelokaliseerd mammacarcinoom`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Rol"], ["---", "---"], ["Chirurgie", "Hoeksteen van curatieve behandeling"], ["Systeemtherapie", "Afhankelijk van ER/PR/HER2 en stadium"], ["Radiotherapie", "Vooral na borstsparende chirurgie"]]} />
    </div>
  )
}
