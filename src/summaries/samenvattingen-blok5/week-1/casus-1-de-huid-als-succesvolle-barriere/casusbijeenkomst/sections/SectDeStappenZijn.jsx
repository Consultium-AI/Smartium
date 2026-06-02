import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`De stappen zijn:`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`eerst is er een sensibilisatiefase;`}</Inline></li>
        <li><Inline>{`hierbij spelen Langerhanscellen een rol;`}</Inline></li>
        <li><Inline>{`daarna volgt een immuunreactie bij hernieuwd contact;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`deze reactie wordt vooral gedreven door Th1- en Th17-cellen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het verschil met irritatief contacteczeem is dus dat bij allergisch contacteczeem eerst een immuunsysteem-sensibilisatie nodig is.`}</Inline></p>
    </div>
  )
}
