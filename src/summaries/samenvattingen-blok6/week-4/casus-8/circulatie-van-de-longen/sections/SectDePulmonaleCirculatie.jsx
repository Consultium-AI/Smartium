import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De pulmonale circulatie`}</Inline></SubHeading>
      <PBody text={`De pulmonale circulatie is de circulatie die zorgt voor de **gasuitwisseling**. Hier gaat het dus om het opnemen van zuurstof in het bloed en het afgeven van koolstofdioxide aan de uitgeademde lucht. Dit is een essentieel onderdeel van de ademhaling.`} />
      <PBody text={`De pulmonale circulatie begint in de **rechterventrikel**. Daar wordt zuurstofarm bloed de **pulmonale arterie** in gepompt. Dat bloed gaat via de **truncus pulmonalis** naar de linker en rechter longslagader. Daarna vertakt het verder in arteriolen en uiteindelijk in de **pulmonale capillairen** rondom de **alveoli**.`} />
      <PBody text={`De **alveoli** zijn de kleine longblaasjes waar de gasuitwisseling plaatsvindt. Hier neemt het bloed zuurstof op en geeft het koolstofdioxide af. Daarna stroomt het nu zuurstofrijke bloed terug via de **pulmonale venulen** en **pulmonale venen** naar het **linkeratrium**. Van daaruit gaat het naar de linkerventrikel en kan het weer het lichaam in worden gepompt.`} />
      <SubHeading><Inline>{`Tabel 2. Verloop van de pulmonale circulatie`}</Inline></SubHeading>
      <DataTable rows={[["Stap", "Structuur", "Wat gebeurt er?"], ["1", "Rechterventrikel", "Pompt zuurstofarm bloed weg"], ["2", "Truncus pulmonalis en pulmonale arteriën", "Vervoeren bloed naar de longen"], ["3", "Pulmonale arteriolen en capillairen", "Bloed komt langs de alveoli"], ["4", "Alveoli", "Zuurstof gaat het bloed in, koolstofdioxide gaat eruit"], ["5", "Pulmonale venulen en venen", "Vervoeren zuurstofrijk bloed terug"], ["6", "Linkeratrium", "Ontvangt het zuurstofrijke bloed"]]} />
      <p className="leading-relaxed"><Inline>{`De volgorde is dus belangrijk. Het bloed gaat van de rechterkant van het hart naar de longen en daarna naar de linkerkant van het hart.`}</Inline></p>
      <PBody text={`**Aandacht-vraag:** Waarom is de pulmonale circulatie nodig?
**Mini-antwoord:** Omdat het bloed daar opnieuw zuurstof krijgt en koolstofdioxide kwijtraakt.`} />
    </div>
  )
}
