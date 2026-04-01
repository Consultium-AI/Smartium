export default function Sect07FenotypeEnGenotypering() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Fenotype en genotypering</h2>
      <p>Bij een genetische test kijken we naar de activiteit van enzymen. Die activiteit kan in vier categorieën worden ingedeeld:</p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 3. Fenotypes van geneesmiddelmetabolisme</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Afkorting</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Betekenis</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Uitleg</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">PM</td>
                <td className="px-4 py-3">Poor metaboliser</td>
                <td className="px-4 py-3">Het enzym is er niet of heeft zeer weinig activiteit</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">IM</td>
                <td className="px-4 py-3">Intermediate metaboliser</td>
                <td className="px-4 py-3">Het enzym is minder actief dan bij de meeste mensen</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">NM</td>
                <td className="px-4 py-3">Normal metaboliser</td>
                <td className="px-4 py-3">Het enzym is normaal actief</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">UM</td>
                <td className="px-4 py-3">Ultrarapid metaboliser</td>
                <td className="px-4 py-3">Het enzym is actiever dan bij de meeste mensen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        {'Bij een verminderde metabole enzymactiviteit, zoals bij PM\u2019s of IM\u2019s, kunnen bijwerkingen eerder optreden door hogere plasmaconcentraties. Dat geldt niet bij een prodrug.'}
      </p>
      <p>Fenotype wordt niet alleen bepaald door het genotype, maar ook door omgevingsfactoren, zoals:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>comedicatie,</li>
        <li>voeding,</li>
        <li>roken,</li>
        <li>comorbiditeit.</li>
      </ul>
      <p>
        In oudere artikelen kan soms de term extensive metaboliser voorkomen. Die term is later aangepast naar normal metaboliser (NM). In de praktijk betekenen deze termen ongeveer hetzelfde.
      </p>
    </div>
  )
}
