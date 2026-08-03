import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`ECG en actiepotentialen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De actiepotentialen van de verschillende hartcellen zijn terug te zien in het ECG.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**P-top** komt overeen met atriale depolarisatie`}</Inline></li>
        <li><Inline>{`**QRS-complex** komt overeen met ventriculaire depolarisatie`}</Inline></li>
        <li><Inline>{`**ST-segment** komt overeen met de plateaufase van de ventriculaire actiepotentiaal`}</Inline></li>
        <li><Inline>{`**T-top** komt overeen met ventriculaire repolarisatie`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Pacemakercellen zijn op het oppervlakte-ECG niet direct zichtbaar, maar bepalen wel de timing van de rest.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
