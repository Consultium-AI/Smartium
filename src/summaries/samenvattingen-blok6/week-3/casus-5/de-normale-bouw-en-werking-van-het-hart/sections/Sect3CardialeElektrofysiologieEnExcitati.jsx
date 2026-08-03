import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`3. Cardiale elektrofysiologie en excitatie-contractie koppeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Je begrijpt de basis van de elektrische activiteit van het hart, de geleiding van de prikkel, de actiepotentialen van pacemakercellen en myocyten, en hoe elektrische activatie leidt tot contractie via calcium.`}</Inline></p>
    </div>
  )
}
