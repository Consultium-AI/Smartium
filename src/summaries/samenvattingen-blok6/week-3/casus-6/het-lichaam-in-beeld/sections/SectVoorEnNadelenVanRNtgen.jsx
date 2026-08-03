import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Voor- en nadelen van röntgen`}</Inline></SubHeading>
      <PBody text={`**Voordelen**`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`snel;`}</Inline></li>
        <li><Inline>{`relatief goedkoop;`}</Inline></li>
        <li><Inline>{`breed beschikbaar;`}</Inline></li>
        <li><Inline>{`goed voor bot en luchtbevattende structuren.`}</Inline></li>
      </ul>
      <PBody text={`**Nadelen**`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`gebruik van **ioniserende straling**, die schade kan toebrengen aan weefsels en DNA;`}</Inline></li>
        <li><Inline>{`je kunt niet letterlijk “in” het lichaam kijken;`}</Inline></li>
        <li><Inline>{`structuren liggen over elkaar heen geprojecteerd, wat de beoordeling moeilijker maakt.`}</Inline></li>
      </ul>
    </div>
  )
}
