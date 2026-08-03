import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De bijnier en het sympathische systeem`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De bijniermerg speelt een bijzondere rol binnen het sympathische systeem. Daar zorgt acetylcholine op nicotine-receptoren voor afgifte van (nor)adrenaline in het bloed. Op die manier kan het sympathische systeem niet alleen via zenuwbanen werken, maar ook via hormoonafgifte.`}</Inline></p>
    </div>
  )
}
