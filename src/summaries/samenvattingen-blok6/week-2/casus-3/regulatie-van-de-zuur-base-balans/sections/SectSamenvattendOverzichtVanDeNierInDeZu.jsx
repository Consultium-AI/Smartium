import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvattend overzicht van de nier in de zuur-base balans`}</Inline></SubHeading>
      <PBody text={`**Tabel 3. Belangrijkste taken van de nier bij zuur-base regulatie**`} />
      <DataTable rows={[["Proces", "Plaats", "Effect"], ["Reabsorptie van gefiltreerd HCO3-", "Proximale tubulus", "Voorkomt verlies van base"], ["Vorming van nieuw HCO3-", "Vooral verzamelbuis", "Helpt bij compensatie van zuurbelasting"], ["Uitscheiding van H+", "Verzamelbuis", "Verwijdert zuur uit het lichaam"], ["Buffering met NH3/NH4+", "Verzamelbuis en medulla", "Maakt grote zuur-excretie mogelijk"]]} />
    </div>
  )
}
