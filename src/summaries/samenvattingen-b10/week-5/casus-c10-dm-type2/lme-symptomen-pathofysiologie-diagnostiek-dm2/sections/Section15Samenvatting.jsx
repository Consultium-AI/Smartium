import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Samenvatting`}</Inline></h3>
      <p><Inline>{`Bewegen is een belangrijk onderdeel van gezondheid en kan licht, matig of zwaar intensief zijn. Voor verschillende leeftijden gelden duidelijke beweegrichtlijnen, met extra aandacht voor spier-, bot- en balansoefeningen. DM2 ontstaat door insulineresistentie en uiteindelijk uitputting van de β-cellen, vaak op basis van een combinatie van aanleg en omgevingsfactoren. De klachten zijn vaak vaag en de diagnose wordt gesteld met plasmaglucosewaarden, terwijl HbA1c vooral belangrijk is voor monitoring. De behandeling bestaat uit leefstijlmaatregelen, gewichtsverlies en zo nodig medicatie of insuline, met streefwaarden die afhangen van leeftijd en kwetsbaarheid.`}</Inline></p>
    </div>
  )
}
