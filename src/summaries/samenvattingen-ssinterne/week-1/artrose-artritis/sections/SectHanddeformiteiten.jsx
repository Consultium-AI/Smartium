import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Handdeformiteiten`}</Inline></SubHeading>
      <PBody text={`Bij een **swan-neck deformiteit** staat:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het **PIP-gewricht in extensie**`}</Inline></li>
        <li><Inline>{`het **DIP-gewricht in flexie**`}</Inline></li>
      </ul>
      <PBody text={`Bij een **boutonnière-deformiteit** staat:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het **PIP-gewricht in flexie**`}</Inline></li>
        <li><Inline>{`het **DIP-gewricht in extensie**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Beide kunnen gezien worden in een laat stadium van RA.`}</Inline></p>
    </div>
  )
}
