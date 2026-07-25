import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`2. Gewrichtsruimten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Beoordeel:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`is er gewrichtsruimteversmalling?`}</Inline></li>
        <li><Inline>{`is die **symmetrisch** of **asymmetrisch**?`}</Inline></li>
        <li><Inline>{`welke gewrichten zijn aangedaan?`}</Inline></li>
      </ul>
      <PBody text={`Kraakbeen is niet direct zichtbaar op een röntgenfoto. Verlies van kraakbeen zie je dus als **versmalling van de gewrichtsspleet**.`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Asymmetrische** versmalling past vaker bij **artrose**`}</Inline></li>
        <li><Inline>{`**Symmetrische** versmalling past vaker bij **artritis**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Belangrijk: een normale gewrichtsruimte sluit kraakbeenschade niet helemaal uit.`}</Inline></p>
    </div>
  )
}
