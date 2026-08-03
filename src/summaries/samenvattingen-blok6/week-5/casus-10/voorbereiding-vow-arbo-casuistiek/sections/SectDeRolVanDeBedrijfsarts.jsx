import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De rol van de bedrijfsarts`}</Inline></SubHeading>
      <PBody text={`De bedrijfsarts is een belangrijke schakel in de verzuimbegeleiding. Je kunt hem of haar zien als een **spin in het web**. Waar de huisarts vooral kijkt naar de klacht en behandeling, kijkt de bedrijfsarts breder: wie is deze persoon, waarom is de klacht juist nu ontstaan, wat is de relatie met het werk, en wat kan iemand nu en in de toekomst nog wel?`} />
      <p className="leading-relaxed"><Inline>{`De bedrijfsarts:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`beoordeelt de relatie tussen gezondheid en werk;`}</Inline></li>
        <li><Inline>{`kijkt naar arbeidsinhoud, arbeidsomstandigheden, arbeidsverhoudingen en arbeidsvoorwaarden;`}</Inline></li>
        <li><Inline>{`adviseert over aanpassingen in werk;`}</Inline></li>
        <li><Inline>{`zet zich preventief en curatief in;`}</Inline></li>
        <li><Inline>{`signaleert gezondheidsrisico’s op de werkplek.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De bedrijfsarts moet daarbij onpartijdig blijven, ook al wordt hij of zij betaald door de werkgever. Dat gebeurt door professioneel en volgens richtlijnen te werken en door de onafhankelijke medische rol centraal te stellen.`}</Inline></p>
    </div>
  )
}
