export default function Sect04Lichtmicroscopie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Lichtmicroscopie</h2>
      <p>
        Lichtmicroscopie is het standaardonderzoek van nierweefsel om schadepatronen vast te stellen. Met verschillende kleuringen worden verschillende aspecten van het nierweefsel zichtbaar. De belangrijkste kleuringen bij een nierbiopt zijn PAS, Jones, HE en speciale kleuringen.
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 2. Belangrijke kleuringen bij lichtmicroscopie</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kleuring</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Wat kleurt het aan?</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Praktisch nut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">PAS</td>
              <td className="px-4 py-3">Polysacchariden, zoals glycogeen, en mucosubstanties, zoals glycoproteïnen, glycolipiden en mucinen; vaak met een geschikte basische tegenkleuring</td>
              <td className="px-4 py-3">Basaalmembranen en celkernen duidelijk zichtbaar maken</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-medium">Jones</td>
              <td className="px-4 py-3">Methenamine zilver; werkt vergelijkbaar met PAS</td>
              <td className="px-4 py-3">Basaalmembraan intens zwart zichtbaar maken</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">HE</td>
              <td className="px-4 py-3">Hematoxyline kleurt basofiele structuren blauwpaars, vooral DNA en dus celkernen; eosine kleurt eosinofiele structuren rood, vaak eiwitten</td>
              <td className="px-4 py-3">Standaardkleuring voor het algemene beeld en voor het herkennen van verschillende celtypen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-medium">Speciale kleuringen</td>
              <td className="px-4 py-3">Afhankelijk van de klinische context</td>
              <td className="px-4 py-3">Bijvoorbeeld Masson’s trichrome of Sirius Rood voor fibrose, PTAH voor fibrine en Congo rood voor amyloïd</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        PAS en Jones richten zich vooral op de basaalmembranen. Dat is belangrijk, omdat de basaalmembraan in veel nierziekten goed beoordeeld moet worden. HE is de standaardkleuring in de pathologie en helpt vooral om het algemene beeld en verschillende cellen te herkennen. Basofiel betekent blauwpaars; eosinofiel betekent roze tot rood. Een groot deel van het cytoplasma kleurt eosinofiel.
      </p>
    </div>
  )
}
