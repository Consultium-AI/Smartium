import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Absorptie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Oraal toedienen kan al vlak na de geboorte. Het darmoppervlak is vanaf de geboorte voldoende groot voor opname. Wel zijn er praktische en fysiologische aandachtspunten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij orale toediening kan een kind een geneesmiddel uitspugen, bijvoorbeeld door reflux. Als je zeker wilt weten dat een geneesmiddel in de bloedbaan komt, is intraveneuze toediening nodig. Dat is bijvoorbeeld belangrijk bij neonaten met infecties of bij necrotiserende enterocolitis.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De maag-pH verandert na de geboorte. Binnen enkele uren daalt de pH naar ongeveer 2-3, maar frequente voedingen werken bufferend. Daardoor is de maag-pH bij jonge kinderen een groter deel van de tijd hoger dan bij oudere kinderen. Dat kan invloed hebben op de opname van geneesmiddelen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ook voeding kan de opname beïnvloeden. Calcium kan bijvoorbeeld complexeren met middelen zoals digoxine of levothyroxine, waardoor de absorptie vermindert. Bij jonge kinderen is het soms lastig om een geschikt tijdsinterval rond de voeding aan te houden.`}</Inline></p>
      <SubHeading><Inline>{`Rectale toediening`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Rectale toediening kan prettig zijn in de thuissituatie, vooral bij slikproblemen. Diazepam rectiole wordt vaak gebruikt bij epileptische aanvallen of koortsconvulsies. De rectale opname is echter variabel: een deel wordt niet opgenomen en kan verloren gaan bij defaecatie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een belangrijk misverstand is dat rectaal altijd sneller werkt dan oraal. Dat is niet zo. Paracetamol uit een zetpil wordt relatief langzaam opgenomen. Daarom moet de dosis bij rectale toediening anders worden gekozen dan bij orale toediening.`}</Inline></p>
      <SubHeading><Inline>{`Intramusculaire toediening`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Intramusculaire toediening geeft ook absorptie, maar heeft bij jonge kinderen meestal niet de voorkeur. Het is pijnlijk, er is soms weinig spiermassa en de doorbloeding kan verminderd zijn. Vaccins worden wel vaak intramusculair gegeven, omdat daarvoor een goede antilichaamrespons nodig is.`}</Inline></p>
    </div>
  )
}
