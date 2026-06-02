import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`ECG`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`duplexonderzoek naar varices, klepinsufficiëntie en posttrombotische resten`}</Inline></p>
    </div>
  )
}
