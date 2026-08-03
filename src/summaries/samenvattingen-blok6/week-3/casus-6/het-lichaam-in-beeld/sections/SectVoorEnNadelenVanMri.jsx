import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Voor- en nadelen van MRI`}</Inline></SubHeading>
      <PBody text={`**Voordelen**`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`geen ioniserende straling;`}</Inline></li>
        <li><Inline>{`uitstekend weke delen contrast;`}</Inline></li>
        <li><Inline>{`beelden in alle mogelijke vlakken.`}</Inline></li>
      </ul>
      <PBody text={`**Nadelen**`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`lange scantijd;`}</Inline></li>
        <li><Inline>{`hoge kosten;`}</Inline></li>
        <li><Inline>{`gevoelig voor bewegingsartefacten;`}</Inline></li>
        <li><Inline>{`niet geschikt voor patiënten met bepaalde metalen implantaten of pacemakers.`}</Inline></li>
      </ul>
    </div>
  )
}
