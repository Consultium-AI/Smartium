import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Radiologische diagnostiek bij nierziekten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Radiologische technieken zijn een aanvulling op de anamnese, het lichamelijk onderzoek en het bloed- en urineonderzoek. Vooral echografie van de nieren is door de eenvoud en beschikbaarheid een standaard onderdeel geworden van het onderzoek bij nierproblemen. Toch zijn er situaties waarin een andere techniek beter past. Dan is het belangrijk om te weten welk onderzoek je kiest voor welke vraag.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De kern is steeds: kies het minst belastende onderzoek dat de vraag goed kan beantwoorden.`}</Inline></p>
      <SubHeading><Inline>{`Welke techniek past bij welke vraag?`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 1. Radiologisch onderzoek en de vraag die je ermee beantwoordt"], ["---"], ["**Echografie**: bloed rond de nier na trauma, niercysten, aanwezigheid van twee nieren, pyelumdilatatie, of de blaas leeg is na mictie"], ["**CT nieren**: nierstenen, aard van een massa in de nier"], ["**MRI nieren**: nierarteriestenosen, volume van niercysten"], ["**Nierscintigrafie (MAG3 of DMSA)**: verhouding nierfunctie links versus rechts, urinelekkage na operatie"]]} />
      <SubHeading><Inline>{`Echografie: eerste, eenvoudige stap`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Echografie is een eenvoudig en laagdrempelig onderzoek. Het geeft vooral antwoord op basale, vaak ja/nee-vragen. Denk aan: zijn er één of twee nieren, is er sprake van pyelumdilatatie, zijn er cysten zichtbaar, is er bloed of vocht rondom de nier, en is de blaas leeg na mictie?`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** Waarom is echografie zo handig als eerste onderzoek?
**Mini-antwoord:** Omdat het snel, eenvoudig en weinig belastend is, en veel basisvragen al kan beantwoorden.`} />
      <p className="leading-relaxed"><Inline>{`Bij echografie gaat het dus vaak om het vaststellen van de aanwezigheid of afwezigheid van een afwijking. Het is minder geschikt voor ingewikkelde karakterisering van bijvoorbeeld een massa of voor het precies meten van bepaalde volumes.`}</Inline></p>
      <SubHeading><Inline>{`MRI: vooral bij ingewikkeldere vragen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij polycysteuze nierziekte kan het volume van de cysten belangrijk zijn. Dat volume is namelijk een voorspeller voor nierfunctieverlies. Als je zo’n complexere vraag wilt beantwoorden, is MRI geschikt. MRI kan dit soort structuren beter in beeld brengen dan een gewone echo.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ook bij het afbeelden van de arteria renalis wordt MRI met gadoliniumcontrast gebruikt. Het huidige gadoliniumcontrast is veilig, ook bij nierfalen. Röntgencontrast kan bij een eGFR onder 30 ml/min tijdelijke nierschade geven en wordt daarom liever vermeden. Daarom heeft MRI de voorkeur als er een verdenking is op een nierarteriestenose.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`MRI en angiografie zijn hierbij vooral diagnostisch. Als een nierarteriestenose behandeld moet worden, is dotteren nodig. Soms wordt direct gekozen voor angiografie, afhankelijk van hoe groot de kans is dat er daadwerkelijk een stenose aanwezig is.`}</Inline></p>
      <SubHeading><Inline>{`CT: snel en goed voor stenen en massa’s`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`CT is vooral nuttig bij nierstenen en bij het beoordelen van de aard van een massa in de nier. Zeker kalkhoudende stenen worden met CT veel beter opgespoord dan met echografie. Dat komt doordat zelfs kleine steentjes de röntgenstraling goed tegenhouden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een gewone röntgenfoto heeft hiervoor te weinig resolutie en te veel overprojectie. Als CT niet beschikbaar is, kan een röntgenfoto soms nog gebruikt worden, maar CT is duidelijk beter voor deze vraag.`}</Inline></p>
      <SubHeading><Inline>{`Nierscintigrafie: functie en urinelekkage`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Nierscintigrafie is heel geschikt om het parenchym en de uitscheidende functie van de nieren in kaart te brengen. Omdat de opname van tracer door de tubuli gekwantificeerd kan worden, kun je verschillen tussen de linker en rechter nier goed zien.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarnaast kun je de tracer volgen op weg naar buiten. Daardoor is nierscintigrafie ook bruikbaar om urinelekkage op te sporen, bijvoorbeeld na een operatie. Als er geen tracer op de plek van een vochtcollectie zit, wijst dat erop dat het geen urinelekkage is.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** Wanneer denk je aan nierscintigrafie?
**Mini-antwoord:** Als je de functie van beide nieren wilt vergelijken of urinelekkage wilt opsporen.`} />
    </div>
  )
}
