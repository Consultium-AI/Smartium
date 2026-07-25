import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`qSOFA en SOFA`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De qSOFA is een snelle bedside tool. Deze wordt gebruikt bij patiënten met een verdenking op infectie om in te schatten of er een grotere kans is op een slechte uitkomst. De score bestaat uit drie onderdelen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ademhalingsfrequentie >22/min`}</Inline></li>
        <li><Inline>{`verwardheid`}</Inline></li>
        <li><Inline>{`systolische bloeddruk <100 mmHg`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als een patiënt 2 of meer punten scoort, is de kans op een ongunstige uitkomst groter. Dan moet ook de SOFA-score worden overwogen om orgaandysfunctie beter in te schatten. De SOFA-score is uitgebreider en bevat variabelen voor onder andere respiratie, stolling, lever, circulatie, bewustzijn en nierfunctie.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. qSOFA en SOFA in het kort`}</Inline></SubHeading>
      <DataTable rows={[["Score", "Gebruik", "Belangrijkste kenmerken"], ["qSOFA", "Snelle screening", "3 klinische variabelen: ademhaling, bewustzijn, bloeddruk"], ["SOFA", "Beoordeling van orgaandysfunctie", "Uitgebreidere score met meerdere orgaansystemen"]]} />
      <PBody text={`**Aandacht-vraagje:** Waarom is qSOFA handig?
**Mini-antwoord:** Omdat het snel aan het bed te gebruiken is en meteen helpt om patiënten met een verhoogd risico op overlijden te herkennen.`} />
    </div>
  )
}
