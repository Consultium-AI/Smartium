import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Prenatale zorg in Nederland`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Prenatale zorg is bedoeld om aandoeningen bij moeder of kind, of de risicofactoren daarvoor, vroeg op te sporen en te beïnvloeden. Goede prenatale zorg kan de uitkomst van de zwangerschap sterk verbeteren. Er wordt geschat dat intensieve prenatale zorg voor ongeveer 10 op de 1000 kinderen perinatale sterfte of een ernstig gehandicapt leven kan voorkomen.`}</Inline></p>
      <PBody text={`De zorg in Nederland is georganiseerd in **eerste, tweede en derde lijn**. Uniek is de positie van de zelfstandig werkende eerstelijns verloskundige en de professionele kraamzorg. Het systeem is gebaseerd op **risicoselectie**:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een gezonde zwangere start in de eerste lijn;`}</Inline></li>
        <li><Inline>{`bij laag risico blijft de zorg daar;`}</Inline></li>
        <li><Inline>{`bij verhoogd risico volgt begeleiding door of overdracht aan de gynaecoloog in de tweede of derde lijn.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 5. Organisatie van de zorg`}</Inline></SubHeading>
      <DataTable rows={[["Lijn", "Kenmerk", "Voorbeelden"], ["Eerste lijn", "laag risico", "verloskundige, verloskundig actieve huisarts"], ["Tweede lijn", "hoog risico", "gynaecoloog"], ["Derde lijn", "hoogste risico", "specialistische zorg"]]} />
    </div>
  )
}
