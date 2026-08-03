import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Glomerulaire filtratie: het basisprincipe`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Glomerulaire filtratie is in de kern een vorm van filtratie op basis van een drukverschil. In de glomerulus wordt water met opgeloste stoffen uit het bloed geperst, terwijl grotere bestanddelen zoals eiwitten en bloedcellen normaal in het bloed blijven. Dat filtratieproces vindt plaats over de glomerulaire filtratiebarrière, die bestaat uit de capillaire wand, het glomerulaire basaalmembraan en de podocyten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het belangrijkste idee is dat er twee tegengestelde drukken meespelen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een druk die naar buiten werkt en filtratie bevordert`}</Inline></li>
        <li><Inline>{`een druk die naar binnen werkt en filtratie tegenwerkt`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De naar buiten gerichte druk is de glomerulaire capillaire druk. De naar binnen gerichte druk is de colloïd-osmotische druk van het plasma, die vooral wordt bepaald door de eiwitten in het bloed. Zolang de naar buiten gerichte druk groter is dan de tegenwerkende druk, blijft filtratie optreden.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. De belangrijkste drukken bij glomerulaire filtratie`}</Inline></SubHeading>
      <DataTable rows={[["Druk", "Richting", "Effect op filtratie"], ["Glomerulaire capillaire druk", "Naar buiten", "Bevordert filtratie"], ["Colloïd-osmotische druk", "Naar binnen", "Remt filtratie"]]} />
      <p className="leading-relaxed"><Inline>{`Een belangrijk punt is dat vooral de glomerulaire capillaire druk gereguleerd kan worden. Die druk hangt af van de weerstand in de bloedvaten vóór en na de glomerulus. Daardoor kan de nier de filtratie beïnvloeden door de aanvoer naar de glomerulus of de afvoer ervan te veranderen.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** wat gebeurt er als de druk in de glomerulaire capillairen stijgt?
**Mini-antwoord:** dan neemt de GFR toe, zolang de druk niet zo hoog wordt dat de doorstroming volledig wordt belemmerd.`} />
    </div>
  )
}
