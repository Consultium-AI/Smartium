import { Inline, DataTable, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Het beleid hangt af van de uiteindelijke oorzaak, maar bij verdenking op een kindertumor is het belangrijkste dat je **snel verder onderzoekt en verwijst**.`}</Inline>
      </p>

      <SubHeading level={2}>Algemene aanpak</SubHeading>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`Zorg voor goede beoordeling van de algemene toestand.`}</Inline></li>
        <li><Inline>{`Verricht gericht lichamelijk onderzoek.`}</Inline></li>
        <li><Inline>{`Laat beeldvorming doen.`}</Inline></li>
        <li><Inline>{`Schakel tijdig specialistische zorg in.`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij een verdenking op een **Wilms-tumor** of **neuroblastoom** hoort verdere behandeling in een gespecialiseerd traject. De precieze behandeling is afhankelijk van de diagnose en uitgebreidheid, maar kan bestaan uit operatie, chemotherapie, en soms aanvullende behandeling.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`De kern is dat een buikmassa bij een kind niet afgewacht moet worden als “waarschijnlijk iets onschuldigs”. De combinatie van klachten vraagt om snelle diagnostiek.`}</Inline>
      </p>

      <SubHeading level={2}>Belangrijke kernpunten voor het onderscheid</SubHeading>
      <p className="font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Tabel 3. Praktische aandachtspunten bij een kind met buikmassa`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Vraag', 'Waarom belangrijk?'],
          ['---', '---'],
          ['Is het kind ziek of stabiel?', 'Bepaalt urgentie'],
          ['Zit de massa in de nierstreek?', 'Denk aan Wilms-tumor'],
          ['Zit de massa meer bij bijnier of paravertebraal?', 'Denk aan neuroblastoom'],
          ['Zijn er koorts en malaise?', 'Kan passen bij infectie of maligniteit'],
          ['Is er pijn, gewichtsverlies of braken?', 'Helpt bij ernst en differentiaaldiagnose'],
          ['Wat laat echografie zien?', 'Eerste stap in lokalisatie en karakterisering'],
        ]}
      />
    </div>
  )
}
