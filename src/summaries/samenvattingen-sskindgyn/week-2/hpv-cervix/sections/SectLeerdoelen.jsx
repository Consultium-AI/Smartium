import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na deze samenvatting kun je globaal:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de anatomie van de cervix uitleggen;`}</Inline></li>
        <li><Inline>{`oorzaken benoemen voor het ontstaan van premaligne afwijkingen aan de cervix;`}</Inline></li>
        <li><Inline>{`de uitslag van een uitstrijkje van de cervix interpreteren;`}</Inline></li>
        <li><Inline>{`de vervolgstappen na een afwijkend uitstrijkje aan de patiënte uitleggen;`}</Inline></li>
        <li><Inline>{`uitleggen wat een colposcopisch onderzoek inhoudt.`}</Inline></li>
      </ul>
    </div>
  )
}
