import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`D-dimeren en fibrinolyse`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij fibrinolyse worden fibrinepolymeren afgebroken tot D-dimeren. Deze zijn meetbaar in het bloed. D-dimeren zijn dus fibrine-afbraakproducten en geven aan dat er fibrinevorming én fibrineafbraak heeft plaatsgevonden.`}</Inline></p>
    </div>
  )
}
