import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wie komt in aanmerking voor preconceptieadvies?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In principe kan een groot deel van de mensen met een kinderwens baat hebben bij preconceptieadvies. Denk aan iemand met een actieve kinderwens, iemand met een chronische aandoening, iemand die medicatie gebruikt, of iemand met leefstijlfactoren zoals roken. Ook mensen zonder duidelijke voorgeschiedenis kunnen in aanmerking komen, omdat er soms toch aandachtspunten zijn die vooraf besproken moeten worden.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Voorbeelden van mensen die in aanmerking komen voor preconceptieadvies`}</Inline></SubHeading>
      <DataTable rows={[["Situatie", "Waarom relevant?"], ["Actieve kinderwens", "Er kan direct advies worden gegeven om risico’s te verlagen"], ["Chronische ziekte", "De ziekte kan invloed hebben op zwangerschap en andersom"], ["Medicatiegebruik", "Niet alle medicatie is veilig in de zwangerschap"], ["Roken of andere leefstijlfactoren", "Deze kunnen de kans op complicaties verhogen"], ["Blanco voorgeschiedenis", "Ook dan kan er nog een risico-inventarisatie nodig zijn"]]} />
    </div>
  )
}
