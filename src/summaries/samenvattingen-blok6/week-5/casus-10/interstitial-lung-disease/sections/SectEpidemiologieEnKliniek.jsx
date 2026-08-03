import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Epidemiologie en kliniek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`IPF komt vooral voor bij oudere mannen. De gemiddelde leeftijd bij begin is ongeveer 65 jaar. De incidentie wordt geschat op 5,6 per 100.000 per jaar. De prognose is slecht: de mediane overleving is 3 tot 5 jaar na diagnose.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De klachten zijn in het begin niet specifiek:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`droge hoest`}</Inline></li>
        <li><Inline>{`dyspneu bij inspanning`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Er zijn meestal geen duidelijke aanwijzingen voor een auto-immuunziekte. Bij onderzoek kunnen Velcro crackles en clubbing aanwezig zijn.`}</Inline></p>
    </div>
  )
}
