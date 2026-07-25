import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van DLBCL`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling van DLBCL is veranderd door de komst van rituximab. Vroeger werd CHOP gebruikt. CHOP bestaat uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`cyclofosfamide;`}</Inline></li>
        <li><Inline>{`doxorubicine;`}</Inline></li>
        <li><Inline>{`vincristine;`}</Inline></li>
        <li><Inline>{`prednison.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Rituximab is een medicijn dat de overleving van patiënten met DLBCL duidelijk heeft verbeterd. Daarom wordt tegenwoordig R-CHOP gebruikt. Dat is CHOP gecombineerd met rituximab.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij de patiënte uit de casus, met stadium III DLBCL van het GCB-type en zonder MYC-translocatie, wordt behandeld met 8 kuren R-CHOP-21, dus eenmaal per drie weken. Na de 4e en de 8e kuur volgt een responsevaluatie.`}</Inline></p>
    </div>
  )
}
