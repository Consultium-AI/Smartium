import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Zuurstof en saturatie meten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Zuurstofsaturatie meten betekent dat je bepaalt welk percentage van het hemoglobine zuurstof gebonden heeft. Dit gebeurt met fotometrie: rood en infrarood licht worden gebruikt om de saturatie te schatten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Er zijn wel factoren die de meting kunnen verstoren, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`nagellak;`}</Inline></li>
        <li><Inline>{`donkere huid;`}</Inline></li>
        <li><Inline>{`vasoconstrictie;`}</Inline></li>
        <li><Inline>{`hypotensie;`}</Inline></li>
        <li><Inline>{`koolmonoxide.`}</Inline></li>
      </ul>
    </div>
  )
}
