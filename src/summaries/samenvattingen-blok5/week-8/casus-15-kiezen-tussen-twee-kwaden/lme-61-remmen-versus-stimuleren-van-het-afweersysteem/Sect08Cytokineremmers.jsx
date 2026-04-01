export default function Sect08Cytokineremmers() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Cytokineremmers</h2>
      <p>Biologicals kunnen cytokinen op twee manieren remmen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>door een oplosbare receptor aan te bieden die het cytokine wegvangt;</li>
        <li>door een monoklonaal antilichaam te geven dat het cytokine of de receptor blokkeert.</li>
      </ul>
      <p>
        De grootste successen zijn geboekt bij chronische ontstekingsziekten, zoals:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>reumatoïde artritis,</li>
        <li>psoriasis,</li>
        <li>inflammatoire darmziekten zoals de ziekte van Crohn.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 3. Belangrijke cytokinegerichte biologicals
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Middel/groep
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Doelwit
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijke toepassing
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Infliximab</td>
              <td className="px-4 py-3 align-top">TNF-α, chimeer antilichaam</td>
              <td className="px-4 py-3 align-top">Reumatoïde artritis, psoriasis, Crohn</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Adalimumab</td>
              <td className="px-4 py-3 align-top">TNF-α, gehumaniseerd antilichaam</td>
              <td className="px-4 py-3 align-top">
                Reumatoïde artritis, vooral bij onvoldoende effect van methotrexaat
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Etanercept</td>
              <td className="px-4 py-3 align-top">Oplosbare TNF-receptor gekoppeld aan Fc-fragment</td>
              <td className="px-4 py-3 align-top">Reumatoïde artritis</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Anakinra</td>
              <td className="px-4 py-3 align-top">IL-1-receptorantagonist</td>
              <td className="px-4 py-3 align-top">
                Ontstekingsziekten, vooral bij onvoldoende respons op klassieke middelen
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Tocilizumab</td>
              <td className="px-4 py-3 align-top">IL-6</td>
              <td className="px-4 py-3 align-top">
                Reumatoïde artritis; ook gebruikt om overmatige inflammatie te remmen, bijvoorbeeld bij ernstige COVID-19
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        TNF-remming is klinisch belangrijk. Infliximab neutraliseert TNF-α en helpt ook tegen progressie van bot- en
        kraakbeendestructie bij reumatoïde artritis. Adalimumab werkt vergelijkbaar en is een gehumaniseerd
        anti-TNF-middel. Etanercept bestaat uit een TNF-receptor gekoppeld aan een Fc-fragment van IgG; daardoor heeft
        het een langere halfwaardetijd.
      </p>
      <p>
        Bij deze middelen moet je wel denken aan een verhoogd infectierisico, vooral op mycobacteriële infecties, die
        ernstig tot fataal kunnen verlopen. Bovendien kunnen patiënten op termijn zelf antistoffen tegen de toegediende
        antilichamen vormen, waardoor de werking afneemt.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">
            Aandachtspunt: waarom zijn cytokineremmers effectief bij chronische ontstekingsziekten?
          </strong>{' '}
          <strong className="text-primary-900 dark:text-primary-200">Antwoord:</strong> omdat ze heel gericht de cytokinen
          blokkeren die de ontstekingscascade in stand houden.
        </p>
      </div>
    </div>
  )
}
