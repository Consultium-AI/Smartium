import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 5. Glasgow Coma Scale`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Score", "Betekenis"], ["E – Eye opening", "4", "opent ogen spontaan"], ["", "3", "opent ogen op aanspreken"], ["", "2", "opent ogen op pijnprikkel"], ["", "1", "opent ogen niet"], ["M – Motor response", "6", "voert opdracht uit"], ["", "5", "lokaliseert pijnprikkel"], ["", "4", "normale flexie op pijnprikkel"], ["", "3", "abnormale flexie op pijnprikkel"], ["", "2", "extensie op pijnprikkel"], ["", "1", "geen reactie"], ["V – Verbal response", "5", "georiënteerd"], ["", "4", "verward maar conversatie mogelijk"], ["", "3", "woorden, geen conversatie"], ["", "2", "kreunen"], ["", "1", "geen verbale reactie"], ["", "t", "geïntubeerd"]]} />
      <PBody text={`De minimale EMV-score is **3** en de maximale is **15**. Bij afasie noteer je **V_A**, bij intubatie **V_T**.`} />
    </div>
  )
}
