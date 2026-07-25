import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Therapieresistente hypertensie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Therapieresistente hypertensie betekent:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`systolisch >140 en/of diastolisch >90 mmHg,`}</Inline></li>
        <li><Inline>{`ondanks ten minste drie antihypertensiva,`}</Inline></li>
        <li><Inline>{`waaronder een diureticum.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Therapietrouw moet altijd eerst goed worden nagegaan. Soms blijkt dat een patiënt de medicatie niet of onregelmatig gebruikt. Het is dan zinvol om naar de apotheekgegevens te kijken of de inname te controleren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Therapietrouw kan worden belemmerd door praktische of perceptuele bezwaren:`}</Inline></p>
      <DataTable rows={[["Praktische bezwaren", "Perceptuele bezwaren"], ["Vergeten, past niet in routine", "Twijfel aan de noodzaak"], ["Geen tijd om medicatie op te halen", "Zorgen over medicatie"], ["Bijwerkingen", "Onbegrip over de aandoening"]]} />
      <p className="leading-relaxed"><Inline>{`Een eenvoudige manier om therapietrouw te verbeteren is het medicatieregime versimpelen. Hoe meer pillen en hoe vaker per dag, hoe lager de therapietrouw.`}</Inline></p>
      <SubHeading><Inline>{`Belangrijkste oorzaken van therapieresistente hypertensie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De meest voorkomende oorzaken zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`obstructief slaapapneusyndroom;`}</Inline></li>
        <li><Inline>{`primair hyperaldosteronisme;`}</Inline></li>
        <li><Inline>{`nierarteriestenose, bijvoorbeeld door fibromusculaire dysplasie.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Primair hyperaldosteronisme`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij primair hyperaldosteronisme wordt te veel aldosteron geproduceerd. Daardoor houdt het lichaam natrium vast en verliest het kalium. Klassiek denk je aan hypertensie met hypokaliëmie, maar hypokaliëmie ontbreekt vaak.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Screening met de aldosteron/renine-ratio is aangewezen bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hypertensie met spontane hypokaliëmie;`}</Inline></li>
        <li><Inline>{`hypertensie met hypokaliëmie na starten van een diureticum;`}</Inline></li>
        <li><Inline>{`therapieresistente hypertensie;`}</Inline></li>
        <li><Inline>{`hypertensie en een bijnierincidentaloom.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Na een positieve screening volgt bevestiging met een zoutbelastingstest. Daarna wordt vaak beeldvorming van de bijnieren gedaan en soms bijniervenesampling om te bepalen of er sprake is van eenzijdige overproductie. Bij een unilaterale oorzaak kan adrenalectomie curatief zijn. Als operatie niet wordt gekozen, kan behandeling met een mineralocorticoïdreceptorblokker zoals spironolacton of eplerenon passend zijn.`}</Inline></p>
    </div>
  )
}
