import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`D – Disability`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hier zoek je naar direct levensbedreigende neurologische oorzaken zoals hypoglycemie, intoxicaties, insulten/status epilepticus en meningitis. Let op pupillen, neurologische uitval, lateralisatieverschijnselen, reflexen, tonus, insulten, meningeale prikkeling en nekstijfheid. Controleer ook op hoofdletsel.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke handelingen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`EMV-score bepalen;`}</Inline></li>
        <li><Inline>{`bedside glucose meten;`}</Inline></li>
        <li><Inline>{`bij glucose < 4 mmol/L glucose geven;`}</Inline></li>
        <li><Inline>{`bij verdenking opioïdintoxicatie naloxon geven;`}</Inline></li>
        <li><Inline>{`bij verdenking benzodiazepine-intoxicatie eventueel flumazenil geven;`}</Inline></li>
        <li><Inline>{`bij verdenking bacteriële meningitis snel antibiotica plus dexamethason starten;`}</Inline></li>
        <li><Inline>{`bij verdenking CVA neurologie consulteren;`}</Inline></li>
        <li><Inline>{`bij status epilepticus anti-epileptica geven.`}</Inline></li>
      </ul>
    </div>
  )
}
