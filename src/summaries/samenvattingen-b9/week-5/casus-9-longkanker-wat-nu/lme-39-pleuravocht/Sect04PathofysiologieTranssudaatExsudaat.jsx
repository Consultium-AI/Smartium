export default function Sect04PathofysiologieTranssudaatExsudaat() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Pathofysiologie: hoe ontstaat pleuravocht?</h2>
      <p>
        Als de balans tussen productie en reabsorptie verstoord raakt, kan pleuravocht zich gaan ophopen in de pleuraholte. Dat kan gebeuren door:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">toename van de hydrostatische druk</span>;
        </li>
        <li>
          <span className="font-semibold">afname van de colloïd osmotische druk</span>;
        </li>
        <li>
          <span className="font-semibold">toename van de permeabiliteit van de pleura</span>.
        </li>
      </ul>
      <p>
        Bij ernstige <span className="font-semibold">hypoalbuminemie</span> is vooral de afname van de colloïd osmotische druk belangrijk. Hierdoor kan pleuravocht ontstaan.
      </p>
      <p>
        {'>'}{' '}
        <span className="font-semibold">Aandacht vraag:</span> Wat betekent het als de balans verstoord raakt?{' '}
        <br />
        {'>'}{' '}
        <span className="font-semibold">Mini-antwoord:</span> Dan wordt er meer vocht gevormd dan afgevoerd, waardoor vocht zich ophoopt tussen de pleurabladen.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Transtudaat en exsudaat</h3>
      <p>
        Pleuravocht wordt in twee grote groepen verdeeld: <span className="font-semibold">transsudaat</span> en <span className="font-semibold">exsudaat</span>.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Transsudaat</span>: ontstaat door verhoogde hydrostatische druk of verlaagde colloïd osmotische druk. Het heeft relatief weinig eiwit.
        </li>
        <li>
          <span className="font-semibold">Exsudaat</span>: ontstaat door toegenomen permeabiliteit van de pleura, bijvoorbeeld bij ontsteking. Het heeft relatief veel eiwit, omdat grotere moleculen makkelijker lekken.
        </li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Transsudaat versus exsudaat</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerk</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Transsudaat</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Exsudaat</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Ontstaansmechanisme</td>
              <td className="px-4 py-3 align-top">Verhoogde hydrostatische druk of verlaagde colloïd osmotische druk</td>
              <td className="px-4 py-3 align-top">Toegenomen permeabiliteit van de pleura</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Eiwitgehalte</td>
              <td className="px-4 py-3 align-top">Relatief laag</td>
              <td className="px-4 py-3 align-top">Relatief hoog</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Oorzaak</td>
              <td className="px-4 py-3 align-top">Vaak systemisch probleem</td>
              <td className="px-4 py-3 align-top">Vaak inflammatoir, infectieus of maligniteit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
