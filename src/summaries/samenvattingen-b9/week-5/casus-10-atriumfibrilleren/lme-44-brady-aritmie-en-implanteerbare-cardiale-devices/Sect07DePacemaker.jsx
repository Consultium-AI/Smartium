export default function Sect07DePacemaker() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De pacemaker</h2>
      <p>Een pacemaker is bedoeld om bradycardie te voorkomen. Het apparaat geeft elektrische pulsjes wanneer het eigen hartritme te traag is.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">VVI</span>: 1 draad, alleen in de kamer. Simpel, maar zonder synchronie met de boezem.
        </li>
        <li>
          <span className="font-semibold">DDD</span>: 2 draden, in boezem en kamer. Dit behoudt de natuurlijke volgorde van activatie en is meestal de voorkeur.
        </li>
      </ul>
      <p>
        Bij een VVI-pacemaker kan een nadeel ontstaan als de boezems nog wel in eigen ritme blijven slaan. Dan trekt de boezem soms samen terwijl de tricuspidalisklep dicht zit. Het bloed kan niet goed naar de kamer en wordt teruggestuurd in de halsvenen. Dat geeft{' '}
        <span className="font-semibold">AV-dissynchronie</span> of het <span className="font-semibold">pacemakersyndroom</span>. Klachten kunnen zijn: kloppingen in de hals, hoofdpijn, duizeligheid en moeheid.
      </p>
    </div>
  )
}
