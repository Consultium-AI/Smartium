import { Inline, PBody, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Casus met erysipelas na een wondje`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`In een andere variant is er een week eerder een wondje ontstaan tijdens het scheren. Daarna ontstaat een rood, glanzend, strakgespannen en scherp begrensd gebied in de oksel en bovenarm. Dat gebied is warm en pijnlijk, maar er is geen harde massa voelbaar.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Dit beeld past heel goed bij erysipelas. De combinatie van:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`scherpe begrenzing;`}</Inline></li>
        <li><Inline>{`roodheid;`}</Inline></li>
        <li><Inline>{`warmte;`}</Inline></li>
        <li><Inline>{`zwelling;`}</Inline></li>
        <li><Inline>{`pijn;`}</Inline></li>
        <li><Inline>{`en een duidelijke port d’entrée`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`maakt deze diagnose waarschijnlijk.`}</Inline>
      </p>
      <SubHeading><Inline>{`Diagnostiek`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Erysipelas is vooral een klinische diagnose. Aanvullend onderzoek is meestal niet nodig om de diagnose te stellen. Wel kunnen CRP en leukocyten verhoogd zijn.`}</Inline>
      </p>
      <SubHeading><Inline>{`Behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`De behandeling bestaat uit:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`flucloxacilline 500 mg 4x per dag gedurende 10–14 dagen;`}</Inline></li>
        <li><Inline>{`de roodheid aftekenen om het beloop te volgen;`}</Inline></li>
        <li><Inline>{`compressietherapie ter vermindering van pijn en ter bevordering van herstel;`}</Inline></li>
        <li>
          <Inline>{`ziekenhuisbeoordeling bij verslechtering, koorts, toename van klachten of bewegingsbeperking van de arm.`}</Inline>
        </li>
      </ul>
      <PBody
        text={`**Aandacht-vraag:** waarom teken je de roodheid af?
**Kort antwoord:** om te kunnen zien of de infectie uitbreidt of juist afneemt onder behandeling.`}
      />
    </div>
  )
}
