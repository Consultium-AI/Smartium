import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Mogelijke stappen in de verdere ontwikkeling`}</Inline></SubHeading>
      <SubHeading><Inline>{`Stap 1: huidige niertransplantatiepatiënten laten thuismeten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De eerste stap is dat ook de huidige niertransplantatiepatiënten gaan thuismeten met een SeCReT-box en thuismete-app. Dat levert betrouwbare metingen op, geeft de patiënt een centrale rol en maakt ondersteunend personeel vrij.`}</Inline></p>
      <SubHeading><Inline>{`Stap 2: bloedafname op afstand`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Daarna is regionale of thuisbloedafname een logische volgende stap. Dat kan bijvoorbeeld via:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`dried-blood-spot: een druppel bloed op filtreerpapier;`}</Inline></li>
        <li><Inline>{`point-of-care meting: directe meting thuis, zoals bij glucose.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bloedafname is belangrijk, want goede zorg op afstand vraagt niet alleen om thuismetingen, maar ook om laboratoriumgegevens. Als patiënten alsnog naar het ziekenhuis moeten komen voor bloedafname, wordt het voordeel kleiner.`}</Inline></p>
      <SubHeading><Inline>{`Stap 3: telemonitoring door een verpleegkundig specialist`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een volgende stap is dat een verpleegkundig specialist de alarmen afhandelt en patiëntenzorg verleent.`}</Inline></p>
      <SubHeading><Inline>{`Stap 4: een data monitoring centrum`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In een verder ontwikkeld model is er een data monitoring centrum, bemenst door een verpleegkundig specialist. De patiënt stuurt drie keer per jaar waarden door, zowel bloedwaarden als thuismetingen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De verpleegkundig specialist beoordeelt deze gegevens. Als er geen bijzonderheden zijn, volgt de volgende inleverdatum na vier maanden. Als er wel bijzonderheden zijn, worden die geprotocolleerd afgehandeld, bijvoorbeeld met recepten of antwoorden op eenvoudige vragen. Alleen als het nodig is, wordt een afspraak met de medisch specialist gemaakt, bijvoorbeeld bij verslechtering van de nierfunctie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarnaast blijft er één keer per jaar een standaardcontrole bij de medisch specialist. Die afspraak kan dan langer zijn, bijvoorbeeld 20 minuten in plaats van 10 minuten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het doel hiervan is duidelijk: dezelfde medisch inhoudelijke zorg leveren, maar dan efficiënter en meer op afstand.`}</Inline></p>
    </div>
  )
}
