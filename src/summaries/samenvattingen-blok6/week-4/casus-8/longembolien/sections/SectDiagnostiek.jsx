import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek`}</Inline></SubHeading>
      <SubHeading><Inline>{`Algemeen diagnostisch denken`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor de diagnostiek bestaan verschillende gevalideerde algoritmes om de kans op longembolie in te schatten. Het is belangrijk om binnen een team hetzelfde algoritme te gebruiken en daar vertrouwd mee te zijn.`}</Inline></p>
      <PBody text={`In deze stof worden vooral de **Wells-score**, de **YEARS-criteria** en de **D-dimeertest** genoemd. In sommige settings worden ook de Geneva-score en de PERC-criteria gebruikt.`} />
      <SubHeading><Inline>{`YEARS-criteria en D-dimeer`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De YEARS-benadering gebruikt drie klinische criteria:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`klinische tekenen van DVT;`}</Inline></li>
        <li><Inline>{`hemoptoë;`}</Inline></li>
        <li><Inline>{`longembolie als meest waarschijnlijke diagnose.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarbij wordt de D-dimeerwaarde gebruikt om te beslissen of beeldvorming nodig is.`}</Inline></p>
      <DataTable rows={[["Tabel 3. YEARS-algoritme"], ["0 YEARS-criteria en D-dimeer < 1000 ng/mL", "Longembolie uitgesloten"], ["0 YEARS-criteria en D-dimeer ≥ 1000 ng/mL", "CTPA verrichten"], ["≥1 YEARS-criterium en D-dimeer < 500 ng/mL", "Longembolie uitgesloten"], ["≥1 YEARS-criterium en D-dimeer ≥ 500 ng/mL", "CTPA verrichten"]]} />
      <p className="leading-relaxed"><Inline>{`CTPA staat voor computed tomography pulmonary angiography, oftewel een CT-angio van de longvaten.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom is de D-dimeer hier belangrijk?
**Mini-antwoord:** omdat een lage D-dimeer, samen met weinig klinische verdenking, een longembolie kan helpen uitsluiten.`} />
      <SubHeading><Inline>{`Andere gebruikte scores`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De Wells-score, Geneva-score en PERC-criteria zijn andere manieren om de kans op longembolie in te schatten. De kern is steeds hetzelfde: eerst de klinische waarschijnlijkheid bepalen, daarna zo nodig D-dimeer en beeldvorming inzetten.`}</Inline></p>
      <SubHeading><Inline>{`Beeldvorming: CTPA`}</Inline></SubHeading>
      <PBody text={`De meest gebruikte beeldvorming is **CTPA**. Daarbij wordt contrastmiddel via een infuus toegediend en daarna wordt een CT-scan gemaakt van de longarteriën. Zo kunnen vullingsdefecten worden gezien, wat past bij een longembolie.`} />
      <p className="leading-relaxed"><Inline>{`CTPA is zeer nauwkeurig en kan ook andere oorzaken van klachten laten zien, zoals pneumonie of een tumor.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Er zijn wel aandachtspunten:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`stralingsbelasting;`}</Inline></li>
        <li><Inline>{`mogelijke allergie voor jodiumhoudend contrast;`}</Inline></li>
        <li><Inline>{`voorzichtigheid bij nierfunctiestoornissen.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Alternatieven voor CTPA`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Soms zijn andere onderzoeken nuttig:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**perfusiescan**: een normale perfusiescan sluit een longembolie uit;`}</Inline></li>
        <li><Inline>{`**compressie-echo van de benen**: hiermee kan DVT worden aangetoond;`}</Inline></li>
        <li><Inline>{`**MRA**: minder gebruikt, omdat het minder beschikbaar en trager is.`}</Inline></li>
      </ul>
    </div>
  )
}
