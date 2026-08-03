import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wanneer komt een patiënt in aanmerking?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een patiënt komt pas in beeld voor longtransplantatie als aan meerdere voorwaarden is voldaan. Er moet sprake zijn van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een duidelijke diagnose,`}</Inline></li>
        <li><Inline>{`maximale behandeling van de longziekte,`}</Inline></li>
        <li><Inline>{`blijvende achteruitgang ondanks die behandeling,`}</Inline></li>
        <li><Inline>{`voldoende lichamelijke conditie om de operatie en revalidatie te doorstaan,`}</Inline></li>
        <li><Inline>{`een screening die laat zien dat er voldoende overlevingswinst te verwachten is,`}</Inline></li>
        <li><Inline>{`geen absolute contra-indicaties.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De diagnose is belangrijk, omdat je alleen dan weet wat de maximale behandeling is en of transplantatie überhaupt passend is. Soms is een transplantatie nog niet nodig of kan deze worden uitgesteld als er nog een goede behandeling bestaat.`}</Inline></p>
    </div>
  )
}
