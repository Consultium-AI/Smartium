export default function Sect09KlinischeVerschijnselenCOIntoxicatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Klinische verschijnselen van CO-intoxicatie</h2>
      <p>
        De ernst van schade hangt af van de hoeveelheid CO in de ruimte en van de duur van de blootstelling. Een ernstige
        acute CO-intoxicatie kan leiden tot bewustzijnsverlies en zelfs tot de dood.
      </p>
      <p>
        De klachten bij een milde intoxicatie zijn vaak variabel en aspecifiek. Daardoor lijken ze op een gewone
        virusinfectie. Veelvoorkomende klachten zijn:
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Veel voorkomende vroege klachten bij CO-intoxicatie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Hoofdpijn</td>
              <td className="px-4 py-3 align-top">58%</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Misselijkheid</td>
              <td className="px-4 py-3 align-top">33%</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Duizeligheid</td>
              <td className="px-4 py-3 align-top">29%</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Slaperigheid</td>
              <td className="px-4 py-3 align-top">14%</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Braken</td>
              <td className="px-4 py-3 align-top">14%</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Hoesten/benauwdheid</td>
              <td className="px-4 py-3 align-top">6%</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Verwardheid</td>
              <td className="px-4 py-3 align-top">5%</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Kortademigheid</td>
              <td className="px-4 py-3 align-top">5%</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Flauwvallen</td>
              <td className="px-4 py-3 align-top">5%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Ernstige intoxicatie kan ook gepaard gaan met:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>bewustzijnsverlies of flauwvallen;</li>
        <li>lactaatacidose;</li>
        <li>pijn op de borst;</li>
        <li>beroerte;</li>
        <li>ventriculaire ritmestoornissen;</li>
        <li>longoedeem.</li>
      </ul>
      <p>
        Daarnaast kunnen er vertraagde neurologische problemen ontstaan. Die kunnen bestaan uit apathie, desoriëntatie,
        persoonlijkheidsverandering, geheugenproblemen, concentratieproblemen, verwardheid en depressie. Deze klachten
        kunnen ontstaan na dagen tot maanden, vaak binnen 20 dagen na de intoxicatie, maar soms nog veel later. Ze kunnen
        lang aanhouden. Het hoogst gemeten CO-Hb-gehalte is daarbij geen goede voorspeller van het ontstaan van deze
        vertraagde neurologische problemen.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandachtsvraag:</strong> waarom zie je bij
          CO-intoxicatie niet altijd duidelijke benauwdheid?{' '}
          <strong className="text-primary-900 dark:text-primary-200">Mini-antwoord:</strong> omdat de ademhalingsprikkel
          vooral wordt bepaald door paO2, paCO2 en pH, en die zijn vaak nauwelijks afwijkend.
        </p>
      </div>
    </div>
  )
}
