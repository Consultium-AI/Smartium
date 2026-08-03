import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hyponatriëmie, hypokaliëmie en metabole alkalose door lisdiuretica`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een patiënt met hartfalen en toegenomen gebruik van lisdiuretica zie je vaak een combinatie van hyponatriëmie, hypokaliëmie en metabole alkalose. Dit past bij het effect van lisdiuretica op de nier.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Lisdiuretica blokkeren NKCC2 in de lis van Henle. Daardoor wordt de opbouw van de osmotische gradiënt in het niermerg verminderd. Normaal is die gradiënt nodig om water terug te kunnen opnemen, vooral onder invloed van ADH. Als die gradiënt wegvalt, kan de nier water minder goed vasthouden. Dat draagt bij aan volumeverlies.`}</Inline></p>
      <SubHeading><Inline>{`Hyponatriëmie en osmolaliteit`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij hyponatriëmie is de serumosmolaliteit vaak verlaagd. Als dit snel ontstaat, stroomt water de cellen in. In de hersenen kan dat zwelling geven. Als het langer bestaat, passen hersencellen zich deels aan aan de lagere osmolaliteit.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij hartfalen is de situatie vaak complex. Door een verlaagd effectief circulerend volume kan het RAAS-systeem worden geactiveerd en kan ADH worden afgegeven, ook al is de osmolaliteit laag. Daarnaast kunnen stress en pijn ook ADH-afgifte stimuleren. De hyponatriëmie kan dus al langer bestaan en door de huidige situatie verder zijn beïnvloed.`}</Inline></p>
      <SubHeading><Inline>{`Waarom ontstaat hypokaliëmie?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Lisdiuretica zorgen ervoor dat er meer natrium distaal in de nier terechtkomt. Vooral in de verzamelbuis leidt dat, via ENaC, tot meer kaliumuitscheiding. Hiervoor is aldosteron nodig, en bij hartfalen is het RAAS vaak juist geactiveerd. Toch is de aldosteronwerking niet altijd maximaal, bijvoorbeeld door medicatie of doordat de patiënt de medicatie niet volledig gebruikt. Daardoor kan toch hypokaliëmie ontstaan.`}</Inline></p>
      <SubHeading><Inline>{`Waarom ontstaat metabole alkalose?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De alkalose hangt samen met volumedepletie en met veranderingen in de nier. Door meer natriumresorptie in verschillende nefronsegmenten wordt ook meer H+ uitgescheiden. Een belangrijk mechanisme is het Cl-HCO3- uitwisselingskanaal pendrin in de verzamelbuis. Bij langdurig diureticagebruik ontstaat vaak een chloortekort, waardoor minder bicarbonaat kan worden uitgescheiden. Daardoor blijft bicarbonaat relatief achter en ontstaat metabole alkalose.`}</Inline></p>
      <PBody text={`Dit wordt in de kliniek ook wel een **contractie-alkalose** genoemd: door volumeverlies verandert de samenstelling van het extracellulaire vocht en ontstaat een alkalische toestand.`} />
      <SubHeading><Inline>{`Magnesium speelt ook mee`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Lisdiuretica verhogen ook de uitscheiding van magnesium. Daardoor kan hypomagnesiëmie ontstaan, zowel in het serum als intracellulair. Dat kan de hypokaliëmie verergeren. Ook protonpompremmers kunnen bijdragen aan een laag magnesium, al staat dat niet altijd expliciet vermeld.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Typische gevolgen van lisdiuretica`}</Inline></SubHeading>
      <DataTable rows={[["Verandering", "Gevolg"], ["Blokkade van NKCC2", "Minder opbouw van medullaire gradiënt"], ["Meer distale natriumaanvoer", "Meer kaliumuitscheiding"], ["Chloorverlies", "Minder bicarbonaatuitscheiding via pendrin"], ["Volumedepletie", "Stimulatie van RAAS en soms ADH"], ["Meer magnesiumverlies", "Kans op hypomagnesiëmie en verergering van hypokaliëmie"]]} />
      <SubHeading><Inline>{`Aandacht-vraagje`}</Inline></SubHeading>
      <PBody text={`**Waarom kan een lisdiureticum zowel natrium als kalium beïnvloeden?**
Omdat het de zout- en waterhuishouding in de nier verandert, waardoor downstream meer natrium aankomt en kalium makkelijker wordt uitgescheiden.`} />
    </div>
  )
}
