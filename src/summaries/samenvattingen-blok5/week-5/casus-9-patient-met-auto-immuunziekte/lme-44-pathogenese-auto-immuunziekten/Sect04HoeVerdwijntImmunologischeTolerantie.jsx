export default function Sect04HoeVerdwijntImmunologischeTolerantie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Hoe verdwijnt immunologische tolerantie?
      </h2>
      <p>
        Er zijn verschillende mechanismen waardoor tolerantie kan wegvallen. Een belangrijke manier is dat een
        infectie het immuunsysteem zó activeert dat autoreactieve cellen alsnog geactiveerd raken. De
        volgende mechanismen zijn belangrijk:
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Mechanismen waardoor tolerantie kan verdwijnen
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Mechanisme
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kernidee
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Polyclonale activatie
              </td>
              <td className="px-4 py-3 align-top">Brede activatie van lymfocyten</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Activatie door superantigenen
              </td>
              <td className="px-4 py-3 align-top">Zeer sterke, niet-specifieke activatie van T-cellen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Moleculaire mimicry
              </td>
              <td className="px-4 py-3 align-top">Een pathogeen lijkt op een lichaamseigen structuur</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Bystander activatie
              </td>
              <td className="px-4 py-3 align-top">Ontsteking activeert ook autoreactieve cellen in de buurt</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Vrijkomen afgeschermde auto-antigenen
              </td>
              <td className="px-4 py-3 align-top">Zelfantigenen komen plots vrij door weefselschade</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Neoantigenen</td>
              <td className="px-4 py-3 align-top">
                Nieuwe of veranderde antigenen ontstaan, bijvoorbeeld door verandering van eiwitten
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij moleculaire mimicry lijkt een antigeen van een micro-organisme zo sterk op een lichaamseigen
        structuur dat antistoffen of T-cellen die tegen de infectie zijn gericht ook het eigen lichaam kunnen
        aanvallen. Dit kan leiden tot een kruisreactie.
      </p>
      <p>
        Een klassiek voorbeeld is Guillain-Barré-syndroom (GBS). Hierbij ontstaat vaak na een infectie,
        bijvoorbeeld met *Campylobacter jejuni*, een immuunreactie tegen bacteriële structuren die lijken op
        gangliosiden van zenuwen. Daardoor kunnen ook zenuwen worden aangevallen, met verlamming als gevolg.
        Wanneer de infectie verdwijnt, nemen de kruisreactieve antistoffen ook weer af en kan herstel
        optreden.
      </p>
    </div>
  )
}
