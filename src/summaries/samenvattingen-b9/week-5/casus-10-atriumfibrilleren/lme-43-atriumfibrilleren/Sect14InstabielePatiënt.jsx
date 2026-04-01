export default function Sect14InstabielePatiënt() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Instabiele patiënt: de rode vlag</h2>
      <p>
        Soms is AF een medisch spoedgeval. Als de ventrikelfrequentie hoog is en de atriale kick wegvalt, kan het cardiac output zo ver dalen dat de patiënt{' '}
        <span className="font-semibold">instabiel</span> wordt. Denk aan shock, longoedeem of myocardischemie.
      </p>
      <p>Bij een patiënt met:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>AF met een hoge frequentie,</li>
        <li>grauwe of klamme indruk,</li>
        <li>ernstige dyspneu,</li>
        <li>hypotensie,</li>
        <li>pijn op de borst,</li>
      </ul>
      <p>
        is de eerstvolgende stap <span className="font-semibold">directe elektrische cardioversie</span>.
      </p>
      <p>
        <span className="font-semibold">Aandachtspunt:</span> wanneer kies je direct voor cardioversie?{' '}
        <br />
        <span className="font-semibold">Kort antwoord:</span> bij hemodynamische instabiliteit, zoals shock, longoedeem of ischemie.
      </p>
    </div>
  )
}
