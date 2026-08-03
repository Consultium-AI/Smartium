import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Epidemiologie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Longembolieën komen wereldwijd regelmatig voor. De incidentie wordt geschat op ongeveer 0,75 tot 2,69 per 1000 inwoners. De kans neemt toe met de leeftijd. Bij mensen ouder dan 65 jaar ligt de incidentie duidelijk hoger, en bij mensen ouder dan 70 jaar nog hoger.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het aantal diagnoses lijkt toe te nemen, mogelijk door demografische veranderingen en doordat risicofactoren vaker voorkomen. Tegelijkertijd neemt ook de overleving toe. Toch overlijdt ongeveer 20% van de patiënten die de diagnose longembolie krijgen binnen 90 dagen. Bij een deel van hen is de longembolie niet de hoofdreden van opname, maar een bijkomende diagnose, bijvoorbeeld bij maligniteit, grote operatie of sepsis.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De werkelijke sterfte door niet-herkende longembolieën wordt geschat op ongeveer 5%.`}</Inline></p>
    </div>
  )
}
