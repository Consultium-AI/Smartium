import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`T1 en T2`}</Inline></SubHeading>
      <PBody text={`De meest gebruikte sequenties zijn **T1-gewogen** en **T2-gewogen** beelden.`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**T1-gewogen beelden** geven goede anatomische details. **Vet** heeft hoog signaal en **vloeistof** laag signaal.`}</Inline></li>
        <li><Inline>{`**T2-gewogen beelden** laten **vloeistof** juist helder zien. Dat is handig voor het aantonen van **oedeem** en **ontstekingen**. Vet heeft hier een intermediair tot hoog signaal.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 4. Verschil tussen T1 en T2`}</Inline></SubHeading>
      <DataTable rows={[["Sequentie", "Vloeistof", "Vet", "Belangrijk gebruik"], ["T1", "Donker", "Helder", "Anatomische details"], ["T2", "Helder", "Intermediair tot helder", "Oedeem en ontsteking"]]} />
      <PBody text={`**Aandachtsvraag:** Waarom is T2 handig bij ontsteking?
**Mini-antwoord:** Omdat vocht dan helder wordt afgebeeld, en ontsteking vaak gepaard gaat met meer vocht.`} />
    </div>
  )
}
