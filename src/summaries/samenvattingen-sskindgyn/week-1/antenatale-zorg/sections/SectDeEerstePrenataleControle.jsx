import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De eerste prenatale controle`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij het eerste bezoek worden verschillende onderdelen uitgevraagd en onderzocht. Het doel is om de zwangerschap goed te dateren, risico’s in kaart te brengen en een plan voor de verdere zorg te maken.`}</Inline></p>
      <SubHeading><Inline>{`Anamnese`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De anamnese begint met de termijn: wanneer was de eerste dag van de laatste menstruatie, was die menstruatie normaal, en hoe lang en regelmatig is de cyclus? Ook vraag je naar recent gebruik van orale anticonceptie en wanneer daarmee is gestopt. Verder vraag je wanneer de zwangerschapstest is gedaan en wanneer die positief werd, zodat je dit kunt relateren aan de laatste normale cyclus.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarna volgt de obstetrische anamnese. Van elke eerdere zwangerschap noteer je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`aantal zwangerschappen`}</Inline></li>
        <li><Inline>{`verloop van bevallingen`}</Inline></li>
        <li><Inline>{`miskramen en abortussen`}</Inline></li>
        <li><Inline>{`mola’s`}</Inline></li>
        <li><Inline>{`extra-uteriene zwangerschappen`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij miskramen of abortussen vraag je welke behandeling is gebruikt: medicamenteus, chirurgisch of expectatief. Bij een extra-uteriene zwangerschap vraag je naar de behandeling, bijvoorbeeld chirurgisch, medicamenteus met methotrexaat of expectatief.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij eerdere bevallingen beschrijf je de modus partus: vaginaal spontaan of met kunstverlossing, sectio caesarea, bloedverlies, placenta-afgang, pijnstilling, verloop van het kraambed en de toestand van het kind. Ook ligging, gewicht, APGAR en voeding van een eerder kind zijn relevant.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarnaast neem je de algemene anamnese af: leeftijd, ziekten, operaties, transfusies, allergieën, hart-, schildklier-, long-, nier- en stollingsproblemen, urineweginfecties, medicatie, intoxicaties zoals alcohol, roken en drugs, vaccinaties, risico’s op soa’s, seksueel misbruik, etnische achtergrond, taal, dieet en sociaal-economische omstandigheden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De familie-anamnese richt zich op congenitale afwijkingen, diabetes mellitus, hartafwijkingen, schildklierproblemen, stollingsstoornissen en hemoglobinopathieën.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Tot slot vraag je naar de actuele zwangerschap: is die gewenst, zijn er klachten, zijn er al problemen voorzien, en wat zijn de wensen en behoeften van de zwangere ten aanzien van zwangerschap, baring en kraambed?`}</Inline></p>
      <SubHeading><Inline>{`Medicatie, werk en leefstijl`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Medicatie moet opnieuw worden nagegaan, omdat niet elk geneesmiddel in de zwangerschap doorgebruikt mag of moet worden. Voor betrouwbare informatie is de RIVM-uitgave over geneesmiddelen, zwangerschap en borstvoeding belangrijk.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ook werk en leefstijl verdienen aandacht. De werkgever moet werkplekken toetsen op onveilige situaties via de risico-inventarisatie en -evaluatie. In de zwangerschap moet extra gelet worden op toxische stoffen, biologische agentia en lichamelijk belastend werk. De zwangere kan hierover een preventief consult bij de bedrijfsarts aanvragen. De werkgever moet de arbeidsomstandigheden aanpassen en extra rusttijden mogelijk maken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Verder wordt het belang van een gezonde leefstijl benadrukt: geen alcohol, tabak of drugs. Ook preventie van besmetting met Toxoplasma, Listeria en Q-koorts hoort erbij, bijvoorbeeld door geen rauw vlees te eten, geen rauwmelkse kazen te nemen, contact met kattenfeces te vermijden en niet met blote handen in de tuin te werken.`}</Inline></p>
    </div>
  )
}
