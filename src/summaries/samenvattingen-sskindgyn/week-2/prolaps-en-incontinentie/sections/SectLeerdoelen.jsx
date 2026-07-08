import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na deze samenvatting heb je een basisoverzicht van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de soorten urine-incontinentie`}</Inline></li>
        <li><Inline>{`de diagnostiek bij incontinentie`}</Inline></li>
        <li><Inline>{`de behandeling van incontinentie`}</Inline></li>
        <li><Inline>{`wat een prolaps is`}</Inline></li>
        <li><Inline>{`welke vormen van prolaps er zijn`}</Inline></li>
        <li><Inline>{`hoe verschillende vormen van prolaps behandeld kunnen worden`}</Inline></li>
      </ul>
    </div>
  )
}
