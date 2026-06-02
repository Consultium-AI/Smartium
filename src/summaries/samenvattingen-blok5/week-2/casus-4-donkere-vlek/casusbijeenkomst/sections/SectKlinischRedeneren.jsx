import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed"><Inline>{`De eerste vraag is: moet je geruststellen, mammografie aanvragen of genetisch onderzoek inzetten?`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De juiste denkrichting is dat er eerst diagnostiek nodig is om de afwijking te beoordelen. De prioriteit ligt dus bij het stellen van een diagnose. Genetisch onderzoek kan relevant zijn, maar komt niet vóór het vaststellen van de aard van de afwijking.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een jonge vrouw moet je bovendien nadenken over de kwaliteit van de beeldvorming. Jong borstweefsel is vaak dichter van structuur. Dat maakt mammografie lastiger te beoordelen.`}</Inline></p>
    </div>
  )
}
