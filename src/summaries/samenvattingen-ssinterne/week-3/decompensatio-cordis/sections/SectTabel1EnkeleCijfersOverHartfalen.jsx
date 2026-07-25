import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 1. Enkele cijfers over hartfalen`}</Inline></SubHeading>
      <DataTable rows={[["Onderwerp", "Gegevens"], ["Aantal mensen met hartfalen in Nederland", "ongeveer 200.000"], ["Jaarlijkse sterfte in Nederland", "ongeveer 7000"], ["Wereldwijd aantal patiënten", "meer dan 20 miljoen"], ["Kans om ooit hartfalen te ontwikkelen", "ongeveer 1 op de 5"], ["Wereldwijde kosten", "ongeveer 45 miljard dollar, oplopend naar 90 miljard dollar"], ["Verwachte kosten in Nederland", "sterk stijgend in de komende jaren"]]} />
    </div>
  )
}
