export default function Sect07PetCtOncologieEnValkuilen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">PET/CT in de oncologie en de belangrijkste valkuilen</h2>
      <p>FDG PET/CT wordt in de oncologie vooral gebruikt voor:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>stadiëring</li>
        <li>responsevaluatie</li>
        <li>recidiefdiagnostiek</li>
        <li>radiotherapieplanning</li>
      </ul>
      <p>
        De kracht van het onderzoek is dat het zeer sensitief is: je ziet snel verhoogde activiteit. Het nadeel is dat het
        niet specifiek is. Verhoogde FDG-opname betekent dus niet automatisch kanker.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Belangrijke valkuilen bij FDG PET/CT</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Oorzaak van FDG-opname
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeeld
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Tumor</td>
              <td className="px-4 py-3 align-top">Maligne afwijking</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Infectie</td>
              <td className="px-4 py-3 align-top">Pneumonie, geïnfecteerde cyste</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Inflammatie</td>
              <td className="px-4 py-3 align-top">Postoperatieve reactie, artritis, therapiegerelateerde ontsteking</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Fysiologische activiteit</td>
              <td className="px-4 py-3 align-top">Hersenopname, myocard, darmen, bruin vet, blaas</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een praktische aandacht is dat chemo- en radiotherapie vaak lokale ontsteking veroorzaken. Daardoor kan een PET/CT
        een plek laten zien die op recidief lijkt, terwijl het om reactieve activiteit gaat. Daarom wacht men bij voorkeur:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>4 weken na chemotherapie</li>
        <li>12 weken na radiotherapie</li>
      </ul>
      <p>
        Chemotherapie maakt patiënten bovendien vatbaarder voor infecties, waardoor op follow-up scans vaak pneumonie wordt
        gezien. Immunotherapie kan eveneens FDG-positieve bijwerkingen geven.
      </p>
      <p className="text-slate-800 dark:text-slate-200 border-l-4 border-primary-400 pl-4 py-2 bg-primary-50/80 dark:bg-primary-500/10 rounded-r-lg">
        &gt; Aandachtsvraag: Waarom is FDG PET/CT gevoelig maar niet specifiek?{'  '}
        &gt; Mini-antwoord: Omdat ook infectie, ontsteking en normale fysiologische processen FDG kunnen opnemen.
      </p>
    </div>
  )
}
