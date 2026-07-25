import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hypertriglyceridemie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een sterk verhoogd triglyceridengehalte kan leiden tot lipemisch bloed en is vooral geassocieerd met acute pancreatitis. Dat kan passen bij onbehandelde diabetes, maar ook bij een erfelijke stoornis zoals LPL-deficiëntie. Deze patiënten moeten een zeer strikt dieet volgen.`}</Inline></p>
    </div>
  )
}
