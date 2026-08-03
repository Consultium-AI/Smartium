import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De bloedsomloop`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn twee circuits:`}</Inline></p>
      <SubHeading><Inline>{`Kleine bloedsomloop`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Zuurstofarm bloed gaat van de rechterkamer via de longslagader naar de longen. Daar wordt CO2 afgegeven en O2 opgenomen. Daarna gaat het zuurstofrijke bloed via de longaders naar de linkerboezem.`}</Inline></p>
      <SubHeading><Inline>{`Grote bloedsomloop`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Zuurstofrijk bloed gaat van de linkerkamer via de aorta naar de organen. Daar geeft het zuurstof en voedingsstoffen af. Daarna stroomt het zuurstofarme bloed via de aders terug naar de rechterboezem.`}</Inline></p>
    </div>
  )
}
