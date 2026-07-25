import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`LMWH en pentasaccharide`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`LMWH en fondaparinux worden in een vaste dosis op basis van lichaamsgewicht gegeven. Er is geen routinematige laboratoriumcontrole nodig.`}</Inline></p>
    </div>
  )
}
