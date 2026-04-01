export default function Sect10ImmuunstimulatieCheckpoint() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Immuunstimulatie bij kanker</h2>
      <p>
        Bij kanker probeert men het immuunsysteem juist te versterken. De eerste benadering was met cytokinen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Cytokinetherapie</h3>
      <p>
        De eerste toegelaten immunomodulator bij leukemie en melanoom was interferon-α. Er werd wel enige verbetering
        gezien in de progressievrije periode, maar geen effect op de uiteindelijke overleving. Later zijn ook andere
        cytokinen onderzocht, zoals IL-2, IL-12, IL-15 en IL-18, vooral bij melanoom, maar met beperkt succes.
      </p>
      <p>
        IL-2 heeft wel een plaats als adjuvante therapie bij cellulaire immunotherapie, maar als monotherapie is het
        succes beperkt.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Immuun-checkpointinhibitie</h3>
      <p>
        Tumorcellen kunnen ontsnappen aan de afweer door remmende signalen te gebruiken. Immuun-checkpoints zijn
        normale regelmechanismen van het immuunsysteem, maar tumorcellen maken daar misbruik van. Door deze rem te
        blokkeren, kan het immuunsysteem de tumor weer aanvallen.
      </p>
      <p>De belangrijkste checkpoints zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>CTLA-4 op T-lymfocyten;</li>
        <li>PD-1 op T-lymfocyten;</li>
        <li>PD-L1 op tumorcellen.</li>
      </ul>
      <p>
        CTLA-4 wordt tot expressie gebracht op geactiveerde T-cellen en bindt aan CD80/CD86 op APC’s. Dit remt de
        kostimulatie via CD28 en dus de activatie van T-cellen, vooral in perifere lymfoïde organen.
      </p>
      <p>
        PD-1 komt vooral tot expressie op effector-T-cellen. Binding aan PD-L1 remt dan de effectorfunctie van de T-cel,
        vooral in weefsels.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 4. Belangrijkste checkpointremmers
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Doelwit
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeeldmiddelen
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Effect
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">CTLA-4</td>
              <td className="px-4 py-3 align-top">ipilimumab, tremelimumab</td>
              <td className="px-4 py-3 align-top">Haalt de rem van T-celactivatie af</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">PD-1</td>
              <td className="px-4 py-3 align-top">nivolumab, pembrolizumab</td>
              <td className="px-4 py-3 align-top">Versterkt T-celactiviteit tegen tumorcellen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">PD-L1</td>
              <td className="px-4 py-3 align-top">atezolizumab, durvalumab</td>
              <td className="px-4 py-3 align-top">Blokkeert de remmende interactie met PD-1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Deze behandeling is een belangrijke doorbraak in de oncologie en wordt gebruikt bij inmiddels vele maligniteiten.
        Combinatietherapie geeft vaak betere resultaten dan monotherapie. Een belangrijk punt is dat checkpointremmers
        vooral de eigen T-cellen van de patiënt activeren.
      </p>
    </div>
  )
}
