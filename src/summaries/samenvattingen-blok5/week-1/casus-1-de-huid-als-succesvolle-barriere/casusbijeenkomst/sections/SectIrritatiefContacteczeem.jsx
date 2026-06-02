import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Irritatief contacteczeem`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De meest waarschijnlijke verklaring in deze casus is irritatief contacteczeem.`}</Inline></p>
    </div>
  )
}
