export default function Sect08DilemmasReguliereZorgTabel2() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Dilemma’s in de reguliere zorg</h2>
      <p>
        In de reguliere zorg draait het steeds om keuzes. De module zet daarbij verschillende perspectieven naast elkaar.
        Als behandelaar moet je je afvragen: moeten we wel of niet behandelen? Wie bepaalt wat zinvol medisch handelen
        is? Is dat de arts, omdat die moet handelen volgens <em className="text-slate-800 dark:text-slate-200">do no harm</em> en moet inschatten of de voordelen van behandelen groter zijn dan de nadelen van niet-behandelen? Of is het de patiënt, omdat die baas is over wat er met hem of haar gebeurt en zelf mag bepalen wat er wel of niet gebeurt?
      </p>
      <p>
        Er spelen ook bredere vragen. Kunnen we alles doen wat medisch mogelijk is? Kunnen we in een situatie van
        schaarste in personeel en geld alles blijven aanbieden? Hoe stel je dan prioriteiten? En hoe bepaal je wat een
        levensjaar mag kosten, en of die kosten ook echt verantwoord zijn?
      </p>
      <p>
        Dit laat zien dat zorgkeuzes niet alleen klinisch zijn, maar ook ethisch en maatschappelijk. Soms is de vraag
        niet of iets kan, maar of het in die situatie ook passend, redelijk en verdedigbaar is.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Belangrijke dilemma’s in de reguliere zorg
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Thema
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kernvraag
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Wel of niet behandelen</td>
              <td className="px-4 py-3 align-top">Moeten we behandelen, of juist niet?</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Zinvol handelen</td>
              <td className="px-4 py-3 align-top">Wie bepaalt wat medisch zinvol is: arts of patiënt?</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Schaarste</td>
              <td className="px-4 py-3 align-top">Kunnen we alles doen met beperkte mensen en middelen?</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Kosten</td>
              <td className="px-4 py-3 align-top">Wat mag een levensjaar kosten, en kunnen we dat verantwoorden?</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Prioritering</td>
              <td className="px-4 py-3 align-top">Hoe kiezen we eerlijk als niet alles kan?</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
