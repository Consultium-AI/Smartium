import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        <Inline>{`Waarom ontstaat relapse?`}</Inline>
      </h3>
      <p>
        <Inline>{`Remissie blijft alleen behouden zolang de onderliggende oorzaken onder controle blijven. Twee factoren zijn daarbij het belangrijkst:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Inline>{`**vetophoping in lever en pancreas**;`}</Inline>
        </li>
        <li>
          <Inline>{`voldoende **restfunctie van de β-cellen**.`}</Inline>
        </li>
      </ul>
      <p>
        <Inline>{`Relapse ontstaat vaak door een combinatie van biologische en gedragsmatige factoren. Dat kan bijvoorbeeld gebeuren als:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Inline>{`de intensieve fase van de behandeling te vroeg wordt beëindigd, terwijl de vetmassa in organen nog te hoog is;`}</Inline>
        </li>
        <li>
          <Inline>{`iemand na gewichtsreductie weer terugvalt in oude eetpatronen;`}</Inline>
        </li>
        <li>
          <Inline>{`gewichtsreducerende medicatie wordt gestopt, waardoor verzadiging afneemt en het gewicht weer toeneemt;`}</Inline>
        </li>
        <li>
          <Inline>{`of de β-celfunctie in de loop der jaren verder achteruitgaat.`}</Inline>
        </li>
      </ul>
      <p>
        <Inline>{`Na remissie blijft daarom een **gezonde leefstijl** heel belangrijk. Niet alleen voeding, maar ook beweging, slaap, stress en langdurige begeleiding spelen hierbij een rol.`}</Inline>
      </p>
    </div>
  )
}
