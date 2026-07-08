import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische gevolgen na de geboorte`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na de geboorte kan een kind met deze nierafwijking respiratoire problemen hebben, bijvoorbeeld door longhypoplasie. Daarna kan snel blijken dat de nierfunctie ernstig gestoord is. Dan kan peritoneale dialyse nodig zijn, gevolgd door chronische dialyse of een transplantatietraject.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het prenatale beeld kan dus sterk verschillen van het beeld na de geboorte, afhankelijk van de ernst van de nierfunctie en de variabele expressie van de genetische afwijking.`}</Inline></p>
    </div>
  )
}
