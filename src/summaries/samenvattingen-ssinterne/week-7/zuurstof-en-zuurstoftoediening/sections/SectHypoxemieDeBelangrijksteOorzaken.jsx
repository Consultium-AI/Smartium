import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hypoxemie: de belangrijkste oorzaken`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hypoxemie betekent een te laag zuurstofgehalte in het arteriële bloed. De belangrijkste oorzaken zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`diffusie stoornis;`}</Inline></li>
        <li><Inline>{`alveolaire hypoventilatie;`}</Inline></li>
        <li><Inline>{`shunt;`}</Inline></li>
        <li><Inline>{`ventilatie-perfusie mismatch.`}</Inline></li>
      </ul>
    </div>
  )
}
