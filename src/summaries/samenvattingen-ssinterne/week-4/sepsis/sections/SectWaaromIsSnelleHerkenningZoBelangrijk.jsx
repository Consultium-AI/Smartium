import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom is snelle herkenning zo belangrijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Sepsis en septische shock hebben een hoge mortaliteit. Sepsis heeft een in-hospital mortaliteit van meer dan 10%, en septische shock van meer dan 40%. Dat maakt snelle herkenning en behandeling essentieel.`}</Inline></p>
    </div>
  )
}
