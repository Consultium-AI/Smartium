import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Casus met chronisch lymfoedeem en secundaire infectie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een patiënt met een voorgeschiedenis van mammacarcinoom, okselklierrdissectie en radiotherapie is de rechterarm kwetsbaar. Als die arm al langer dikker is en nu rood en warm wordt, denk je eerst aan chronisch lymfoedeem met een secundaire huidinfectie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Chronisch lymfoedeem betekent dat de lymfeafvoer verminderd is. Daardoor is de arm gevoeliger voor ontsteking. De prikkeldrempel voor infectie is lager. Een klein trauma, wondje of andere beschadiging kan al voldoende zijn om een infectie uit te lokken.`}</Inline></p>
      <PBody text={`**Aandacht-vraag:** waarom is een kleine wond in een arm met lymfoedeem zo belangrijk?
**Kort antwoord:** omdat de afweer en afvoer lokaal slechter zijn, waardoor een infectie sneller ontstaat en ernstiger kan verlopen.`} />
    </div>
  )
}
