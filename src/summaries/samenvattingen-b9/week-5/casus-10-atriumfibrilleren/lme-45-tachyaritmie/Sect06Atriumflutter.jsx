export default function Sect06Atriumflutter() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Atriumflutter</h2>
      <p>
        <span className="font-semibold">Atriumflutter</span> is een klassieke “valkuil” op de SEH. Omdat de ventrikels vaak precies de helft van de atriale slagen volgen, kan het lijken op een sinusritme of AVNRT. Juist daarom is het onderliggende patroon herkennen belangrijk.
      </p>
      <p>
        Flutter wordt veroorzaakt door een <span className="font-semibold">macro re-entry circuit</span> in het atriale weefsel.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Typische flutter</h3>
      <p>
        Bij typische flutter draait de prikkel meestal een grote ronde in het rechteratrium, vaak <span className="font-semibold">tegen de klok in</span>. Het circuit loopt rond de tricuspidalisklep en gebruikt de{' '}
        <span className="font-semibold">cavotricuspide isthmus</span> als kritieke doorgang.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Atypische flutter</h3>
      <p>Atypische flutter bestaat uit re-entrycirkels elders in de atria, bijvoorbeeld rond littekens na operaties of ablatie.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Epidemiologie en kliniek</h3>
      <p>Atriumflutter komt zelden voor bij een volledig gezond hart en zie je vaak bij oudere patiënten met comorbiditeit. Geassocieerd zijn onder andere:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">COPD</span>
        </li>
        <li>
          <span className="font-semibold">longembolie</span>
        </li>
        <li>
          <span className="font-semibold">hartfalen</span>
        </li>
        <li>
          <span className="font-semibold">kleplijden</span>
        </li>
        <li>
          <span className="font-semibold">na hartchirurgie</span>
        </li>
      </ul>
      <p>Atriumflutter en atriumfibrilleren zijn “buren”; patiënten kunnen wisselen tussen beide ritmes of uiteindelijk AF ontwikkelen.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">ECG-kenmerken</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>zaagtandpatroon van fluttergolven</li>
        <li>
          bij typische flutter: negatief in <span className="font-semibold">II, III, aVF</span> en positief in <span className="font-semibold">V1</span>
        </li>
        <li>
          atriale frequentie meestal rond <span className="font-semibold">300/min</span>
        </li>
        <li>AV-knoop kan dit niet bijbenen en laat slechts een deel door</li>
      </ul>
      <p>
        Meest voorkomend is <span className="font-semibold">2:1-blok</span>, waardoor de ventrikelfrequentie strak <span className="font-semibold">150/min</span> is. Bij een{' '}
        <span className="font-semibold">regelmatige tachycardie van exact 150/min</span> moet je dus direct aan flutter denken. Soms is er een variabel blok, zoals <span className="font-semibold">3:1</span> of{' '}
        <span className="font-semibold">4:1</span>, waardoor de pols onregelmatig wordt.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Behandeling</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Instabiel:</span> gesynchroniseerde elektrische cardioversie, vaak al effectief bij lage energie (<span className="font-semibold">50–100 J</span>)
        </li>
        <li>
          <span className="font-semibold">Stabiel:</span> rate control met <span className="font-semibold">beta-blokkers</span> of <span className="font-semibold">verapamil</span>
        </li>
        <li>
          <span className="font-semibold">Adenosine:</span> stopt flutter niet, maar maakt de zaagtanden beter zichtbaar door tijdelijk AV-blok
        </li>
        <li>
          <span className="font-semibold">Lange termijn:</span> antistolling volgens <span className="font-semibold">CHA2DS2-VASc</span>, en bij flutter langer dan 48 uur is vóór cardioversie{' '}
          <span className="font-semibold">3 weken antistolling</span> nodig
        </li>
        <li>
          <span className="font-semibold">Curatief:</span> radiofrequente ablatie van de <span className="font-semibold">cavotricuspide isthmus</span>, met een succespercentage boven{' '}
          <span className="font-semibold">90–95%</span>
        </li>
      </ul>
    </div>
  )
}
