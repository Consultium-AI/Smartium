export default function Sect12Behandeling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling: de grote strategische keuze</h2>
      <p>
        Er zijn twee hoofdrichtingen: <span className="font-semibold">rate control</span> en{' '}
        <span className="font-semibold">rhythm control</span>.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Rate control</h3>
      <p>
        Het doel is de ventrikelfrequentie vertragen, meestal tot {'<'}110/min, terwijl het atrium blijft fibrilleren. Deze strategie past vooral bij:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>ouderen ({'>'}65 jaar),</li>
        <li>patiënten met weinig klachten,</li>
        <li>inactieve patiënten.</li>
      </ul>
      <p>
        Voordeel: minder medicatiebijwerkingen. Grote studies lieten bij oudere patiënten geen duidelijk verschil in overleving zien tussen rate control en rhythm control.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Rhythm control</h3>
      <p>Het doel is het sinusritme herstellen en behouden. Deze strategie past vooral bij:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>jongere patiënten,</li>
        <li>veel klachten,</li>
        <li>fysiek actieve patiënten,</li>
        <li>patiënten bij wie rate control onvoldoende werkt.</li>
      </ul>
      <p>
        Voordeel: betere inspanningstolerantie, omdat de atriale kick terugkomt. Nadeel: anti-aritmica hebben vaak bijwerkingen en de recidiefkans is hoog.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Medicatie voor rate control</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Bètablokkers</span>: blokkeren de sympathische invloed op de AV-knoop; eerste keus bij de meeste patiënten.
        </li>
        <li>
          <span className="font-semibold">Calciumantagonisten</span>: vertragen de geleiding via de AV-knoop, maar niet gebruiken bij hartfalen met verminderde ejectiefractie.
        </li>
        <li>
          <span className="font-semibold">Digoxine</span>: verhoogt de vagale tonus; werkt vooral in rust en minder goed bij inspanning. Vooral geschikt bij inactieve ouderen of als toevoeging bij hartfalen.
        </li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Medicatie voor rhythm control</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Flecaïnide</span>: klasse Ic, natriumkanaalblokker. Alleen bij een structureel gezond hart; niet gebruiken bij ischemische hartziekte of hartfalen, want het kan pro-aritmisch zijn.
        </li>
        <li>
          <span className="font-semibold">Amiodaron</span>: klasse III. Geschikt bij hartfalen of structurele hartziekte. Het is relatief veilig voor het hart, maar heeft veel bijwerkingen op lange termijn, zoals schildklier-, long- en huidproblemen.
        </li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Cardioversie</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Elektrische cardioversie (DCC)</span>: synchrone stroomstoot onder sedatie, met een effectiviteit van meer dan 90%.
        </li>
        <li>
          <span className="font-semibold">Medicamenteuze cardioversie</span>: infuus met een anti-aritmicum, zoals flecaïnide of vernakalant. Werkt trager en er is geen narcose nodig.
        </li>
      </ul>
    </div>
  )
}
