import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Medicamenteuze behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De medicamenteuze behandeling van systolisch hartfalen is gebaseerd op de onderliggende pathofysiologie. Vaak wordt een combinatie van middelen gebruikt.`}</Inline></p>
    </div>
  )
}
