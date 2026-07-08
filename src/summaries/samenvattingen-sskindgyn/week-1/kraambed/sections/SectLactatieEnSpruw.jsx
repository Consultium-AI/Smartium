import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Lactatie en spruw`}</Inline></SubHeading>
      <SubHeading><Inline>{`Spruw bij moeder en kind`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij pijnlijke tepels tijdens en na het voeden, een huilende baby en wit beslag op de tong moet je denken aan spruw. Daarbij vraag je naar het beloop van de borstvoeding, pijn bij lactatie, stuwing en harde plekken in de mamma. Bij de moeder inspecteer en palpeer je de borsten en tepels. Bij de baby kijk je naar de algemene indruk en inspecteer je de mond.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Spruw is een infectie met gisten of schimmels. Een risicofactor is antibiotica-profylaxe tijdens de partus, omdat dit de kans op zo’n infectie verhoogt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De behandeling bestaat uit nystatine op de tepel en in de mond van het kind. De behandeling moet doorgaan tot ten minste 2 dagen nadat de afwijkingen verdwenen zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een mogelijke complicatie is dat de baby minder goed aanlegt, waardoor stuwing ontstaat. Ook mastitis kan optreden.`}</Inline></p>
    </div>
  )
}
