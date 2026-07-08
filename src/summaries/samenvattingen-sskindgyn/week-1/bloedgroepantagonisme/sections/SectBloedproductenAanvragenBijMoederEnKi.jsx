import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bloedproducten aanvragen bij moeder en kind`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een zwangere vrouw met bloedverlies of bij een neonaat met ernstige hyperbilirubinemie of een wisseltransfusie moet je weten welk bloedproduct geschikt is.`}</Inline></p>
      <SubHeading><Inline>{`Bloedproducten voor de zwangere`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het standaard bloedproduct in Nederland is het juiste product voor de meeste situaties. Dit product is leukocytenarm door filtratie. Daardoor zijn er minder febriele reacties en is de kans op CMV-overdracht zeer laag.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Tijdens de zwangerschap is bij een transfusie echter Parvo B19-veilig bloed het meest geschikt. Dat is bloed van een donor met beschermende antistoffen tegen parvovirus B19. Dit is belangrijk omdat parvovirus B19 een aplastische crisis bij de foetus kan uitlokken, met ernstige anemie en non-immuun hydrops foetalis als gevolg.`}</Inline></p>
      <SubHeading><Inline>{`Indicaties per product`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 3. Indicaties voor verschillende bloedproducten"], ["Product", "Indicaties"], ["Parvo B19-veilig", "intra-uteriene transfusies; prematuren <1500 g en/of <32 weken tot 6 maanden na à terme datum; zwangeren; patiënten met aangeboren of verworven hemolytische anemie; patiënten met cellulaire immuundeficiëntie zonder aantoonbare antistoffen tegen parvovirus B19"], ["Standaard", "standaard transfusieproduct in Nederland; leukocytenarm; lage kans op CMV-overdracht"], ["Gewassen", "bij zeer ernstige allergische reacties, IgA-deficiëntie met anti-IgA en anafylaxie na transfusie"], ["Bestraald", "ter preventie van transfusie-geassocieerde graft-versus-hostziekte bij intra-uteriene transfusies, prematuren <1500 g en/of <32 weken tot 6 maanden na à terme datum, en bij SCID"]]} />
      <SubHeading><Inline>{`Bloed voor een wisseltransfusie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een wisseltransfusie moet het bloed compatibel zijn met moeder en kind, omdat de volledige kruisproef met het serum van de moeder wordt gedaan. Als de moeder bloedgroep O RhD positief heeft en het kind A RhD positief is, worden dus O RhD positieve donorytrocyten geselecteerd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Wisselbloed bestaat uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`jonge erytrocyten van minder dan 5 dagen oud;`}</Inline></li>
        <li><Inline>{`citraatplasma van bloedgroep AB.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Wat doet een wisseltransfusie?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een wisseltransfusie met tweemaal het bloedvolume vervangt ongeveer 85% van het circulerende bloed van het kind. Het totale serumbilirubine daalt daarmee ongeveer 50%, afhankelijk van de verdeling tussen bloed en weefsels en van de mate van hemolyse. Ook circulerende antistoffen tegen erytrocytenantigenen worden verwijderd.`}</Inline></p>
      <SubHeading><Inline>{`Welke labwaarden zijn nodig bij wisseltransfusie?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een wisseltransfusie moet je niet alleen aan bilirubine denken, maar ook aan andere parameters:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`geconjugeerd bilirubine;`}</Inline></li>
        <li><Inline>{`ongeconjugeerd bilirubine;`}</Inline></li>
        <li><Inline>{`geïoniseerd calcium;`}</Inline></li>
        <li><Inline>{`albumine;`}</Inline></li>
        <li><Inline>{`glucose;`}</Inline></li>
        <li><Inline>{`elektrolyten;`}</Inline></li>
        <li><Inline>{`bloedgas;`}</Inline></li>
        <li><Inline>{`hematocriet.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat is belangrijk omdat je naast het verlagen van bilirubine ook trombopenie, acidose en hypocalciëmie wilt voorkomen of behandelen.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom is calcium zo belangrijk bij een wisseltransfusie?
**Mini-antwoord:** omdat een wisseltransfusie hypocalciëmie kan geven, en dat moet je tijdig herkennen en corrigeren.`} />
    </div>
  )
}
