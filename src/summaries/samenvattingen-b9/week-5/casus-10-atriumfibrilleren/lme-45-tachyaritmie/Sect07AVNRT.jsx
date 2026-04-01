export default function Sect07AVNRT() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">AVNRT</h2>
      <p>
        <span className="font-semibold">AVNRT</span> staat voor <span className="font-semibold">AV nodal re-entry tachycardie</span>. Dit is de meest voorkomende vorm van paroxysmale tachycardie bij patiënten met een structureel gezond hart.
      </p>
      <p>
        Het mechanisme is <span className="font-semibold">micro re-entry binnen de AV-knoop</span> zelf. Er zijn twee functionele banen:
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          een <span className="font-semibold">fast pathway</span>
        </li>
        <li>
          een <span className="font-semibold">slow pathway</span>
        </li>
      </ol>
      <p>
        Een <span className="font-semibold">PAC</span> of boezemextrasystole kan de snelle baan nog refractair aantreffen, waardoor de prikkel gedwongen via de langzame baan loopt. Wanneer de snelle baan ondertussen hersteld is, kan de prikkel terug omhoog en ontstaat de cirkel.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Kliniek</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          komt vaker voor bij <span className="font-semibold">jonge vrouwen</span>
        </li>
        <li>begin vaak op jonge leeftijd, maar kan op elke leeftijd optreden</li>
        <li>
          klachten beginnen en stoppen <span className="font-semibold">abrupt</span>: het “<span className="font-semibold">on/off</span>”-fenomeen
        </li>
        <li>
          patiënten voelen soms <span className="font-semibold">bonzen in de hals</span>: het <span className="font-semibold">frog sign</span>
        </li>
        <li>
          soms is er <span className="font-semibold">polyurie</span> na de aanval
        </li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">ECG</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          smal en snel, meestal <span className="font-semibold">140–220/min</span>
        </li>
        <li>regelmatige tachycardie</li>
        <li>
          P-top vaak <span className="font-semibold">verdwenen</span> of samenvallend met het QRS
        </li>
        <li>
          soms een <span className="font-semibold">pseudo r’</span> in V1 aan het einde van het QRS
        </li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Behandeling</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">vagale manoeuvres</span> zoals Valsalva, carotismassage of gezicht in koud water
        </li>
        <li>
          <span className="font-semibold">adenosine</span> is eerste keus en blokkeert de AV-knoop kortdurend
        </li>
        <li>
          alternatief: <span className="font-semibold">verapamil</span> of <span className="font-semibold">diltiazem</span>
        </li>
        <li>
          <span className="font-semibold">lange termijn</span>: ablatietherapie van de <span className="font-semibold">slow pathway</span>, met een succespercentage boven <span className="font-semibold">95%</span>
        </li>
      </ul>
    </div>
  )
}
