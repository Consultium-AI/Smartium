export default function Sect05AtrialeTachycardie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Atriale tachycardie</h2>
      <p>
        Bij een <span className="font-semibold">atriale tachycardie</span> neemt een focus <span className="font-semibold">buiten de sinusknoop</span> de leiding over. Het is een relatief zeldzame diagnose, maar belangrijk om te herkennen omdat de oorzaak soms specifiek is.
      </p>
      <p>
        Een atriale tachycardie ontstaat uit een ectopische focus in het atriale myocard. Veelvoorkomende locaties zijn de <span className="font-semibold">crista terminalis</span> in het rechteratrium of gebieden rond de{' '}
        <span className="font-semibold">longvenen</span> in het linkeratrium.
      </p>
      <p>Vaak gaat het om:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">versnelde automaticiteit</span>
        </li>
        <li>
          <span className="font-semibold">triggered activity</span>
        </li>
      </ul>
      <p>
        Daarom zie je vaak een <span className="font-semibold">warm-up</span> en <span className="font-semibold">cool-down</span>: het ritme begint en eindigt niet abrupt, maar versnelt en vertraagt geleidelijk.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Kliniek en ECG</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          atriale frequentie meestal <span className="font-semibold">125–250/min</span>
        </li>
        <li>
          <span className="font-semibold">P-toppen</span> zijn zichtbaar vóór elk QRS-complex
        </li>
        <li>
          de P-top heeft een <span className="font-semibold">afwijkende as of morfologie</span>
        </li>
        <li>
          de <span className="font-semibold">PR-tijd</span> kan variëren
        </li>
        <li>
          bij hoge atriale frequentie kan een <span className="font-semibold">Wenckebach-blokkade</span> in de AV-knoop ontstaan
        </li>
      </ul>
      <p>
        Atriale tachycardie komt relatief vaak voor bij patiënten met <span className="font-semibold">structurele hartziekte</span>, coronairlijden of hartfalen. Een specifieke oorzaak om alert op te zijn is{' '}
        <span className="font-semibold">digoxine-intoxicatie</span>.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Behandeling</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Acuut, stabiel:</span> rate control met <span className="font-semibold">beta-blokkers</span> of <span className="font-semibold">calciumantagonisten</span> zoals verapamil/diltiazem
        </li>
        <li>
          <span className="font-semibold">Adenosine</span> stopt het ritme vaak niet, maar kan de atriale activiteit zichtbaar maken
        </li>
        <li>
          <span className="font-semibold">Cardioversie</span> werkt goed bij re-entry, maar minder bij automatische foci
        </li>
        <li>
          <span className="font-semibold">Lange termijn:</span> anti-aritmica klasse Ic of III, of <span className="font-semibold">radiofrequente ablatie</span>
        </li>
        <li>ablatie is vaak succesvol, vooral bij focale vormen</li>
      </ul>
    </div>
  )
}
