import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 8. Villalta-score`}</Inline></SubHeading>
      <DataTable rows={[["Symptomen", "Tekenen"], ["pijn", "pretibiaal oedeem"], ["krampen", "huidinduratie"], ["zwaar gevoel", "hyperpigmentatie"], ["paresthesieën", "roodheid"], ["jeuk", "veneuze ectasie"], ["", "pijn bij kuitcompressie"], ["", "veneus ulcus"]]} />
      <p className="leading-relaxed"><Inline>{`Elk onderdeel krijgt een score van 0 tot 3, afhankelijk van de ernst.`}</Inline></p>
      <SubHeading><Inline>{`Interpretatie van de totaalscore`}</Inline></SubHeading>
    </div>
  )
}
