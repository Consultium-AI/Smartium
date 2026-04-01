export default function Sect03HoeOntstaatTachycardie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe ontstaat een tachycardie?</h2>
      <p>Er zijn drie fundamentele mechanismen die tachy-aritmieën kunnen veroorzaken.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Mechanismen van tachycardie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Mechanisme</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kern</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Typische voorbeelden</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">**Versnelde automaticiteit**</td>
              <td className="px-4 py-3 align-top">Een pacemakerfocus vuurt spontaan sneller dan de sinusknoop</td>
              <td className="px-4 py-3 align-top">Sinustachycardie, sommige vormen van atriale tachycardie, idioventriculaire ritmes</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">**Triggered activity**</td>
              <td className="px-4 py-3 align-top">Na- of natrillingen na een actiepotentiaal geven een nieuwe prikkel</td>
              <td className="px-4 py-3 align-top">{'EAD\u2019s bij lang QT, DAD\u2019s bij digoxine-intoxicatie'}</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">**Re-entry**</td>
              <td className="px-4 py-3 align-top">Een prikkel blijft rondcirkelen in een gesloten circuit</td>
              <td className="px-4 py-3 align-top">{'AVNRT, atriumflutter, AVRT, sommige VT\u2019s'}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Versnelde automaticiteit</h3>
      <p>
        Normaal is de <span className="font-semibold">sinusknoop</span> de snelste pacemaker van het hart. Bij versnelde automaticiteit gaan andere cellen, zoals latente pacemakers in de atria, AV-knoop of ventrikels, spontaan sneller vuren. Daardoor nemen zij het ritme over.
      </p>
      <p>
        Dit ontstaat door een versnelling van de <span className="font-semibold">fase 4-diastolische depolarisatie</span>. De membraanpotentiaal bereikt dan sneller de drempelwaarde. Dit zie je bijvoorbeeld bij <span className="font-semibold">metabole stress</span>,{' '}
        <span className="font-semibold">catecholaminen</span> zoals adrenaline, <span className="font-semibold">hypoxie</span>, <span className="font-semibold">ischemie</span> en{' '}
        <span className="font-semibold">elektrolytstoornissen</span> zoals hypokaliëmie.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Triggered activity</h3>
      <p>
        Bij triggered activity ontstaan oscillaties in het membraanpotentiaal <span className="font-semibold">tijdens of direct na</span> een actiepotentiaal. Als deze natrilling groot genoeg is, ontstaat een nieuwe, voortijdige actiepotentiaal.
      </p>
      <p>Er zijn twee varianten:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">EAD (Early After-Depolarization):</span> tijdens de repolarisatie, dus in fase 2 of 3. Dit past bij een verlengd actiepotentiaal en is het mechanisme achter <span className="font-semibold">torsades de pointes</span> bij het{' '}
          <span className="font-semibold">Lange QT-syndroom</span>.
        </li>
        <li>
          <span className="font-semibold">DAD (Delayed After-Depolarization):</span> ná de repolarisatie, in fase 4. Dit komt door intracellulaire{' '}
          <span className="font-semibold">Ca²⁺-overbelasting</span>. Een klassiek voorbeeld is <span className="font-semibold">digoxine-intoxicatie</span>.
        </li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Re-entry</h3>
      <p>Re-entry is de meest voorkomende oorzaak van paroxysmale tachycardieën. Een elektrische prikkel dooft niet uit, maar blijft rondcirkelen in een gesloten circuit.</p>
      <p>Voor re-entry zijn drie dingen nodig:</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <span className="font-semibold">Twee banen</span>
        </li>
        <li>
          <span className="font-semibold">Unidirectioneel blok</span>
        </li>
        <li>
          <span className="font-semibold">Vertraagde geleiding</span>
        </li>
      </ol>
      <p>
        De prikkel kan dan via de ene baan gaan, terwijl de andere baan inmiddels herstelt. Aan het einde kan de prikkel de andere kant op terugkeren en ontstaat een cirkelbeweging.
      </p>
      <p>
        <span className="font-semibold">Aandacht-vraag:</span> waarom helpt adenosine soms wél diagnostisch, maar niet altijd therapeutisch?{' '}
        <br />
        <span className="font-semibold">Mini-antwoord:</span> omdat adenosine de AV-knoop tijdelijk blokkeert; het stopt ritmes die daarvan afhankelijk zijn, maar maakt atriale activiteit soms alleen beter zichtbaar.
      </p>
    </div>
  )
}
