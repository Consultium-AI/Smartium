import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is circulatoire shock?`}</Inline></SubHeading>
      <PBody text={`Shock is een **syndroom waarbij de circulatie ontoereikend is om aan de zuurstofbehoefte van de weefsels te voldoen**. Dat betekent dat de zuurstofvraag groter is dan het zuurstofaanbod. Shock is dus **niet hetzelfde als hypotensie**. Een patiënt kan shock hebben zonder duidelijk verlaagde bloeddruk.`} />
      <PBody text={`Om shock vast te stellen, zou je eigenlijk het zuurstoftekort op weefselniveau moeten meten. Dat is in de praktijk niet goed mogelijk. Daarom kijk je naar **compensatiemechanismen** en naar de gevolgen van een tekort aan circulerend volume voor verschillende organen.`} />
      <SubHeading><Inline>{`Symptomen en tekenen van shock`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De typische verschijnselen passen bij de reactie van het lichaam op onvoldoende circulatie:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Hart:** tachycardie, hypotensie`}</Inline></li>
        <li><Inline>{`**Longen:** tachypnoe`}</Inline></li>
        <li><Inline>{`**Nieren:** oligurie, dus diurese < 0,5 ml/kg/uur`}</Inline></li>
        <li><Inline>{`**Hersenen:** delier, veranderd bewustzijn`}</Inline></li>
        <li><Inline>{`**Huid:** koude acra, gemarmerde knieën`}</Inline></li>
        <li><Inline>{`**Celmetabolisme:** lactaatacidose`}</Inline></li>
      </ul>
      <PBody text={`Gemarmerde knieën worden ook wel **livedo reticularis** genoemd. Dat is een netvormige cyanotische verkleuring, vaak zichtbaar aan de benen.`} />
    </div>
  )
}
