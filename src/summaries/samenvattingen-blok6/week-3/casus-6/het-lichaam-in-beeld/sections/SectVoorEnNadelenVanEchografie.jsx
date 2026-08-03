import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Voor- en nadelen van echografie`}</Inline></SubHeading>
      <PBody text={`**Voordelen**`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`geen ioniserende straling;`}</Inline></li>
        <li><Inline>{`real-time beeldvorming;`}</Inline></li>
        <li><Inline>{`relatief goedkoop en breed beschikbaar;`}</Inline></li>
        <li><Inline>{`draagbaar;`}</Inline></li>
        <li><Inline>{`geschikt voor dynamisch onderzoek.`}</Inline></li>
      </ul>
      <PBody text={`**Nadelen**`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`sterk afhankelijk van de vaardigheid van de echografist;`}</Inline></li>
        <li><Inline>{`minder goed voor diepe structuren;`}</Inline></li>
        <li><Inline>{`niet goed door lucht heen;`}</Inline></li>
        <li><Inline>{`beeldkwaliteit hangt af van de lichaamsbouw van de patiënt.`}</Inline></li>
      </ul>
    </div>
  )
}
