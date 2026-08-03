import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ventilatie ontstaat door drukverschillen die worden opgewekt door de ademhalingsspieren en de elastische eigenschappen van long en borstkas. Spirometrie meet longvolumes en luchtstromen en helpt bij het herkennen van obstructie, restrictie en astma. Referentiewaarden en Z-scores zijn nodig om te bepalen of een uitslag normaal is. Een meting is alleen bruikbaar als zij technisch aanvaardbaar en herhaalbaar is. Daarom controleer je altijd eerst de kwaliteit van de spirometrie, en pas daarna de medische betekenis.`}</Inline></p>
    </div>
  )
}
