import { Inline, PBody, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Casus met chronisch lymfoedeem en secundaire infectie`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Bij een patiënt met een voorgeschiedenis van mammacarcinoom, okselklierrdissectie en radiotherapie is de rechterarm kwetsbaar. Als die arm al langer dikker is en nu rood en warm wordt, denk je eerst aan chronisch lymfoedeem met een secundaire huidinfectie.`}</Inline>
      </p>
      <p className="leading-relaxed">
        <Inline>{`Chronisch lymfoedeem betekent dat de lymfeafvoer verminderd is. Daardoor is de arm gevoeliger voor ontsteking. De prikkeldrempel voor infectie is lager. Een klein trauma, wondje of andere beschadiging kan al voldoende zijn om een infectie uit te lokken.`}</Inline>
      </p>
      <PBody
        text={`**Aandacht-vraag:** waarom is een kleine wond in een arm met lymfoedeem zo belangrijk?
**Kort antwoord:** omdat de afweer en afvoer lokaal slechter zijn, waardoor een infectie sneller ontstaat en ernstiger kan verlopen.`}
      />
      <SubHeading><Inline>{`Klinische kenmerken`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de arm is duidelijk dikker dan de andere arm;`}</Inline></li>
        <li><Inline>{`de huid is rood en warm;`}</Inline></li>
        <li><Inline>{`er kan een gevoelige okselklier zijn;`}</Inline></li>
        <li><Inline>{`de voorgeschiedenis wijst op een kwetsbare arm.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Aanvullend onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij deze situatie kan het laboratorium passen bij een ontsteking:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`CRP licht verhoogd;`}</Inline></li>
        <li><Inline>{`leukocyten niet altijd verhoogd;`}</Inline></li>
        <li><Inline>{`bezinking verhoogd, maar aspecifiek.`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Een echo van de oksel kan een vergrote lymfeklier laten zien met een vet hilum, wat past bij een reactief aspect. Een punctie van de lymfeklier is hier niet geïndiceerd. Bij verdenking op DVT kan echo of D-dimeer worden overwogen.`}</Inline>
      </p>
      <SubHeading><Inline>{`Werkdiagnose`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`De werkdiagnose is secundaire huidinfectie op chronisch lymfoedeem, zonder duidelijke primaire oorzaak.`}</Inline>
      </p>
      <SubHeading><Inline>{`Beleid`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Omdat het risico op een ernstig beloop verhoogd is, wordt antibiotische behandeling overwogen. Het doel is niet alleen de huidige infectie behandelen, maar ook complicaties zoals fasciitis voorkomen.`}</Inline>
      </p>
    </div>
  )
}
