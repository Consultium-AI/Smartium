import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leefstijl: altijd de basis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Leefstijlmaatregelen zijn altijd belangrijk, ook als er medicatie wordt gestart. De belangrijkste adviezen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`voldoende bewegen;`}</Inline></li>
        <li><Inline>{`niet te veel calorieën;`}</Inline></li>
        <li><Inline>{`niet te veel verzadigde vetten;`}</Inline></li>
        <li><Inline>{`niet roken;`}</Inline></li>
        <li><Inline>{`matig alcoholgebruik;`}</Inline></li>
        <li><Inline>{`niet te veel stress;`}</Inline></li>
        <li><Inline>{`voldoende kaliuminname, bijvoorbeeld via groente en fruit;`}</Inline></li>
        <li><Inline>{`minder zout gebruiken.`}</Inline></li>
      </ul>
    </div>
  )
}
