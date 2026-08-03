import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Vermijden van het antigeen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De belangrijkste stap is het opsporen en vermijden van de veroorzakende stof. Dat is vaak lastig, zeker als de blootstelling op het werk plaatsvindt. Soms zijn aanpassingen nodig, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`betere ventilatie;`}</Inline></li>
        <li><Inline>{`beschermende middelen;`}</Inline></li>
        <li><Inline>{`veranderingen in leefstijl of omgeving.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Ook bij hobby’s of huisdieren kan vermijden moeilijk zijn. Niet iedereen wil of kan zomaar stoppen met een hobby zoals vogelhouden, en soms spelen er ook financiële belangen mee.`}</Inline></p>
    </div>
  )
}
