import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is kindermishandeling?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Kindermishandeling is elke vorm van voor de minderjarige bedreigende of gewelddadige interactie van fysieke, psychische of seksuele aard, die door ouders of andere personen in een afhankelijkheids- of onvrijheidsrelatie actief of passief wordt opgelegd, waardoor ernstige schade wordt berokkend of dreigt te worden berokkend aan het kind in de vorm van lichamelijk of psychisch letsel.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat klinkt ingewikkeld, maar de kern is eenvoudig: het gaat om gedrag of omstandigheden waardoor een kind schade oploopt of kan oplopen. Dat kan zichtbaar lichamelijk zijn, maar ook psychisch. Niet alleen slaan of verwonden valt eronder; ook verwaarlozing, geen aandacht geven of een kind blootstellen aan voor het kind ongewenste situaties hoort erbij.`}</Inline></p>
      <SubHeading><Inline>{`Vormen van kindermishandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Kindermishandeling kent meerdere vormen. Het is belangrijk om die als geheel te kennen, omdat signalen vaak niet één-op-één bewijzen wat er aan de hand is, maar wel aanleiding geven tot alertheid.`}</Inline></p>
      <PBody text={`**Tabel 1. Vormen van kindermishandeling**`} />
      <DataTable rows={[["Vorm", "Betekenis"], ["Lichamelijke mishandeling", "Het kind lichamelijk letsel toebrengen"], ["Lichamelijke verwaarlozing", "Niet voorzien in lichamelijke basisbehoeften"], ["Psychische mishandeling", "Het kind emotioneel beschadigen of bedreigen"], ["Psychische verwaarlozing", "Onvoldoende emotionele aandacht en steun"], ["Seksueel misbruik", "Seksuele handelingen of uitbuiting"], ["Getuige van huiselijk geweld", "Het kind ziet of ervaart geweld in het gezin"], ["Factititous disorder by proxy", "Klachten bij het kind nabootsen, veroorzaken of uitvergroten"]]} />
      <PBody text={`**Aandachtsvraag:** Is kindermishandeling altijd zichtbaar?
**Mini-antwoord:** Nee. Het kan ook gaan om psychische schade, verwaarlozing of situaties die niet direct opvallen.`} />
      <SubHeading><Inline>{`Factititous disorder by proxy`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Factititous disorder by proxy, ook wel Münchhausen by Proxy genoemd, is een psychiatrische stoornis én een vorm van fysieke en/of psychische mishandeling. Hierbij worden klachten bij het kind nagebootst, veroorzaakt, verzonnen of uitvergroot. Dat kan op verschillende manieren:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`klachten fabriceren;`}</Inline></li>
        <li><Inline>{`klachten direct opwekken;`}</Inline></li>
        <li><Inline>{`klachten verbaal verzinnen of aanpraten;`}</Inline></li>
        <li><Inline>{`bestaande klachten overdrijven.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Vaak is de moeder de pleger. De mortaliteit is hoog. Dit maakt duidelijk dat deze vorm van mishandeling zeer ernstig is.`}</Inline></p>
    </div>
  )
}
