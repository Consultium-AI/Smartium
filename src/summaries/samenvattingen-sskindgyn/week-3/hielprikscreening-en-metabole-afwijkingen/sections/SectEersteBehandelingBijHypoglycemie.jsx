import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Eerste behandeling bij hypoglycemie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als een kind alert is, kun je glucose enteraal geven, bijvoorbeeld in de vorm van zoete limonade. Bij een gedaald bewustzijn is dat niet veilig vanwege het risico op verslikken en aspiratie. Dan moet glucose intraveneus worden gegeven.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat gebeurt met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een **glucosebolus**`}</Inline></li>
        <li><Inline>{`gevolgd door een **continu glucose-infuus**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De bolus kan namelijk een insulinepiek geven, waardoor opnieuw hypoglycemie kan ontstaan als er niet direct een infuus volgt.`}</Inline></p>
      <PBody text={`Belangrijk is ook dat je **bloed afneemt vóór correctie** van de hypoglycemie. Alleen dan kun je de oorzaak goed onderzoeken. Ook urine wordt verzameld, bijvoorbeeld om te kijken naar ketonen en andere metabole afwijkingen.`} />
    </div>
  )
}
