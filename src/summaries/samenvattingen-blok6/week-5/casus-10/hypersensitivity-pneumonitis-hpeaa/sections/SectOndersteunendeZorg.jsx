import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ondersteunende zorg`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Naast de specifieke behandeling is ondersteunende zorg belangrijk voor de kwaliteit van leven. Denk aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`extra zuurstof;`}</Inline></li>
        <li><Inline>{`longrevalidatie;`}</Inline></li>
        <li><Inline>{`behandeling van bijkomende aandoeningen.`}</Inline></li>
      </ul>
    </div>
  )
}
