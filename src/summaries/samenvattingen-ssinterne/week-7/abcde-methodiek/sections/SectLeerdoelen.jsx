import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de ABCDE-methodiek hanteren;`}</Inline></li>
        <li><Inline>{`de interventies bij elk onderdeel van de ABCDE benoemen;`}</Inline></li>
        <li><Inline>{`bepalen wanneer de ABCDE-methodiek toegepast moet worden.`}</Inline></li>
      </ul>
    </div>
  )
}
