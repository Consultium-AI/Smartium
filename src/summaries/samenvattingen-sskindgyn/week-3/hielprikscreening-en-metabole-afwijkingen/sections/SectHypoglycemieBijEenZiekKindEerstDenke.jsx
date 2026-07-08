import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hypoglycemie bij een ziek kind: eerst denken, dan handelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een acuut ziek kind met sufheid en braken moet je eerst snel inschatten hoe ernstig de situatie is. De eerste stap is altijd het beoordelen van de vitale functies volgens het ABC-principe: Airway, Breathing, Circulation. Daarna beoordeel je de neurologische toestand met de AVPU-score:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**A**lert`}</Inline></li>
        <li><Inline>{`reageert op **V**oice`}</Inline></li>
        <li><Inline>{`reageert op **P**ain`}</Inline></li>
        <li><Inline>{`**U**nresponsive`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een kind met een verlaagd bewustzijn kan snel gevaarlijk ziek zijn. Daarom moet je direct ook de glucose meten. Dat is een belangrijke regel: na ABC komt glucose. Hypoglycemie is namelijk een snel corrigeerbare oorzaak van bewustzijnsdaling.`}</Inline></p>
    </div>
  )
}
