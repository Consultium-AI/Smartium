export default function Sect06VoorbeeldenUitDePraktijk() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">5. Voorbeelden van intoxicaties uit de praktijk</h2>
      <p>Een aantal voorbeelden maakt duidelijk hoe je naar symptomen kunt kijken.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Voorbeeld: metoprolol</h3>
      <p>
        Een vrouw met een <span className="font-semibold">zeer lage hartslag</span>, <span className="font-semibold">zweten</span> en een <span className="font-semibold">lage bloeddruk</span> past bij het effect en de bijwerkingen van <span className="font-semibold">metoprolol</span>. Daarmee kun je dus uit de symptomen herleiden welk middel mogelijk is ingenomen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Voorbeeld: amitriptyline</h3>
      <p>
        Bij een mogelijke overdosis van <span className="font-semibold">amitriptyline</span> wordt een <span className="font-semibold">ECG</span> gemaakt om de <span className="font-semibold">QTc-tijd</span> te controleren. Een verlengde QTc-tijd kan ernstige, potentieel dodelijke ritmestoornissen geven. Daarom is het belangrijk om bij een mogelijke overdosering van amitriptyline een ECG te doen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Voorbeeld: sedatief-hypnotisch middel</h3>
      <p>
        Als een patiënt <span className="font-semibold">normale pupillen</span> heeft, een <span className="font-semibold">temperatuur van 35 graden</span> en <span className="font-semibold">tragere darmgeluiden dan normaal</span>, dan wijst dat op een intoxicatie met een <span className="font-semibold">sedatief-hypnotisch middel</span>. Een voorbeeld daarvan is <span className="font-semibold">oxazepam</span>.
        <br />
        Bij deze groep hoort dus vooral een <span className="font-semibold">versuffende</span> presentatie.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Voorbeeld: anticholinerge intoxicatie</h3>
      <p>
        Bij <span className="font-semibold">grote pupillen</span>, <span className="font-semibold">verhoogde temperatuur</span> en <span className="font-semibold">afwezige darmgeluiden</span> kom je uit op een <span className="font-semibold">anticholinerg middel</span>. Voorbeelden van anticholinerge middelen zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>antidepressiva;</li>
        <li>antipsychotica;</li>
        <li>antiepileptica;</li>
        <li>antiparkinsonmiddelen.</li>
      </ul>
      <p>
        <span className="font-semibold">Amitriptyline</span> is een antidepressivum met anticholinerge werking.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 5. Voorbeelden van middelen en passende aanwijzingen</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Middel/groep</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Passende aanwijzingen</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Metoprolol</td>
              <td className="px-4 py-3 align-top">Lage hartslag, zweten, lage bloeddruk</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Amitriptyline</td>
              <td className="px-4 py-3 align-top">ECG-controle van QTc, risico op verlenging QTc</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Oxazepam</td>
              <td className="px-4 py-3 align-top">Past bij sedatief-hypnotisch toxidroom</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Anticholinerge middelen</td>
              <td className="px-4 py-3 align-top">Grote pupillen, hoge temperatuur, afwezige darmgeluiden</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
