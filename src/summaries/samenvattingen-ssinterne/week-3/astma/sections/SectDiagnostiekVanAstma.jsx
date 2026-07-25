import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek van astma`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De diagnose astma stel je op basis van klachten, aanvullend onderzoek en het beeld dat past bij een reversibele luchtwegobstructie. De klachten die je actief uitvraagt zijn vooral:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`piepen;`}</Inline></li>
        <li><Inline>{`kortademigheid;`}</Inline></li>
        <li><Inline>{`hoesten;`}</Inline></li>
        <li><Inline>{`een drukkend gevoel op de borst.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarbij let je op het verloop: klachten die variëren in de tijd, verergeren bij prikkels of inspanning, of ’s nachts optreden, passen goed bij astma.`}</Inline></p>
      <SubHeading><Inline>{`Welke onderzoeken zijn belangrijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij verdenking op astma zijn vooral deze onderzoeken van belang:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`spirometrie;`}</Inline></li>
        <li><Inline>{`peakflowmeting;`}</Inline></li>
        <li><Inline>{`allergologisch onderzoek, bijvoorbeeld RAST;`}</Inline></li>
        <li><Inline>{`zo nodig huidtesten.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 1. Onderzoeken bij verdenking op astma`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoek", "Wat meet je?", "Waar let je op?"], ["Spirometrie", "FEV1, vitale capaciteit, Tiffeneau-index (FEV1/FVC)", "Obstructie die reversibel is"], ["Peakflowmeting", "Maximale uitademingssnelheid", "Variatie over de dag of tussen dagen"], ["RAST", "Specifiek IgE in serum", "Sensibilisatie voor allergenen"], ["Huidtest", "Allergische provocatie", "Reactie op een allergeen"]]} />
      <SubHeading><Inline>{`Spirometrie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij spirometrie meet je onder andere de FEV1, de vitale capaciteit en de Tiffeneau-index. Een verlaagde FEV1 en een verlaagde Tiffeneau-index passen bij obstructie. Voor astma is het belangrijk dat deze obstructie reversibel is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een normale spirometrie sluit astma niet uit. Dat komt doordat spirometrie een momentopname is, terwijl astma wisselend aanwezig kan zijn.`}</Inline></p>
      <SubHeading><Inline>{`Peakflowmeting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Omdat de luchtwegobstructie per dag kan wisselen, is peakflowmeting nuttig. Vooral ochtendmetingen en metingen bij klachten kunnen afwijkingen laten zien. Een variabiliteit van meer dan 20% op verschillende dagen past bij astma.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom meet je peakflow niet alleen één keer?
**Mini-antwoord:** Omdat astma wisselend is en de obstructie op een ander moment duidelijker kan zijn.`} />
      <SubHeading><Inline>{`Allergieonderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij astma kunnen allergenen een rol spelen. Denk bijvoorbeeld aan huisstofmijt, huisdieren of andere prikkelende stoffen in de omgeving. De RAST-test meet specifiek IgE in het serum. Deze test is alleen positief als er recent contact is geweest met een bepaald allergeen. Huidtesten zijn provocatietesten en kunnen ook gebruikt worden om allergieën te analyseren.`}</Inline></p>
    </div>
  )
}
