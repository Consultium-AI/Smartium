import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`ECG en harttonen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het ECG is een registratie van de elektrische activiteit van het hart aan het lichaamsoppervlak. Het is een optelsom van alle elektrische signalen in het hart.`}</Inline></p>
    </div>
  )
}
