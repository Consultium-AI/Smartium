import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Belangrijke kenmerken die helpen zijn:`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de begrenzing van de roodheid;`}</Inline></li>
        <li><Inline>{`de aanwezigheid van warmte en pijn;`}</Inline></li>
        <li><Inline>{`koorts of algehele malaise;`}</Inline></li>
        <li><Inline>{`een wondje of andere ingang voor bacteriën;`}</Inline></li>
        <li><Inline>{`een voorgeschiedenis van lymfoedeem, operatie of bestraling;`}</Inline></li>
        <li><Inline>{`palpabele klieren of massa’s;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`uitbreiding naar de hele arm.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een scherp begrensde, rode, warme en pijnlijke huid past sterk bij erysipelas. Een diffuser beeld past meer bij cellulitis. Als er een huiddefect of wondje is, is dat een mogelijke port d’entrée: een ingang waardoor bacteriën de huid kunnen binnendringen.`}</Inline></p>
    </div>
  )
}
