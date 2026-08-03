import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Toepassingen van MRI`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`MRI is vooral geschikt voor:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`neurologisch onderzoek, zoals hersenen en ruggenmerg;`}</Inline></li>
        <li><Inline>{`musculoskeletale aandoeningen, zoals gewrichten, spieren, pezen en ligamenten;`}</Inline></li>
        <li><Inline>{`oncologie, bijvoorbeeld hersentumoren en leverafwijkingen;`}</Inline></li>
        <li><Inline>{`cardiovasculair onderzoek;`}</Inline></li>
        <li><Inline>{`abdominale beeldvorming, vooral van lever, pancreas en nieren.`}</Inline></li>
      </ul>
    </div>
  )
}
