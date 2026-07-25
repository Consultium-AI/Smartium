import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Inlooptijden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De maximale inlooptijd van bloedproducten is belangrijk om de kwaliteit te waarborgen.`}</Inline></p>
      <DataTable rows={[["Tabel 7. Inlooptijden van bloedproducten"], ["Erytrocyten bij volwassenen", "1–6 uur per eenheid"], ["Erytrocyten bij kinderen", "10–15 ml/kg in 3–4 uur"], ["Trombocyten bij volwassenen", "20 minuten per eenheid"], ["Trombocyten bij kinderen", "10 x 10^9/kg (10 ml/kg) in 30 minuten"], ["Omniplasma® bij volwassenen", "20 minuten per eenheid"], ["Omniplasma® bij kinderen", "10–15 ml/kg in 3–4 uur"]]} />
    </div>
  )
}
