import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Cardiovasculair risicomanagement: het uitgangspunt`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Cardiovasculair risicomanagement, vaak afgekort als CVRM, draait om preventie. Hart- en vaatziekten zijn op hoge leeftijd een van de meest voorkomende oorzaken van ziekte en sterfte. Daarom is het belangrijk om niet alleen te behandelen als iemand al ziek is, maar juist ook om risico’s vroeg te herkennen en te verlagen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij CVRM gaat het om drie dingen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het herkennen van patiënten met een verhoogd risico;`}</Inline></li>
        <li><Inline>{`het behandelen van patiënten met een hoog risico;`}</Inline></li>
        <li><Inline>{`het controleren van factoren die het risico op hart- en vaatziekten verhogen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Hart- en vaatziekten waar het hier om gaat, zijn vooral aandoeningen waarbij atherosclerose een centrale rol speelt. Atherosclerose is de geleidelijke ophoping van vet en ontstekingsprocessen in de vaatwand, waardoor bloedvaten nauwer worden en trombose of ischemie kan ontstaan.`}</Inline></p>
      <SubHeading><Inline>{`Primaire en secundaire preventie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Binnen CVRM wordt vooral onderscheid gemaakt tussen primaire en secundaire preventie:`}</Inline></p>
      <DataTable rows={[["Begrip", "Betekenis"], ["Primaire preventie", "Voorkomen van hart- en vaatziekten bij iemand die nog nooit een cardiovasculaire gebeurtenis heeft gehad"], ["Secundaire preventie", "Voorkomen van een recidief na een eerdere cardiovasculaire gebeurtenis"]]} />
      <p className="leading-relaxed"><Inline>{`De term tertiaire preventie wordt in de praktijk bij hart- en vaatziekten niet gebruikt.`}</Inline></p>
    </div>
  )
}
