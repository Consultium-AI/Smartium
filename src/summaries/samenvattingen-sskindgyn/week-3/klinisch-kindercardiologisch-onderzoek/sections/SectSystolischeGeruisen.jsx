import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Systolische geruisen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Systolische geruisen komen vaker voor dan diastolische geruisen. Ze ontstaan bij shunts en bij stenosen van semilunaire kleppen en slagaders. De plaats van het geruis geeft vaak al een sterke aanwijzing voor de diagnose.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Locatie van systolische geruisen en mogelijke oorzaak`}</Inline></SubHeading>
      <DataTable rows={[["Auscultatieplek", "Mogelijke oorzaak", "Kenmerk"], ["Rechts hoog sternal, met voortgeleiding naar de carotiden", "Aortastenose", "Voortgeleiding naar de halsvaten is typisch"], ["Alleen tussen de schouderbladen, met zwakke voet- of beenpulsaties", "Coarctatio aortae", "Denk aan vernauwing van de aortaboog"], ["Links hoog sternal, met voortgeleiding over de borstkas en vaak ook naar de rug", "Pulmonalisklepstenose", "Kan ook alleen naar rechts of links uitstralen bij pulmonalistakstenose"], ["Verschillende plekken op de thorax", "Aortopulmonale collateralen", "Meerdere geruisen mogelijk"], ["Links in de anterieure axillaire lijn", "Mitralisklepstenose", "Geruis wordt met de bloedstroom naar de longvenen voortgeleid"], ["Rechts laag sternal, soms naar de lever", "Tricuspidalisinsufficiëntie", "Soms geen geruis als de druk in de rechterkamer niet verhoogd is"], ["4e intercostale ruimte, punctum maximum", "Ventrikelseptumdefect", "Klein defect: luider; groot defect: zachter"]]} />
      <p className="leading-relaxed"><Inline>{`Bij aortastenose hoor je het systolische geruis rechts hoog sternal, met voortgeleiding naar de carotiden. Dat voortgeleiden is een belangrijk kenmerk. Soms hoor je het ook tussen de schouderbladen, maar dan zachter.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als je een systolisch geruis alleen tussen de schouderbladen hoort, zeker in combinatie met zwakke pulsaties aan de benen, moet je denken aan coarctatio aortae.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een systolisch geruis links hoog sternal dat breed uitstraalt, ook naar de rug, past typisch bij pulmonalisklepstenose. Straalt het geruis alleen naar rechts of links uit, dan kan het gaan om pulmonalistakstenose.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij aortopulmonale collateralen kunnen op meerdere plaatsen op de thorax verschillende geruisen hoorbaar zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een geruis dat het luidst is in de anterieure axillaire lijn links past bij mitralisklepstenose. Dat komt doordat het geruis met de bloedstroom naar de longvenen wordt voortgeleid. In situs solitus liggen de linker longvenen dichter bij de borstkas dan de rechter, waardoor het links luider kan zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een geruis rechts laag sternal, soms met voortgeleiding naar de lever, kan passen bij tricuspidalisinsufficiëntie. Als de druk in de rechterkamer niet verhoogd is, hoor je bij deze afwijking vaak geen geruis.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een systolisch geruis met punctum maximum in de 4e intercostale ruimte past vaak bij een ventrikelseptumdefect. Daarbij geldt: hoe kleiner het gat, hoe luider het geruis, omdat het bloed er met meer kracht doorheen wordt geperst. Bij heel grote defecten kan het geruis juist zacht zijn.`}</Inline></p>
      <SubHeading><Inline>{`Persisterende ductus arteriosus Botalli`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een persisterende ductus arteriosus Botalli is het geruis bij baby’s vaak alleen systolisch, omdat het diastolische drukverschil nog niet groot genoeg is om een diastolisch geruis te veroorzaken. Als de pulmonale vaatweerstand daalt, wordt ook een diastolische component hoorbaar. Dan ontstaat het bekende machinegeruis.`}</Inline></p>
    </div>
  )
}
