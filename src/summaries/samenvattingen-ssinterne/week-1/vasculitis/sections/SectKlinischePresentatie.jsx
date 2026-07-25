import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische presentatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Typische klachten zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`nieuwe hoofdpijn;`}</Inline></li>
        <li><Inline>{`pijn bij kauwen, dus kaakclaudicatio;`}</Inline></li>
        <li><Inline>{`verdikte of gespannen arteria temporalis;`}</Inline></li>
        <li><Inline>{`soms visusklachten;`}</Inline></li>
        <li><Inline>{`soms algemene klachten zoals koorts, malaise en gewichtsverlies.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een verhoogde BSE is heel vaak aanwezig. Ongeveer 95% van de patiënten heeft een BSE boven 50 mm/uur.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom is kaakclaudicatio zo belangrijk?
**Mini-antwoord:** omdat dit wijst op gecompliceerde reuscelarteritis en een hogere startdosering steroïden nodig maakt.`} />
    </div>
  )
}
