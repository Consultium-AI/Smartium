export default function Sect09MedicamenteuzeHoofdgroepen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Medicamenteuze behandeling: de hoofdgroepen</h2>
      <p>
        De belangrijkste bloeddrukverlagers zijn middelen die de bloeddruk effectief omlaag brengen. Er zijn veel klassen, maar de kern is: je kiest een middel dat past bij de patiënt en vaak combineer je middelen uit verschillende groepen.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 4. Belangrijkste antihypertensiva en voorbeelden</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Klasse</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Voorbeelden</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Korte uitleg</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Ca-antagonisten</td>
                <td className="px-4 py-3 align-top">amlodipine, nifedipine, verapamil, diltiazem</td>
                <td className="px-4 py-3 align-top">Werken via remming van calciuminstroom; vooral de dihydropyridines werken op de vaten</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">ACE-remmers</td>
                <td className="px-4 py-3 align-top">enalapril, perindopril, captopril</td>
                <td className="px-4 py-3 align-top">Werken op het RAAS</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">ARBs</td>
                <td className="px-4 py-3 align-top">valsartan, losartan</td>
                <td className="px-4 py-3 align-top">Werken op het RAAS</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Directe renineremmers</td>
                <td className="px-4 py-3 align-top">aliskiren</td>
                <td className="px-4 py-3 align-top">Wordt weinig voorgeschreven en zal waarschijnlijk verdwijnen</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Diuretica</td>
                <td className="px-4 py-3 align-top">hydrochlorothiazide, furosemide, bumetanide, indapamide, chlortalidon, amiloride, triamtereen, spironolacton, eplerenon</td>
                <td className="px-4 py-3 align-top">Verlagen de natrium- en vochtbelasting</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Betablokkers</td>
                <td className="px-4 py-3 align-top">bisoprolol, atenolol, metoprolol</td>
                <td className="px-4 py-3 align-top">Verlagen o.a. renineproductie en hartminuutvolume</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Alfablokkers</td>
                <td className="px-4 py-3 align-top">doxazosine</td>
                <td className="px-4 py-3 align-top">Minder centraal in de behandeling</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Directe vaatverwijzers</td>
                <td className="px-4 py-3 align-top">—</td>
                <td className="px-4 py-3 align-top">Bestaan, maar hoef je niet in detail te kennen</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Centraal werkende middelen</td>
                <td className="px-4 py-3 align-top">methyldopa</td>
                <td className="px-4 py-3 align-top">Werkt centraal aangrijpend</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
