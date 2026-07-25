import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stadiëring volgens Lugano`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De uitgebreidheid van het lymfoom wordt ingedeeld volgens de Lugano-criteria. Daarbij wordt gekeken naar de ligging van de aangedane lymfeklieren ten opzichte van het diafragma en naar extranodale betrokkenheid.`}</Inline></p>
    </div>
  )
}
