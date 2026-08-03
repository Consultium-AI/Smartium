import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Elektrofysiologie: pacemakercellen en myocyten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het hart heeft een eigen elektrisch geleidingssysteem. Dat zorgt ervoor dat de prikkel snel en gecoördineerd door het hart loopt.`}</Inline></p>
    </div>
  )
}
