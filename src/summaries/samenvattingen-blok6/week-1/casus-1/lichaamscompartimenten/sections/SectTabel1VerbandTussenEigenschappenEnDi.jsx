import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 1. Verband tussen eigenschappen en distributievolume`}</Inline></SubHeading>
      <DataTable rows={[["Eigenschap van het geneesmiddel", "Effect op verdeling", "Gevolg voor Vd"], ["Hydrofiel", "Blijft relatief in waterige compartimenten en bloed", "Lager Vd"], ["Lipofiel", "Verplaatst zich makkelijker naar weefsels en vet", "Hoger Vd"], ["Sterke binding aan plasma-albumine", "Blijft in het bloed gebonden", "Lager Vd"]]} />
      <PBody text={`Een hoge binding aan **plasma-albumine** verlaagt het Vd, omdat het geneesmiddel dan nauwelijks uit het bloed naar het weefsel kan. Albumine is dus als het ware een “vasthoudende” factor in het plasma.`} />
    </div>
  )
}
