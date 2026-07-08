import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Medicatie en zwangerschap`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Niet alle medicatie is veilig in de zwangerschap of tijdens de lactatie. Daarom is het belangrijk om medicatie altijd te controleren. Daarvoor kan Lareb worden gebruikt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een belangrijk voorbeeld is methotrexaat. Dit middel is teratogeen bij de mens. Het kan intra-uteriene groeivertraging en afwijkingen veroorzaken aan ledematen, schedel, aangezicht en centraal zenuwstelsel. Ook kan er sprake zijn van verminderde intelligentie. De exacte risicoperiode en veilige dosis zijn niet bekend. Daarom is methotrexaat gecontra-indiceerd gedurende de hele zwangerschap.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Kernpunten bij medicatiebeoordeling`}</Inline></SubHeading>
      <DataTable rows={[["Vraag", "Wat wil je weten?"], ["Is de medicatie veilig?", "Kan het middel worden voortgezet in zwangerschap of lactatie?"], ["Moet de medicatie worden aangepast?", "Soms is een alternatief nodig"], ["Wat als omzetten niet kan?", "Dan moet het beleid daarop worden afgestemd"], ["Waar vind je informatie?", "Via Lareb"]]} />
    </div>
  )
}
