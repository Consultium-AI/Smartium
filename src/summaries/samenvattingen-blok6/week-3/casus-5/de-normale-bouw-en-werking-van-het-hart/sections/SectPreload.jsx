import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Preload`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Preload is de rek van de ventrikelwand aan het einde van de diastole. Die hangt vooral samen met het eind-diastolisch volume.`}</Inline></p>
    </div>
  )
}
