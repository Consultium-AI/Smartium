import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Meten van nierfunctie`}</Inline></SubHeading>
      <SubHeading><Inline>{`Wat bedoelen we met nierfunctie?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Strikt genomen bestaat “de nierfunctie” niet als één enkele functie. De nier doet namelijk veel verschillende dingen. De belangrijkste taak is het maken van urine. Daarmee regelt de nier onder andere de water-zouthuishouding, de bloeddruk en het zuur-base-evenwicht.`}</Inline></p>
      <PBody text={`Als we in de praktijk over nierfunctie spreken, bedoelen we meestal de **glomerulaire filtratiesnelheid**, afgekort **GFR**. Dat is de hoeveelheid plasmawater die per tijdseenheid in alle glomeruli wordt gefilterd. Je kunt de GFR zien als de hoeveelheid “voorurine” die wordt gevormd. De eenheid is meestal **ml/min**, vaak gecorrigeerd voor lichaamsoppervlak.`} />
      <PBody text={`**Aandacht-vraag:** Welke stof kun je gebruiken om de GFR te schatten?
**Mini-antwoord:** Een stof moet klein zijn, vrij door het glomerulaire filter gaan, daarna niet meer worden teruggeresorbeerd of uitgescheiden door de tubuli, en alleen door de nier worden geklaard. Dan kun je via urine en bloed de klaring berekenen.`} />
      <SubHeading><Inline>{`GFR meten of schatten`}</Inline></SubHeading>
      <PBody text={`De GFR direct meten is lastig. Daarom wordt de nierfunctie in de praktijk meestal **geschat** met behulp van **serumcreatinine**. Creatinine wordt in constante hoeveelheden aangemaakt, wordt vrij gefiltreerd en nauwelijks teruggeresorbeerd of uitgescheiden. Daardoor is het een geschikte marker om de nierfunctie te benaderen.`} />
      <PBody text={`Alleen het serumcreatinine is echter niet nauwkeurig genoeg. Daarom worden formules gebruikt om de **estimated GFR (eGFR)** te berekenen. Veelgebruikte methoden zijn:`} />
      <DataTable rows={[["Tabel 1. Methoden om de nierfunctie te schatten"], ["MDRD-formule op basis van serumcreatinine"], ["CKD-EPI-formule op basis van serumcreatinine"], ["CKD-EPI-formule op basis van cystatine C"], ["24-uurs creatinineklaring"]]} />
      <PBody text={`In de praktijk wordt vaak de **CKD-EPI-formule op basis van creatinine** gebruikt.`} />
      <SubHeading><Inline>{`Valkuilen van creatinine-gebaseerde formules`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Deze formules hebben belangrijke beperkingen. Ze zijn vooral gevalideerd bij poliklinische patiënten en niet goed bij kinderen, zwangeren en ouderen boven de 70 jaar. Bij mensen met een goede nierfunctie wordt de nierfunctie vaak onderschat, vooral met de MDRD-formule. Daarnaast hangt serumcreatinine af van de creatinineproductie. Bij afwijkende spiermassa, zoals cachexie, of bij bijzonder dieet of creatinesuppletie kan de uitkomst dus vertekend zijn.`}</Inline></p>
    </div>
  )
}
