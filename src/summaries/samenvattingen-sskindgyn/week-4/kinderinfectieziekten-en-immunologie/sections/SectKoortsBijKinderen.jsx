import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Koorts bij kinderen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Koorts is een van de meest voorkomende redenen waarom kinderen zich presenteren bij de huisarts of op de spoedeisende hulp. Het is belangrijk om koorts goed te definiëren, omdat niet elke verhoogde temperatuur hetzelfde betekent.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Koorts is een centraal bepaalde verhoging van de lichaamstemperatuur als reactie op stress of een stimulus. Als de temperatuur stijgt door onvoldoende afkoeling of door verhoogde inspanning, dan spreek je niet van koorts. In Nederland wordt meestal een temperatuur van 38,0 °C of hoger aangehouden als koorts.`}</Inline></p>
      <SubHeading><Inline>{`Koorts meten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Koorts kan op verschillende manieren gemeten worden: door ouders te laten voelen, sublinguaal, axillair, rectaal of auriculair. Rectaal meten geldt als gouden standaard. In de praktijk wordt vaak de oorthermometer gebruikt; die geeft meestal wel een bruikbare aanwijzing. Voelen aan het voorhoofd is veel minder betrouwbaar.`}</Inline></p>
      <PBody text={`**Aandacht-vraag:** waarom is rectaal meten het meest betrouwbaar?
**Mini-antwoord:** omdat dit in de richtlijnen als gouden standaard wordt gezien voor het vaststellen van koorts bij kinderen.`} />
      <SubHeading><Inline>{`Hoe ontstaat koorts?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij koorts spelen de hypothalamus en verschillende ontstekingsmediatoren een belangrijke rol. Het thermoregulatiecentrum ligt in de preoptische regio van de hypothalamus. Bij een infectie zorgen exogene pyrogenen voor activatie van leukocyten. Die maken cytokinen aan, zoals IL-1, IL-6, TNF-α en IFN-γ. Deze cytokinen zorgen via endotheelcellen in de hypothalamus voor productie van prostaglandinen. Daardoor wordt het thermoregulatiecentrum op een hogere temperatuur ingesteld.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het lichaam reageert daarop met warmteproductie, bijvoorbeeld door rillen. De spieren en lever gaan harder werken, waardoor de lichaamstemperatuur stijgt. Als de temperatuur boven de nieuwe ingestelde waarde komt, zorgen negatieve feedbackmechanismen voor afkoeling via huid en longen. Daardoor stijgt de centraal gereguleerde temperatuur normaal gesproken niet boven ongeveer 42 °C.`}</Inline></p>
      <SubHeading><Inline>{`Hoe vaak is koorts normaal?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij jonge kinderen komen infecties vaak voor. Tot de leeftijd van 18 maanden maken kinderen gemiddeld ongeveer 8 infecties door. Dat zijn meestal niet-ernstige, zelflimiterende virale infecties. Drie infecties in een paar wintermaanden is bij een kind van 1 jaar dus niet ongebruikelijk, zolang het om milde infecties gaat.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ernstige infecties, zoals pneumonie, sepsis of meningitis, zijn een ander verhaal. Als een kind meer dan één ernstige infectie doormaakt, moet je altijd denken aan mogelijk onderliggend lijden, zoals een immuundeficiëntie. Een goede anamnese is dan heel belangrijk.`}</Inline></p>
      <SubHeading><Inline>{`Oorzaken van koorts en het belang van vaccinatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een kind met koorts en een verkoudheid, maar dat verder vrolijk oogt, goed drinkt en plast en geen alarmsymptomen heeft, past meestal bij een virale bovenste luchtweginfectie. Ook als een kind niet gevaccineerd is, betekent dat niet automatisch dat een bacteriële infectie waarschijnlijker is. Door herd immunity is er nog steeds enige indirecte bescherming tegen ernstige bacteriële infecties. Wel is het kind zelf minder goed beschermd dan een gevaccineerd kind, dus ouders moeten goed geïnstrueerd worden om opnieuw contact op te nemen als het kind zieker wordt.`}</Inline></p>
      <SubHeading><Inline>{`Moet je standaard paracetamol geven?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Paracetamol of een ander antipyreticum, zoals een NSAID, hoeft niet standaard gegeven te worden bij koorts. Het geven van antipyretica vermindert de kans op koortsstuipen niet, ook niet als je het regelmatig verspreid over de dag geeft. Koorts onderdrukken kan zelfs nadelen hebben. Daarom geef je paracetamol vooral als een kind pijn of duidelijk discomfort heeft, bijvoorbeeld bij oorpijn of keelpijn.`}</Inline></p>
      <PBody text={`**Aandacht-vraag:** voorkom je koortsstuipen met paracetamol?
**Mini-antwoord:** nee, standaard antipyretica verminderen de kans op koortsstuipen niet.`} />
      <SubHeading><Inline>{`Wanneer moet een kind met koorts met spoed beoordeeld worden?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij koorts zijn er duidelijke alarmsignalen. Een kind moet met spoed beoordeeld worden bij onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ernstig ziek zijn of snelle achteruitgang;`}</Inline></li>
        <li><Inline>{`anders ziek zijn dan ouders gewend zijn;`}</Inline></li>
        <li><Inline>{`minder dan de helft drinken of een halve dag niet geplast hebben;`}</Inline></li>
        <li><Inline>{`sufheid;`}</Inline></li>
        <li><Inline>{`ontroostbaar huilen;`}</Inline></li>
        <li><Inline>{`aanhoudend braken;`}</Inline></li>
        <li><Inline>{`niet-wegdrukbare huiduitslag of veranderde huidskleur;`}</Inline></li>
        <li><Inline>{`veranderd ademhalingspatroon, kreunen of periodes van ademstilstand;`}</Inline></li>
        <li><Inline>{`aanwijzingen voor convulsies of trekkingen;`}</Inline></li>
        <li><Inline>{`leeftijd jonger dan 1 maand.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Binnen enkele uren moet een kind beoordeeld worden bij een leeftijd van 1 tot 3 maanden of bij verminderde weerstand/comorbiditeit. Op dezelfde dag is beoordeling nodig bij opnieuw oplopende koorts na een aantal koortsvrije dagen, bij onvoldoende indruk van de ernst van het ziektebeeld en ook wanneer het telefoongesprek een geïrriteerde of agressieve sfeer heeft.`}</Inline></p>
    </div>
  )
}
