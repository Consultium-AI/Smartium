import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Invasief ductaal mammacarcinoom`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`In deze casus is uiteindelijk sprake van een **cT2N0Mx, graad 2 invasief ductaal mammacarcinoom**, met:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**ER negatief**`}</Inline></li>
        <li><Inline>{`**PR negatief**`}</Inline></li>
        <li><Inline>{`**HER2 sterk positief (3+)**`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Dit betekent dat het om een kwaadaardige borsttumor gaat waarbij de tumor groter is dan klein, zonder aangetoonde lymfeklieruitzaaiingen op dat moment, en zonder bekende metastasen in deze notatie.`}</Inline>
      </p>
    </div>
  )
}
