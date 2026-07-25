import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Afbouwen en follow-up`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na start van prednison zie je meestal binnen 1 tot 2 weken klinische verbetering. Afbouwen doe je pas als de klachten weg zijn en de ontstekingswaarden normaliseren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een gebruikelijk schema is:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`na 4 weken verlagen met 10 mg per 2 weken tot 20 mg per dag;`}</Inline></li>
        <li><Inline>{`daarna verlagen met 2,5 mg per 2 tot 4 weken tot 10 mg per dag;`}</Inline></li>
        <li><Inline>{`daarna verlagen met 1 mg per 4 tot 8 weken, zolang er geen relapse optreedt.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Controle gebeurt na 1, 3 en 6 weken en daarna elke 3 maanden in het eerste jaar. CRP en BSE worden regelmatig gecontroleerd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De behandeling duurt meestal 1 tot 3 jaar. Ongeveer 30 tot 50% van de patiënten kan na 2 jaar volledig stoppen met steroïden.`}</Inline></p>
    </div>
  )
}
