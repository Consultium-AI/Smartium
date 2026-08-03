import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Herkennen van bloedvaten in histologische coupes`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij het beoordelen van een coupe let je vooral op de verhouding tussen lumen en wand, en op de samenstelling van de media en adventitia.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Snelle herkenningspunten`}</Inline></SubHeading>
      <DataTable rows={[["Vraag", "Waar let je op?"], ["Is het een capillair?", "Alleen endotheel, geen duidelijke spierlaag, lumen heel smal"], ["Is het een arterie?", "Duidelijke wand, relatief ronde vorm, vaak dikkere media"], ["Is het een musculaire arterie?", "Duidelijke lamina elastica interna en veel gladde spiercellen in de media"], ["Is het een vene?", "Dunne wand, grotere en vaak onregelmatige lumen, relatief dikke adventitia"], ["Zijn er vasa vasorum?", "Vooral in grotere vaten, met name in de adventitia"]]} />
    </div>
  )
}
