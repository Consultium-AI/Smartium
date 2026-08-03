import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`mWHO-classificatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij vrouwen met een hartaandoening wordt het risico van zwangerschap ingeschat met de mWHO-classificatie. Die loopt van zeer laag risico tot extreem hoog risico.`}</Inline></p>
    </div>
  )
}
