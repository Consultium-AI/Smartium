import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Overgevoeligheidsreacties: type I tot en met IV`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Allergische reacties worden ingedeeld in vier typen overgevoeligheid. Het is handig om die indeling eerst goed te kennen.`}</Inline></p>
      <PBody text={`**Tabel 1. Indeling van overgevoeligheidsreacties**`} />
      <DataTable rows={[["Type", "Kenmerk", "Voorbeelden"], ["Type I", "IgE-gemedieerd", "Anafylaxie door pinda, allergische rhinoconjunctivitis"], ["Type II", "Cytotoxisch", "Hemolytische anemie, trombopenie"], ["Type III", "Immuuncomplexen", "Serumziekte-achtig beeld met urticaria, gewrichtsklachten, koorts"], ["Type IV", "T-cel-gemedieerd", "Contactallergie, vertraagde geneesmiddelenallergie"]]} />
      <PBody text={`Bij **type I** reageren IgE-antilichamen. Bij **type II** binden IgG of IgM aan antigenen op cellen of extracellulaire matrix, waardoor celdestructie of afbraak van matrix kan ontstaan. Bij **type III** vormen antistoffen complexen met circulerende antigenen; die complexen slaan vooral neer in kleine bloedvaten, glomeruli en synovia. Dat kan leiden tot malaise, koorts, vasculitis, glomerulonefritis en artritis. Bij **type IV** speelt de T-cel een rol; dit zie je bijvoorbeeld bij contactallergie en vertraagde geneesmiddelenallergie.`} />
    </div>
  )
}
