import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Blootstellingen die HP kunnen veroorzaken`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`HP wordt veroorzaakt door inademing van kleine deeltjes die diep in de luchtwegen en alveoli kunnen komen. Veel van deze antigenen zijn kleiner dan 3 mm en kunnen daardoor gemakkelijk worden ingeademd. Na opname worden ze lokaal afgevoerd, waarna een IgG-antistofreactie kan ontstaan en ook complementactivatie een rol kan spelen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De duur en intensiteit van de blootstelling zijn belangrijk. Hoe sterker en hoe langer de blootstelling, hoe groter de kans op ziekte en op progressie.`}</Inline></p>
    </div>
  )
}
