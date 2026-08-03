import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`ECG-golven`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**P-top:** depolarisatie van de atria`}</Inline></li>
        <li><Inline>{`**QRS-complex:** depolarisatie van de ventrikels`}</Inline></li>
        <li><Inline>{`**T-top:** repolarisatie van de ventrikels`}</Inline></li>
      </ul>
    </div>
  )
}
