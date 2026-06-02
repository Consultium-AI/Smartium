import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Mechanisme`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Allergisch contacteczeem is een type IV-hypersensitiviteitsreactie. Dat betekent dat het een vertraagde afweerreactie is.`}</Inline></p>
    </div>
  )
}
