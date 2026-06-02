import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Differentiaaldiagnose hierbij`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`infectieuze lymfadenitis;`}</Inline></li>
        <li><Inline>{`kattenkrabziekte;`}</Inline></li>
        <li><Inline>{`lymfoom;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`metastase of recidief van een maligniteit.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De aanwezigheid van een huiddefect kan een ingang zijn voor infectie, maar een niet-pijnlijke lymfeklier en supraclaviculaire zwelling maken een maligniteit ook belangrijk om te overwegen.`}</Inline></p>
    </div>
  )
}
