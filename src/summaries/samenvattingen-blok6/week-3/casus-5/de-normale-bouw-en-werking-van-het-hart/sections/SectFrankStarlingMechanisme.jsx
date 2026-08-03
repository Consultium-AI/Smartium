import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Frank-Starling mechanisme`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hoe meer de ventrikel gevuld is, hoe krachtiger de contractie en hoe groter het slagvolume, binnen fysiologische grenzen.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:**
Wat gebeurt er met het slagvolume als de preload toeneemt?
**Mini-antwoord:** Het slagvolume neemt toe.`} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
