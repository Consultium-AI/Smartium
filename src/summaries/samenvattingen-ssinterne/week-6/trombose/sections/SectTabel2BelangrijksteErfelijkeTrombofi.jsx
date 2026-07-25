import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 2. Belangrijkste erfelijke trombofiliefactoren`}</Inline></SubHeading>
      <DataTable rows={[["Trombofiliefactor", "Geschat relatief risico op 1e veneuze trombose"], ["Antitrombine-deficiëntie", "8–10"], ["Proteïne C-deficiëntie", "7–10"], ["Proteïne S-deficiëntie", "8–10"], ["Factor V Leiden", "3–5"], ["Prothrombinegenvariant", "3"]]} />
      <p className="leading-relaxed"><Inline>{`De prevalentie verschilt sterk. Factor V Leiden komt relatief vaak voor, terwijl antitrombine-deficiëntie zeldzaam is.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** welke erfelijke trombofilie komt het vaakst voor?
**Mini-antwoord:** factor V Leiden.`} />
    </div>
  )
}
