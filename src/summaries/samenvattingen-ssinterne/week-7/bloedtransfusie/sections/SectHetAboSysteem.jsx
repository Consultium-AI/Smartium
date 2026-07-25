import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het ABO-systeem`}</Inline></SubHeading>
      <PBody text={`Voor erytrocytentransfusies moet altijd rekening worden gehouden met het **ABO-systeem** en met de **Rhesusfactor**. Andere systemen, zoals Kell, MNSs, Kidd en Duffy, worden meestal pas belangrijk als er antistoffen tegen bestaan.`} />
      <p className="leading-relaxed"><Inline>{`Het ABO-systeem kent vier bloedgroepen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`A`}</Inline></li>
        <li><Inline>{`B`}</Inline></li>
        <li><Inline>{`AB`}</Inline></li>
        <li><Inline>{`O`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De bloedgroep bepaalt welke antigenen op de erytrocyten zitten en welke antistoffen in het plasma aanwezig zijn.`}</Inline></p>
      <DataTable rows={[["Tabel 3. ABO-bloedgroepen"], ["Bloedgroep", "Antigenen op erytrocyten", "Antistoffen in plasma"], ["A", "A", "anti-B"], ["B", "B", "anti-A"], ["AB", "A en B", "geen"], ["O", "geen", "anti-A en anti-B"]]} />
      <PBody text={`Bloedgroep O wordt de **universele donor** genoemd binnen het ABO-systeem. Dat komt doordat erytrocyten van bloedgroep O geen A- of B-antigenen dragen. Bij een erytrocytenconcentraat speelt het kleine beetje plasma in het product meestal geen grote rol.`} />
      <PBody text={`**Aandachtsvraag:** Waarom is ABO-incompatibiliteit zo gevaarlijk?
**Mini-antwoord:** Omdat de aanwezige antistoffen kunnen binden aan de donorerytrocyten en zo hemolyse veroorzaken.`} />
    </div>
  )
}
