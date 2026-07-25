import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`FRAX-score`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als iemand een verhoogde fractuurrisicoscore heeft en de DXA laat geen duidelijke osteoporose zien, dan kan een FRAX-score worden berekend. FRAX staat voor fracture risk assessment en schat het 10-jaars absolute fractuurrisico.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij de casuspatiënt is de FRAX-score:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`7,8% voor een belangrijke osteoporotische fractuur;`}</Inline></li>
        <li><Inline>{`6,0% voor een heupfractuur.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`In Nederland zijn hiervoor geen vaste afkapwaarden vastgesteld. Er wordt wel genoemd dat de Amerikaanse National Osteoporosis Foundation medicamenteuze behandeling adviseert bij een 10-jaarskans van meer dan 20% voor een belangrijke fractuur of meer dan 3% voor een heupfractuur. In deze casus is er dus een verhoogd heupfractuurrisico.`}</Inline></p>
    </div>
  )
}
