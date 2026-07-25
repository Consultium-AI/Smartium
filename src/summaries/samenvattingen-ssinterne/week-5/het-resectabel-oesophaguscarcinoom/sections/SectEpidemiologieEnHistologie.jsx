import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Epidemiologie en histologie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De epidemiologie laat zien dat de incidentie stijgt, de prevalentie een vergelijkbare trend volgt en de overleving in de afgelopen decennia maar beperkt is verbeterd. De winst in overleving is dus klein gebleven, ondanks betere technieken en meer kennis.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Kernpunten epidemiologie`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Belangrijkste boodschap"], ["Incidentie", "Neemt toe"], ["Verklaring toename", "Vooral Barrett-oesofagus"], ["Type tumor dat toeneemt", "Vooral adenocarcinoom"], ["Prevalentie", "Volgt ongeveer dezelfde trend als de incidentie"], ["Overleving", "Slechts beperkt verbeterd"]]} />
      <p className="leading-relaxed"><Inline>{`Het oesophaguscarcinoom kent grofweg twee hoofdvormen: adenocarcinoom en plaveiselcelcarcinoom. Daarnaast bestaan er zeldzame vormen, zoals neuro-endocriene carcinomen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Histologische typen en bijbehorende oorzaken`}</Inline></SubHeading>
      <DataTable rows={[["Type", "Mogelijke oorzaken"], ["Adenocarcinoom", "Reflux, overgewicht, Barrett-oesofagus"], ["Plaveiselcelcarcinoom", "Roken, alcohol"]]} />
      <PBody text={`**Aandachtsvraag:** waarom is deze indeling belangrijk?
**Kort antwoord:** omdat de twee typen grotendeels een eigen ontstaanswijze hebben en dus ook een andere achtergrond kunnen hebben.`} />
    </div>
  )
}
