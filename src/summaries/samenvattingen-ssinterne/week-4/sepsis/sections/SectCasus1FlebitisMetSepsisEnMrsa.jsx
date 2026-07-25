import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casus 1: flebitis met sepsis en MRSA`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een patiënt met een venflon ontwikkelt koorts, koude rillingen, pijn, roodheid en zwelling van de arm rond de insteekplaats. Er komt pus uit de insteekopening. Dit past bij een infectie van de vene of de huid rondom de venflon, met sepsis als klinisch beeld.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij deze patiënt is er sprake van sepsis als er een klinisch focus van infectie is en daarnaast tekenen passen bij een systemische reactie. Koude rillingen kunnen passen bij bacteriëmie, maar bacteriëmie is niet nodig om sepsis te kunnen vaststellen.`}</Inline></p>
      <PBody text={`De meest waarschijnlijke verwekker van een flebitis door een venflon is **Staphylococcus aureus**. Huidinfecties worden vaak veroorzaakt door bacteriën die op de huid aanwezig zijn. Ook coagulase-negatieve stafylokokken kunnen op de huid voorkomen, maar die geven bij een immuuncompetente patiënt minder vaak een ernstig beeld. Gramnegatieve verwekkers zijn mogelijk bij langdurige ziekenhuisopname, maar bij flebitis zijn die minder waarschijnlijk.`} />
      <SubHeading><Inline>{`Tabel 3. Waarschijnlijke verwekkers bij flebitis/cellulitis rond een venflon`}</Inline></SubHeading>
      <DataTable rows={[["Waarschijnlijkheid", "Verwekker"], ["Hoogst", "*Staphylococcus aureus*"], ["Lager", "Coagulase-negatieve stafylokokken"], ["Lager", "Gramnegatieve darmbacteriën"], ["Zeldzaam", "*Pseudomonas aeruginosa*"]]} />
      <PBody text={`De empirische behandeling moet passen bij de meest waarschijnlijke verwekkers. In deze casus werd amoxicilline/clavulaanzuur gekozen, omdat dit *S. aureus* en ook Enterobacteriaceae dekt. Later bleek echter dat het om een **MRSA** ging.`} />
      <PBody text={`**Aandacht-vraagje:** Waarom werd de patiënt zieker ondanks antibiotica?
**Mini-antwoord:** Omdat er een abces aanwezig was en omdat het gekozen antibioticum niet werkzaam was tegen MRSA.`} />
      <SubHeading><Inline>{`MRSA`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`MRSA staat voor methicillineresistente *Staphylococcus aureus*. Deze bacterie is niet gevoelig voor bètalactam-antibiotica zoals penicillines, cefalosporines en carbapenems. Vancomycine is wel werkzaam en wordt intraveneus gegeven bij een systemische infectie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Nederland heeft relatief weinig MRSA, zowel in ziekenhuizen als in de gemeenschap. Daarom wordt MRSA niet standaard empirisch meegenomen bij een verdenking op *S. aureus*, tenzij er risicofactoren zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke risicofactoren voor MRSA zijn onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`opname in een buitenlands ziekenhuis`}</Inline></li>
        <li><Inline>{`contact met varkens, vleeskalveren of vleeskuikens`}</Inline></li>
        <li><Inline>{`dragerschap van MRSA`}</Inline></li>
        <li><Inline>{`contact met een MRSA-drager`}</Inline></li>
        <li><Inline>{`verblijf in een asielzoekerscentrum`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Patiënten met risicofactoren worden geïsoleerd verpleegd totdat screeningskweken negatief zijn. Daarbij worden kweken afgenomen van neus, keel, perineum, wonden en zo nodig urine of sputum. Bij positieve kweken blijft de isolatie bestaan.`}</Inline></p>
      <SubHeading><Inline>{`Gecompliceerde *S. aureus* bacteriëmie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij *S. aureus*-bacteriëmie is het belangrijk om te bepalen of het om een ongecompliceerde of gecompliceerde bacteriëmie gaat. Dat bepaalt de behandelduur. Een ongecompliceerde bacteriëmie mag alleen als aan meerdere voorwaarden is voldaan, zoals geen endocarditis, geen strooiharden, snelle koortsdaling en negatieve controlekweken.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Voorwaarden voor ongecompliceerde *S. aureus* bacteriëmie`}</Inline></SubHeading>
      <DataTable rows={[["Voorwaarde"], ["---"], ["Geen diabetes mellitus"], ["Geen immunosuppressie of afweerstoornis"], ["Bij kathetergerelateerde infectie: katheter verwijderd"], ["Geen kunstmateriaal in situ"], ["Geen purulente tromboflebitis"], ["Koortsvrij binnen 72 uur"], ["Geen aanwijzingen voor endocarditis"], ["Controlebloedkweek na 2-3 dagen negatief"], ["Geen aanwijzingen voor strooiharden"], ["Niet community acquired"]]} />
      <p className="leading-relaxed"><Inline>{`Als aan deze voorwaarden niet wordt voldaan, is de bacteriëmie gecompliceerd en is een langere behandeling nodig. In deze casus was er sprake van purulente tromboflebitis, dus van een gecompliceerde bacteriëmie. De patiënt werd daarom 6 weken intraveneus met vancomycine behandeld.`}</Inline></p>
    </div>
  )
}
