import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof moet je begrijpen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`wat hepatitis C is en wat het virus in de lever doet;`}</Inline></li>
        <li><Inline>{`hoe levercirrose ontstaat bij chronische hepatitis C;`}</Inline></li>
        <li><Inline>{`hoe je patiënten met hepatitis C herkent;`}</Inline></li>
        <li><Inline>{`hoe hepatitis C wordt vastgesteld;`}</Inline></li>
        <li><Inline>{`hoe hepatitis C wordt behandeld;`}</Inline></li>
        <li><Inline>{`waarom vroege opsporing belangrijk is.`}</Inline></li>
      </ul>
    </div>
  )
}
