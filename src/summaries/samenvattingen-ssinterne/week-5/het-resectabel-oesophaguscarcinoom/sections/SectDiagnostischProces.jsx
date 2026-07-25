import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostisch proces`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Wanneer er op basis van passageklachten of andere symptomen wordt besloten tot een gastroscopie, heeft dat onderzoek meerdere doelen. Eerst wordt gekeken of er een afwijking is, waar die zit en over hoeveel centimeter die zich uitstrekt. Ook wordt beoordeeld of er Barrett-slijmvlies aanwezig is en waar de Z-lijn ligt, dus de overgang tussen slokdarm en maag.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als er verdenking is op een maligniteit, worden tijdens het endoscopisch onderzoek biopten afgenomen. Daarnaast wordt in hetzelfde onderzoek vaak een inwendige echografie gedaan. Daarmee kan de lokale doorgroei van de tumor worden beoordeeld, dus het T-stadium. Ook helpt dit om te bepalen of een lokale endoscopische behandeling nog mogelijk is.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Diagnostische stappen bij verdenking op oesophaguscarcinoom`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoek", "Doel"], ["Gastroscopie", "Afwijking zien, lokalisatie bepalen, uitbreiding meten"], ["Beoordeling Barrett en Z-lijn", "Inschatting van achtergrond en overgangsgebied"], ["Biopten", "Pathologisch bewijs van maligniteit"], ["Endoscopische echografie", "Lokale doorgroei en T-stadium beoordelen"], ["PET-CT en CT", "Uitzaaiingen en uitgebreidheid opsporen"]]} />
      <p className="leading-relaxed"><Inline>{`Bij een oppervlakkig oesophaguscarcinoom, dus zonder doorgroei in diepere lagen, kunnen endoscopische technieken worden gebruikt. Zeer oppervlakkige tumoren kunnen zelfs met curatieve intentie endoscopisch worden verwijderd.`}</Inline></p>
    </div>
  )
}
