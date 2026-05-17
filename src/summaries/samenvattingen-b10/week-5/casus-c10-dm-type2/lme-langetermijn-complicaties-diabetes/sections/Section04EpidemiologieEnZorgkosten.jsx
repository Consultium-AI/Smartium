import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Epidemiologie en zorgkosten`}</Inline></h3>
      <p><Inline>{`De maatschappelijke impact van diabetes is groot. De jaarlijkse kosten in Nederland worden geschat op ongeveer 6,8 tot 6,9 miljard euro. Dat bedrag bestaat uit directe zorgkosten voor de behandeling van de ziekte zelf, maar ook uit indirecte kosten van complicaties en van de gevolgen voor de maatschappij, zoals uitkeringen en niet kunnen werken.`}</Inline></p>
      <p><Inline>{`**Tabel 1. Overzicht van de kosten van diabetes in Nederland**`}</Inline></p>
      <DataTable rows={[["Soort kosten", "Bedrag", "Voorbeeld"], ["Directe zorgkosten", "1,6 miljard euro", "Behandeling van de ziekte zelf"], ["Indirecte kosten van complicaties", "1,3 miljard euro", "Behandeling van complicaties"], ["Indirecte maatschappelijke kosten", "4,0 miljard euro", "Niet kunnen werken, uitkeringen"], ["Totaal", "6,8–6,9 miljard euro per jaar", ""]]} />
    </div>
  )
}
