import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed"><Inline>{`De casus benadrukt verschillende maatregelen om huidbeschadiging te voorkomen of te beperken.`}</Inline></p>
    </div>
  )
}
