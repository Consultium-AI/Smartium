import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting van het beleid bij koorts`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Koorts in de zwangerschap vraagt om een brede blik: denk aan infecties, trombose, auto-immuunziekten en zwangerschapsgerelateerde aandoeningen. Vraag gericht uit, onderzoek zorgvuldig en vergeet de foetus niet. Ook bij een ogenschijnlijk milde infectie kan de zwangerschap extra risico lopen.`}</Inline></p>
    </div>
  )
}
