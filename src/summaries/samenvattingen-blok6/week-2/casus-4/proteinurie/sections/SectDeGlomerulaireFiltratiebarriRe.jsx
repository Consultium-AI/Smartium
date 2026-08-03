import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De glomerulaire filtratiebarrière`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De nier filtert bloed in de glomerulus. Dat is een heel selectief proces: water en kleine opgeloste stoffen moeten door kunnen, maar eiwitten en bloedcellen horen juist grotendeels in het bloed te blijven. Onder normale omstandigheden wordt er wel een kleine hoeveelheid eiwit gefiltreerd, ongeveer 1 tot 2 gram per dag, maar dat wordt in de proximale tubulus weer grotendeels teruggeresorbeerd. Daardoor bevat normale urine maar weinig eiwit.`}</Inline></p>
      <PBody text={`Naast gefiltreerd eiwit maakt het nefron zelf ook een eiwit aan: **uromoduline**, ook wel **Tamm-Horsfall-eiwit** genoemd. Dit wordt vooral in de lis van Henle geproduceerd. Uromoduline heeft allerlei functies, onder andere bescherming tegen bacteriën en invloed op ionkanalen zoals NCC. In normale urine is dit zelfs het meest voorkomende eiwit, ongeveer 50 tot 100 mg per dag. Albumine is in normale urine juist veel lager aanwezig, maximaal 20 tot 30 mg per dag.`} />
      <SubHeading><Inline>{`Opbouw van de filtratiebarrière`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De glomerulaire filtratiebarrière bestaat uit drie hoofdonderdelen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Glomerulaire endotheelcellen**`}</Inline></li>
        <li><Inline>{`**Glomerulaire basaalmembraan (GBM)**`}</Inline></li>
        <li><Inline>{`**Podocyten** met daartussen de filtratiespleten`}</Inline></li>
      </ul>
      <PBody text={`De endotheelcellen hebben fenestrae, dus openingen, waardoor water en kleine stoffen relatief makkelijk kunnen passeren. Toch is dit niet zomaar een open zeef: aan de buitenkant zit de **glycocalyx**, een laag met onder andere proteoglycanen en andere negatief geladen eiwitten. Die negatieve lading helpt om negatief geladen eiwitten, zoals albumine, tegen te houden.`} />
      <PBody text={`De **glomerulaire basaalmembraan** is vooral belangrijk voor de stevigheid van de barrière. Deze bestaat onder andere uit collageen type IV. In de nier gaat het om de combinatie van **alfa3, alfa4 en alfa5-ketens**. Dat is belangrijk, omdat deze samen een specifieke structuur vormen. In de huid komt collageen IV juist in een andere samenstelling voor. Tussen de podocyten zitten de **filtratieslits**, met daarin onder andere **nefrine**. Dit is de plek waar de grote selectiviteit van de barrière zit.`} />
      <SubHeading><Inline>{`Grootte- en ladingsselectiviteit`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De filtratiebarrière houdt stoffen op twee manieren tegen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Grootte-selectiviteit**: grote eiwitten passen simpelweg niet door de barrière.`}</Inline></li>
        <li><Inline>{`**Ladingsselectiviteit**: negatief geladen eiwitten worden afgestoten door de negatieve lading van de barrière.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Je kunt dit goed onthouden als: de barrière werkt zowel als een zeef als als een elektrische afstotingslaag.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** waarom is albumine zo belangrijk in deze context?
**Mini-antwoord:** albumine is het belangrijkste eiwit in het bloed en is negatief geladen, dus het is een goed voorbeeld van een eiwit dat normaal juist wordt tegengehouden.`} />
      <SubHeading><Inline>{`Tabel 1. Onderdelen van de glomerulaire filtratiebarrière`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Belangrijkste functie"], ["Endotheelcellen", "Doorlaatbaarheid voor water en kleine stoffen, met glycocalyx als extra selectieve laag"], ["GBM", "Structurele stevigheid en bijdrage aan selectiviteit"], ["Podocyten en filtratieslit", "Grote selectiviteit; tegenhouden van grote eiwitten"]]} />
      <SubHeading><Inline>{`Selectiviteitsverlies`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als de barrière beschadigd raakt, kan het patroon van proteïnurie iets zeggen over het type schade:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Bij verlies van **grootte-selectiviteit** komen vooral grote én kleine eiwitten in de urine.`}</Inline></li>
        <li><Inline>{`Bij verlies van **ladingsselectiviteit** komen vooral kleine, negatief geladen eiwitten zoals albumine in de urine.`}</Inline></li>
      </ul>
      <PBody text={`Daarom bestaat er een **selectiviteitsindex**: die vergelijkt een groot eiwit, zoals IgG, met albumine in de urine. Een hoge index past bij behoud van grootte-selectiviteit. Een lage index past bij verlies van ladingsselectiviteit.`} />
    </div>
  )
}
