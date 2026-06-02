import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`4. Erysipelas en cellulitis`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Bij een man van 76 jaar met een pijnlijk rood onderbeen, koorts en algehele malaise past **erysipelas** het best. Het acute begin, de snelle progressie en de ziek indruk zijn hierbij belangrijk.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Verschil tussen erysipelas en cellulitis:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**erysipelas**: roodheid is **scherp begrensd**;`}</Inline></li>
        <li><Inline>{`**cellulitis**: roodheid is **onscherp begrensd**.`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij erysipelas/cellulitis:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`is de huidinfectie vaak acuut;`}</Inline></li>
        <li><Inline>{`kan koorts aanwezig zijn;`}</Inline></li>
        <li><Inline>{`is het been pijnlijk en rood.`}</Inline></li>
      </ul>
      <p className="leading-relaxed font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Aanvullend onderzoek:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Inline>{`bij een ongecompliceerd beeld hebben **labonderzoek en kweken** meestal geen extra waarde;`}</Inline>
        </li>
        <li>
          <Inline>{`bij twijfel aan trombose kan de DVT-beslisregel en eventueel een echo worden gebruikt.`}</Inline>
        </li>
      </ul>
      <p className="leading-relaxed font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Behandeling:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**orale antibiotica**;`}</Inline></li>
        <li><Inline>{`goede **pijnstilling**;`}</Inline></li>
        <li><Inline>{`zoeken naar een **port d’entrée**, bijvoorbeeld **tinea pedis**;`}</Inline></li>
        <li><Inline>{`roodheid aftekenen om het beloop te volgen;`}</Inline></li>
        <li>
          <Inline>{`vaak eerste keus: **flucloxacilline oraal 4 dd 500 mg gedurende 10–14 dagen**;`}</Inline>
        </li>
        <li>
          <Inline>{`**ambulante compressietherapie** zodra de pijn dat toelaat kan de pijn verlichten, de genezing versnellen en de kans op lymfoedeem en recidief verkleinen.`}</Inline>
        </li>
      </ul>
    </div>
  )
}
