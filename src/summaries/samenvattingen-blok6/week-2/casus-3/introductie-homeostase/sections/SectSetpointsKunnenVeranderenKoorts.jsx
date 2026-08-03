import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Setpoints kunnen veranderen: koorts`}</Inline></SubHeading>
      <PBody text={`Setpoints zijn niet altijd vast. Ze kunnen veranderen. Een klassiek voorbeeld is **koorts**.`} />
      <PBody text={`Normaal ligt het setpoint voor lichaamstemperatuur rond 37°C. Bij ziekte kan dit setpoint omhoog gaan. Dan voelt iemand zich in het begin van de koorts koud, omdat de lichaamstemperatuur dan nog **lager ligt dan het nieuwe setpoint**.`} />
      <p className="leading-relaxed"><Inline>{`Daarna gaat het lichaam warmte vasthouden en warmte maken, totdat de temperatuur het nieuwe setpoint bereikt. Later kan het setpoint weer dalen en dan volgt de afkoelingsfase.`}</Inline></p>
      <PBody text={`**Aandacht-vraag:** waarom heeft iemand met koorts het eerst koud?
**Mini-antwoord:** omdat de lichaamstemperatuur dan nog onder het verhoogde setpoint ligt.`} />
    </div>
  )
}
