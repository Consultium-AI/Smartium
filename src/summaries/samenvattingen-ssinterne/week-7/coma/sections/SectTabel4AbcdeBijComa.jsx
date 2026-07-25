import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 4. ABCDE bij coma`}</Inline></SubHeading>
      <DataTable rows={[["Stap", "Waar let je op?", "Belangrijke acties"], ["A", "luchtweg, braakreflex, trauma", "chinlift, Mayo-tube, intubatie overwegen"], ["B", "ademfrequentie, saturatie, bronchospasme, longoedeem, pneumothorax", "zuurstof, bloedgas, behandelen oorzaak"], ["C", "shock, circulatie, ritme", "i.v.-toegang, bloedafname, ECG"], ["D", "glucose, pupillen, insulten, meningeale prikkeling, focale uitval", "snelle behandeling van hypoglycemie, intoxicatie, meningitis, status"], ["E", "intoxicatie, leverstigmata, temperatuur", "volledig onderzoek, temperatuur meten"]]} />
      <PBody text={`**Aandachtsvraag:** waarom is de luchtweg bij coma zo belangrijk?
**Mini-antwoord:** omdat de tongbasis en reflexen verslappen, waardoor de luchtweg kan dichtvallen.`} />
    </div>
  )
}
