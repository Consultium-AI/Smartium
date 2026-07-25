import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Links- en rechtszijdig hartfalen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hartfalen kan zich meer linkszijdig of meer rechtszijdig uiten. In de praktijk komen klachten vaak samen voor, en op termijn is er meestal geen strikt geïsoleerd links- of rechtszijdig hartfalen meer. Vaak heeft één kant eerst de overhand en breidt het probleem zich later uit.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Sommige klachten zie je bij beide vormen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`moeheid;`}</Inline></li>
        <li><Inline>{`bleekheid;`}</Inline></li>
        <li><Inline>{`tachycardie of palpitaties;`}</Inline></li>
        <li><Inline>{`vochtretentie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Andere klachten passen meer bij één van beide kanten.`}</Inline></p>
    </div>
  )
}
