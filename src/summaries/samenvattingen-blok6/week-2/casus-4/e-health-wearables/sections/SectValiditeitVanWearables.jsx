import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Validiteit van wearables`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Wearables kunnen veel verschillende signalen van het menselijk lichaam meten, maar de centrale vraag is: hoe goed doen ze dat eigenlijk? Met andere woorden: hoe accuraat en valide zijn deze metingen?`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Er wordt veel onderzoek gedaan naar de validiteit van wearables. Tegelijk is dat lastig, omdat sensoren voortdurend worden geüpdatet. Onderzoek van vorig jaar kan dus al snel verouderd zijn. Dat betekent dat je bij de beoordeling van wearables altijd moet nadenken over de actualiteit van de gebruikte technologie.`}</Inline></p>
      <SubHeading><Inline>{`Hartslag meten met licht: fotoplethysmografie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een belangrijk voorbeeld is het meten van de hartslag. Dat gebeurt vaak met behulp van licht. De basis is als volgt: door de hartslag verandert het bloedvolume in een arterie onder de wearable. Die volumeverandering kan worden gedetecteerd met licht dat door de huid heen wordt gestuurd.`}</Inline></p>
      <PBody text={`Een deel van dat licht wordt geabsorbeerd en een deel wordt gereflecteerd door het bloed en de omliggende weefsels. De sensor meet hoeveel licht terugkomt. Dit heet **fotoplethysmografie (PPG)**. Plethysmografie betekent het meten van volumeveranderingen; omdat hier licht wordt gebruikt, heet het fotoplethysmografie.`} />
      <p className="leading-relaxed"><Inline>{`PPG is dus een techniek waarmee je veranderingen in bloedvolume kunt volgen. Daarmee kun je onder andere informatie krijgen over:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het ritme;`}</Inline></li>
        <li><Inline>{`hart- en bloedvaten;`}</Inline></li>
        <li><Inline>{`de ademhalingsfrequentie.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 1. Wat kun je met PPG meten?`}</Inline></SubHeading>
      <DataTable rows={[["Meting", "Uitleg"], ["Ritme", "Veranderingen in het patroon van de hartslag"], ["Hart- en bloedvaten", "Informatie over cardiovasculaire activiteit"], ["Ademhalingsfrequentie", "Afleiding van het ademhalingspatroon uit het signaal"]]} />
      <PBody text={`**Aandacht-vraag:** Hoe kan een wearable je hartslag meten zonder direct in het lichaam te kijken?
**Mini-antwoord:** Door met licht veranderingen in bloedvolume onder de huid te meten.`} />
    </div>
  )
}
