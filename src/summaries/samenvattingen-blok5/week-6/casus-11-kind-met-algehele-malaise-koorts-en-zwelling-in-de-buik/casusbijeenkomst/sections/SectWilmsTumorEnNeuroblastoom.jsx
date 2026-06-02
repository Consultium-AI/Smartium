import { Inline, DataTable, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}>Wilms-tumor</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`De **Wilms-tumor** is een belangrijke niertumor bij kinderen. Het is een klassieke diagnose bij een kind met een buikmassa.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Kenmerkend is dat de tumor vaak:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`uitgaat van de **nier**,`}</Inline></li>
        <li><Inline>{`zich presenteert als een **buikmassa**,`}</Inline></li>
        <li><Inline>{`soms toevallig wordt ontdekt,`}</Inline></li>
        <li><Inline>{`en niet altijd direct veel pijn geeft.`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`De massa kan groot zijn zonder dat het kind daar in het begin veel last van heeft. Soms zijn er algemene klachten zoals malaise of koorts, maar de buikmassa is vaak het meest opvallend.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Belangrijk is dat je bij verdenking op een Wilms-tumor zorgvuldig werkt, omdat de tumor gevoelig is voor verdere verspreiding of complicaties bij onhandig onderzoek.`}</Inline>
      </p>

      <SubHeading level={2}>Neuroblastoom</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Het **neuroblastoom** is een tumor van het **sympathisch zenuwstelsel** en ontstaat vaak in de **bijnier** of langs de wervelkolom. Ook dit is een belangrijke kindertumor.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Kenmerken kunnen zijn:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`buikmassa,`}</Inline></li>
        <li><Inline>{`algemene ziekteverschijnselen,`}</Inline></li>
        <li><Inline>{`soms koorts,`}</Inline></li>
        <li><Inline>{`en soms al metastasen bij presentatie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Neuroblastoom kan zich anders gedragen dan een Wilms-tumor en kan op verschillende plaatsen in het lichaam voorkomen, afhankelijk van de oorsprong van het sympathisch zenuwstelsel.`}</Inline>
      </p>

      <p className="font-semibold text-slate-900 dark:text-slate-100 m-0 pt-2">
        <Inline>{`Tabel 2. Wilms-tumor versus neuroblastoom`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Kenmerk', 'Wilms-tumor', 'Neuroblastoom'],
          ['---', '---', '---'],
          ['Oorsprong', 'Nier', 'Sympathisch zenuwstelsel / bijnier'],
          ['Presentatie', 'Buikmassa', 'Buikmassa, soms verspreid elders'],
          ['Leeftijd', 'Kinderen', 'Kinderen'],
          ['Klinische indruk', 'Vaak massa in de buik', 'Kan agressiever of diffuser zijn'],
          ['Belang', 'Klassieke niertumor', 'Klassieke tumor van bijnier/sympathisch systeem'],
        ]}
      />
    </div>
  )
}
