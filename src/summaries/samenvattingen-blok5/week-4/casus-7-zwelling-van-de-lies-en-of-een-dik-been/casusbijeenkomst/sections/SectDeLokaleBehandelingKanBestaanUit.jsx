import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`De lokale behandeling kan bestaan uit:`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`resorcinolcrème;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`clindamycine-lotion.`}</Inline></p>
    </div>
  )
}
