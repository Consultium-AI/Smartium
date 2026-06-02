import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Als de barrière beschadigd raakt, gebeurt onder andere het volgende:`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`verlies van filaggrine;`}</Inline></li>
        <li><Inline>{`verminderde natuurlijke vochtbindende factoren (NMF);`}</Inline></li>
        <li><Inline>{`verhoogd transepidermaal waterverlies (TEWL);`}</Inline></li>
        <li><Inline>{`microfissuren, waardoor allergenen en microben makkelijker binnendringen;`}</Inline></li>
        <li><Inline>{`activatie van keratinocyten;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`afgifte van cytokinen zoals IL-1, IL-33 en TSLP.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Filaggrine is belangrijk voor een goede huidbarrière. Als filaggrine vermindert, wordt de huid droger en kwetsbaarder. TEWL betekent dat er meer water via de huid verdwijnt. De huid wordt dan sneller droog en geïrriteerd.`}</Inline></p>
    </div>
  )
}
