import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Gaswisseling in de long berust op diffusie over het alveolo-capillaire membraan. De wet van Fick laat zien dat diffusie toeneemt bij groter oppervlak en groter drukverschil, en afneemt bij grotere membraandikte. Koolmonoxide wordt gebruikt om de diffusiecapaciteit te meten, omdat het sterk bindt aan hemoglobine en daardoor een vrijwel nul capillaire partiële druk heeft. De DLCO wordt meestal gemeten met de single-breathtechniek en is het product van VA en KCO. De interpretatie gebeurt altijd samen met VA en KCO, omdat verschillende longziekten verschillende patronen geven. Factoren zoals anemie, polycythemie, roken, inspanning, houding en zuurstoftoediening kunnen de DLCO beïnvloeden.`}</Inline></p>
    </div>
  )
}
