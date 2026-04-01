export default function Sect08IcdSecundairePreventie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De ICD: functie en secundaire preventie</h2>
      <p>
        Een <span className="font-semibold">Implantable Cardioverter-Defibrillator (ICD)</span> bewaakt continu het hartritme. De ICD heeft twee gezichten:
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>hij kan ook pacen bij bradycardie;</li>
        <li>
          hij grijpt in bij levensbedreigende ritmestoornissen, vooral <span className="font-semibold">VT</span> of <span className="font-semibold">VF</span>.
        </li>
      </ol>
      <p>De ICD kan op twee manieren ingrijpen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">ATP (Anti-Tachycardia Pacing)</span>: pijnloos, snelle kleine pacemaker-pulsjes om een ventriculaire tachycardie over te nemen en te stoppen.
        </li>
        <li>
          <span className="font-semibold">Shock / defibrillatie</span>: een krachtige stroomstoot, ongeveer <span className="font-semibold">30-40 joule</span>, bij ventricelfibrilleren of als ATP niet werkt. Dit voelt voor de patiënt pijnlijk.
        </li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Secundaire preventie</h3>
      <p>
        Secundaire preventie betekent dat iemand al een levensbedreigende ritmestoornis heeft doorgemaakt, bijvoorbeeld VT/VF met reanimatie. Als er geen reversibele oorzaak was, krijgt deze patiënt een ICD.
      </p>
    </div>
  )
}
