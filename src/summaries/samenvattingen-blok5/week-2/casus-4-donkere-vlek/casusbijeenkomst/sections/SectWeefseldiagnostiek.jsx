import { Inline, PBody, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Weefseldiagnostiek`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Na beeldvorming volgt weefseldiagnostiek. Daarbij heeft **histologie** de voorkeur boven cytologie.`}</Inline>
      </p>
      <p className="leading-relaxed font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Waarom histologie?`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Bij histologie zie je de **samenhang van het weefsel**.`}</Inline></li>
        <li><Inline>{`Je kunt beter beoordelen hoe de tumor groeit.`}</Inline></li>
        <li><Inline>{`De patholoog kan zo een betrouwbaarder oordeel geven.`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Cytologie geeft vooral losse cellen, terwijl histologie meer informatie geeft over de structuur van het weefsel.`}</Inline>
      </p>
      <PBody
        text={`**Waarom is histologie belangrijker dan cytologie?**
**Kort antwoord:** omdat je niet alleen losse cellen ziet, maar ook de weefselstructuur en groeipatroon kunt beoordelen.`}
      />
    </div>
  )
}
