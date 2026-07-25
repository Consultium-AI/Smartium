import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de relatie tussen het cardiovasculaire systeem, bloeddrukregulatie en shock uitleggen;`}</Inline></li>
        <li><Inline>{`de definitie van circulatoire shock geven;`}</Inline></li>
        <li><Inline>{`de belangrijkste symptomen en tekenen van shock beschrijven;`}</Inline></li>
        <li><Inline>{`de vier typen shock benoemen;`}</Inline></li>
        <li><Inline>{`de basisprincipes van de behandeling van shock uitleggen;`}</Inline></li>
        <li><Inline>{`het infuusbeleid bij shock beredeneren.`}</Inline></li>
      </ul>
    </div>
  )
}
