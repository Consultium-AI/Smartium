import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Multipel myeloom is een ziekte van ontspoorde **plasmacellen**. Plasmacellen zijn afweercellen die normaal antistoffen maken. Bij multipel myeloom maken deze cellen één soort afwijkend eiwit, het **M-proteïne**. Dat eiwit kan in het bloed aantoonbaar zijn en helpt bij diagnose en follow-up.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`In deze casus gaat het om een vrouw met een symptomatisch multipel myeloom, **IgG kappa**, met **anemie** en **lytische botafwijkingen**. Zij is behandeld met:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`4 inductiekuren **VRD**`}</Inline>
          <ul className="list-disc pl-6 space-y-1 mt-1">
            <li><Inline>{`bortezomib`}</Inline></li>
            <li><Inline>{`lenalidomide`}</Inline></li>
            <li><Inline>{`dexamethason`}</Inline></li>
          </ul>
        </li>
        <li>
          <Inline>{`daarna **hoge dosis melfalan** en een **autologe stamceltransplantatie**`}</Inline>
        </li>
        <li><Inline>{`daarna 2 consolidatiekuren VRD`}</Inline></li>
        <li><Inline>{`gevolgd door **lenalidomide onderhoud**`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Tijdens de behandeling ontstonden complicaties:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`meerdere luchtweginfecties/pneumonieën door secundaire hypogammaglobulinemie`}</Inline>
        </li>
        <li>
          <Inline>{`een matig obstructieve longfunctie door late-onset astma`}</Inline>
        </li>
        <li>
          <Inline>{`polyneuropathie graad 1-2 van knieën tot voeten, met pijn`}</Inline>
        </li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Twee jaar later stijgt het M-proteïne opnieuw en ontstaat weer anemie. Dan moet in een MDO worden besloten welke **2e-lijns behandeling** gestart wordt.`}</Inline>
      </p>
    </div>
  )
}
