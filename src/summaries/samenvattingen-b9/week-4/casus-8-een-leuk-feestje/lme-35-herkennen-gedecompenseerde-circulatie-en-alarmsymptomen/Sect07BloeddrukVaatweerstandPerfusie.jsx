export default function Sect07BloeddrukVaatweerstandPerfusie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoofdstuk 2: regulatie van bloeddruk en vaattonus</h2>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Bloeddruk, vaatweerstand en perfusie</h3>
      <p>
        De bloeddruk wordt vooral bepaald door de <span className="font-semibold">vaattonus</span>, dus door de mate van vasoconstrictie of vasodilatatie. De druk is hoog in het arteriële systeem en daalt steeds verder richting het veneuze systeem. In de venen is de druk laag en in het rechter atrium is die het laagst.
      </p>
      <p>De perfusiedruk van een orgaan is het drukverschil dat de doorbloeding mogelijk maakt:</p>
      <p className="font-semibold text-slate-900 dark:text-slate-100">Perfusiedruk = MAP – CVD</p>
      <p>waarbij:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">MAP</span> = mean arterial pressure;
        </li>
        <li>
          <span className="font-semibold">CVD</span> = druk in het rechter atrium en de vena cava.
        </li>
      </ul>
      <p>De MAP is de gemiddelde arteriële druk en kan benaderd worden als:</p>
      <p className="font-semibold text-slate-900 dark:text-slate-100">MAP = (2 × diastolische druk + systolische druk) / 3</p>
      <p>De relatie tussen perfusiedruk, bloedstroom en weerstand is vergelijkbaar met de wet van Ohm:</p>
      <p className="font-semibold text-slate-900 dark:text-slate-100">Perfusiedruk = bloedstroom × weerstand</p>
      <p>Of eenvoudiger gezegd: perfusiedruk hangt samen met de bloedstroom en met de mate van vasoconstrictie of vasodilatatie van de vaten.</p>
      <p>
        <span className="font-semibold">Aandacht-vraag:</span> waarom is een constante bloeddruk belangrijk?{' '}
        <br />
        <span className="font-semibold">Mini-antwoord:</span> zodat lokale veranderingen in vaatdiameter ook echt kunnen leiden tot evenredige veranderingen in lokale bloedstroom. Dan kan elk orgaan precies de bloedstroom krijgen die het nodig heeft.
      </p>
    </div>
  )
}
