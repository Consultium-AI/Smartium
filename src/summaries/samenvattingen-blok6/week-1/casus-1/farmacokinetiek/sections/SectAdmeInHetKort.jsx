import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`ADME in het kort`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Vraag", "Kernidee"], ["Absorptie", "Hoe komt het binnen?", "Het farmacon komt vanuit de toedieningsplaats in de bloedbaan"], ["Distributie", "Waar gaat het naartoe?", "Het farmacon verdeelt zich over het lichaam"], ["Metabolisme", "Hoe wordt het afgebroken?", "Vooral de lever verandert het farmacon"], ["Eliminatie", "Hoe gaat het eruit?", "Het farmacon verlaat het lichaam, vooral via de nieren"]]} />
      <p className="leading-relaxed"><Inline>{`Bij het voorschrijven van een geneesmiddel is het belangrijk om te begrijpen hoe het zich in het lichaam gedraagt. De ADME-processen kunnen namelijk door allerlei factoren worden beïnvloed.`}</Inline></p>
    </div>
  )
}
