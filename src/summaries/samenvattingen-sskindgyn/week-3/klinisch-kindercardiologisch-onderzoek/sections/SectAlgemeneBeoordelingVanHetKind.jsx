import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Algemene beoordeling van het kind`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een kind met een mogelijke aangeboren hartafwijking begin je altijd breed: je kijkt niet alleen naar het hart zelf, maar naar het hele kind. Een hartafwijking kan namelijk invloed hebben op groei, ademhaling, kleur en vochtbalans. Juist die algemene indruk geeft vaak al belangrijke aanwijzingen.`}</Inline></p>
      <SubHeading><Inline>{`Groei`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een aangeboren hartafwijking kost vaak veel energie. Het hart en de bloedsomloop moeten harder werken, waardoor een kind minder goed kan groeien. Daarom zie je bij kinderen met een aangeboren hartafwijking vaak een achterblijvende gewichtstoename: ze zijn te licht voor hun leeftijd en lengte. Dit geldt vooral bij een links-rechts shunt, waarbij bloed van de linker naar de rechter harthelft stroomt.`}</Inline></p>
      <SubHeading><Inline>{`Vochtretentie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Oedemen zijn bij kindercardiologische patiënten zeldzaam. Als je ze toch ziet, zijn ze bij baby’s vaak zichtbaar als dikke ogen. Oedeem aan de enkels past minder goed bij baby’s en peuters. Vochtretentie kan zich ook uiten als een vergrote lever. Dat is dus een belangrijk teken om mee te nemen in de beoordeling.`}</Inline></p>
      <SubHeading><Inline>{`Ademhaling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij hartproblemen zie je vaak een verhoogde ademarbeid. Het kind ademt sneller en kan intrekkingen hebben, vooral subcostale en intercostale intrekkingen. Verhoogde ademarbeid zie je ook bij kinderen met verlaagde zuurstofsaturaties, vooral wanneer die daling acuut is en niet al langere tijd bestaat.`}</Inline></p>
      <SubHeading><Inline>{`Kleur`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Cyanose wordt verdeeld in centrale en perifere cyanose. De eenvoudigste manier om dit te onderscheiden is door naar de tong te kijken. Is de tong blauw, dan is er waarschijnlijk sprake van centrale cyanose. Ook lippen en nagels kunnen blauw verkleuren. Dit is onafhankelijk van de huidskleur van het kind.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waar kijk je het eerst naar bij cyanose?
**Mini-antwoord:** Naar de tong; een blauwe tong past bij centrale cyanose.`} />
      <SubHeading><Inline>{`Pulsaties en hartfrequentie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De pulsaties aan armen en benen moeten gelijk voelbaar zijn. Zwakke pulsaties aan zowel armen als benen wijzen op een verminderde cardiac output. Zijn de pulsaties alleen aan de benen zwak, dan past dat bij een vernauwing van de aortaboog, een coarctatio aortae.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Met de pulsaties kun je ook de hartfrequentie bepalen. Daarbij is het belangrijk de normale waarden per leeftijd te kennen. Tachycardie kan fysiologisch zijn, bijvoorbeeld bij inspanning of emotie, maar kan ook pathologisch zijn. Bradycardie zonder klachten kan juist fysiologisch zijn, bijvoorbeeld in diepe slaap.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Normale hartfrequentie per leeftijd`}</Inline></SubHeading>
      <DataTable rows={[["Leeftijd", "Wakker", "Slapend"], ["Neonatus (<28 dagen)", "100–165/min", "90–160/min"], ["Zuigeling (1 maand–1 jaar)", "100–150/min", "90–160/min"], ["Peuter (1–2 jaar)", "70–110/min", "80–120/min"], ["Kleuter (3–5 jaar)", "65–110/min", "65–100/min"], ["Schoolkind (6–11 jaar)", "60–95/min", "58–90/min"], ["Adolescent (12–15 jaar)", "55–85/min", "50–90/min"]]} />
    </div>
  )
}
