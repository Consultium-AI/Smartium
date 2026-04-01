export default function Sect13LangeTermijnBeleid() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Lange termijn beleid</h2>
      <p>Nadat een patiënt op de SEH is gestabiliseerd, moet je nadenken over de lange termijn: hoe voorkom je recidief?</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Medicatie</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">beta-blokkers</span> en <span className="font-semibold">calciumantagonisten</span> om geleiding te vertragen en triggers te onderdrukken
        </li>
        <li>
          <span className="font-semibold">klasse I/III anti-aritmica</span> zoals flecaïnide of amiodaron om het sinusritme te behouden, vooral bij recidiverende SVT of VT
        </li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Radiofrequente ablatie</h3>
      <p>
        Bij ablatie wordt via een katheter het stukje hartweefsel dat de ritmestoornis veroorzaakt weggebrand, of bevroren bij <span className="font-semibold">cryoablatie</span>.
      </p>
      <p>Indicaties:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">AVNRT</span>
        </li>
        <li>
          <span className="font-semibold">AVRT</span>
        </li>
        <li>
          <span className="font-semibold">atriumflutter</span>
        </li>
        <li>
          ook effectief bij <span className="font-semibold">idiopathische VT</span> en <span className="font-semibold">focale atriale tachycardie</span>
        </li>
      </ul>
      <p>Bij typische flutter is ablatie van de cavotricuspide isthmus zeer succesvol.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">ICD</h3>
      <p>
        Een <span className="font-semibold">ICD</span> is een apparaat onder de huid dat ingrijpt bij levensbedreigende ritmestoornissen.
      </p>
      <p>Indicaties:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          na reanimatie door <span className="font-semibold">VF/VT</span>: secundaire preventie
        </li>
        <li>bij zeer slechte pompfunctie of genetische hoog-risico-aandoeningen: primaire preventie</li>
      </ul>
    </div>
  )
}
