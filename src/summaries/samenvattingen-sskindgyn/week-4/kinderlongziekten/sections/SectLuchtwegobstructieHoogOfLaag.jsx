import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Luchtwegobstructie: hoog of laag?`}</Inline></SubHeading>
      <PBody text={`Een belangrijk onderscheid is dat tussen een **bovenste** en een **onderste** luchtwegobstructie. Een inspiratoire stridor wijst op een obstructie van de extra-thoracale luchtweg, dus van de bovenste luchtweg. Een expiratoir piepen past juist bij een intrathoracale obstructie, dus bij de onderste luchtwegen.`} />
      <p className="leading-relaxed"><Inline>{`Tijdens inspiratie is de druk in de luchtweg lager, waardoor een extrathoracale vernauwing meer zichtbaar wordt. Tijdens expiratie stijgt de druk in de luchtweg, waardoor een extrathoracale obstructie juist wat wordt open geduwd. Een intrathoracale obstructie werkt andersom: die wordt bij expiratie juist verder dichtgeduwd. Daarom hoor je bij een intrathoracale obstructie vaak expiratoir piepen.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** wat betekent een inspiratoire stridor meestal?
*Kort antwoord:* een obstructie van de bovenste, extra-thoracale luchtweg.`} />
    </div>
  )
}
