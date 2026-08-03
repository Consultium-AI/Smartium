import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het geleidingssysteem`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De route is:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**SA-knoop**: natuurlijke pacemaker`}</Inline></li>
        <li><Inline>{`**atriale geleidingsbanen**: geleiden de prikkel door de boezems`}</Inline></li>
        <li><Inline>{`**AV-knoop**: vertraagt de prikkel`}</Inline></li>
        <li><Inline>{`**Bundel van His**`}</Inline></li>
        <li><Inline>{`**rechter- en linkerbundeltak**`}</Inline></li>
        <li><Inline>{`**Purkinjevezels**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De vertraging in de AV-knoop is belangrijk, omdat de boezems dan eerst volledig kunnen legen voordat de kamers samentrekken.`}</Inline></p>
    </div>
  )
}
