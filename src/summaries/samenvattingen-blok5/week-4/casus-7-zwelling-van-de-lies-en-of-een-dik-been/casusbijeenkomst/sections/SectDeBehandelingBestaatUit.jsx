import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`De behandeling bestaat uit:`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`flucloxacilline 500 mg 4x per dag gedurende 10–14 dagen;`}</Inline></li>
        <li><Inline>{`de roodheid aftekenen om het beloop te volgen;`}</Inline></li>
        <li><Inline>{`compressietherapie ter vermindering van pijn en ter bevordering van herstel;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`ziekenhuisbeoordeling bij verslechtering, koorts, toename van klachten of bewegingsbeperking van de arm.`}</Inline></p>
      <PBody text={`**Aandacht-vraag:** waarom teken je de roodheid af?
**Kort antwoord:** om te kunnen zien of de infectie uitbreidt of juist afneemt onder behandeling.`} />
    </div>
  )
}
