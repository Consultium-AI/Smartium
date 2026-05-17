export default function Sect12WatMoetJeOnthoudenEnTabelVerschillen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wat moet je vooral onthouden?</h2>
      <p>
        Prehabilitatie draait om het <strong>verbeteren van de functionele capaciteit vóór een operatie</strong>. Het doel is dat de patiënt de chirurgische stress beter aankan. De belangrijkste onderdelen zijn fysieke training, voeding en optimalisatie van risicofactoren. De ideale aanpak is multimodaal. Prehabilitatie kan bijdragen aan sneller herstel na de operatie, maar er is nog meer bewijs nodig om het breder te kunnen invoeren.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Samenvatting van de belangrijkste verschillen</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Traditionele benadering</th>
              <th className="px-4 py-3 font-semibold">Nieuwe benadering</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Focus op snel herstel ná de operatie</td>
              <td className="px-4 py-3 align-top">Focus op de patiënt sterker maken vóór de operatie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Reageren op de chirurgische stress</td>
              <td className="px-4 py-3 align-top">De reserve vooraf vergroten</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Herstel achteraf centraal</td>
              <td className="px-4 py-3 align-top">Optimalisatie vooraf centraal</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
