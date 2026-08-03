import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvattende vergelijking van de drie situaties`}</Inline></SubHeading>
      <DataTable rows={[["Situatie", "Belangrijkste effect op ADME", "Klinisch gevolg"], ["Leverfunctiestoornis", "Vooral metabolisme en distributie veranderen", "Meer kans op toxiciteit of minder effect bij prodrugs"], ["Nierfunctiestoornis", "Vooral eliminatie verandert", "Ophoping van geneesmiddelen en meer toxiciteit"], ["Morbide obesitas", "Vooral distributie verandert", "Moeilijk voorspelbare dosering, soms dosisaanpassing nodig"]]} />
    </div>
  )
}
