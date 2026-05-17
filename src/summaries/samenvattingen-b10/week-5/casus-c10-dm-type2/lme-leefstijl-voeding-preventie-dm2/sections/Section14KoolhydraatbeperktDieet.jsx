import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Koolhydraatbeperkt dieet`}</Inline></h3>
      <p><Inline>{`Een koolhydraatbeperkt dieet is populair bij mensen met diabetes. Er zijn grofweg twee vormen:`}</Inline></p>
      <p><Inline>{`**matig koolhydraatbeperkt dieet**: minder dan 130 gram koolhydraten per dag of minder dan 26 energieprocent;`}</Inline></p>
      <p><Inline>{`**streng koolhydraatbeperkt dieet / ketogeen dieet**: minder dan 50 gram koolhydraten per dag of minder dan 10 energieprocent.`}</Inline></p>
      <p><Inline>{`Als koolhydraten sterk worden beperkt, blijft vaak een voeding over met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`groenten;`}</Inline></li>
        <li><Inline>{`eiwitrijke producten zoals vlees, vis, kaas, eieren, noten en een beetje zuivel;`}</Inline></li>
        <li><Inline>{`vetrijke producten zoals olie en boter.`}</Inline></li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Mogelijke tekorten`}</Inline></h3>
      <p><Inline>{`Bij een streng koolhydraatbeperkt dieet kunnen op lange termijn tekorten ontstaan aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`vezels;`}</Inline></li>
        <li><Inline>{`vitamine D;`}</Inline></li>
        <li><Inline>{`vitamine B2;`}</Inline></li>
        <li><Inline>{`vitamine B12;`}</Inline></li>
        <li><Inline>{`jodium;`}</Inline></li>
        <li><Inline>{`calcium;`}</Inline></li>
        <li><Inline>{`zink;`}</Inline></li>
        <li><Inline>{`selenium.`}</Inline></li>
      </ul>
      <p><Inline>{`Daarom is het belangrijk om zoveel mogelijk plantaardige producten te gebruiken in plaats van dierlijke, en de vetkwaliteit zo gunstig mogelijk te houden.`}</Inline></p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Effecten bij type 2 diabetes`}</Inline></h3>
      <p><Inline>{`Op korte termijn kan een koolhydraatbeperkt dieet gunstig zijn voor:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`gewicht;`}</Inline></li>
        <li><Inline>{`glykemische controle;`}</Inline></li>
        <li><Inline>{`HbA1c;`}</Inline></li>
        <li><Inline>{`cardiovasculaire risicofactoren.`}</Inline></li>
      </ul>
      <p><Inline>{`Er is op korte termijn geen duidelijk verschil in diabetesremissie of bijwerkingen vergeleken met controlediëten, meestal laagvetdiëten. Op lange termijn verdwijnen de verschillen grotendeels weer. Daarom hangt de keuze sterk af van de voorkeur en motivatie van de patiënt.`}</Inline></p>
    </div>
  )
}
