import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`De epidermis bevat verschillende celtypen:`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`keratinocyten;`}</Inline></li>
        <li><Inline>{`melanocyten;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Langerhanscellen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Keratinocyten zijn de belangrijkste cellen van de epidermis en spelen een grote rol in de barrière. Melanocyten maken pigment aan. Langerhanscellen zijn immuuncellen die een rol spelen bij afweer en allergische reacties.`}</Inline></p>
    </div>
  )
}
