export default function Sect02WatIsSldEnMasld() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wat is SLD en MASLD?</h2>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Steatotic Liver Disease (SLD)</strong> is een verzamelnaam voor leverziekten waarbij{' '}
        <strong className="text-slate-900 dark:text-slate-100">vetstapeling in hepatocyten</strong> centraal staat. Het is een zeer frequente leverziekte en verloopt
        vaak <strong className="text-slate-900 dark:text-slate-100">asymptomatisch</strong>. Daardoor wordt SLD vaak pas toevallig ontdekt.
      </p>
      <p>
        Binnen dit spectrum is <strong className="text-slate-900 dark:text-slate-100">MASLD</strong> de meest voorkomende vorm. MASLD staat voor{' '}
        <strong className="text-slate-900 dark:text-slate-100">Metabolic dysfunction–Associated Steatotic Liver Disease</strong>. Deze term gebruik je wanneer er
        sprake is van leververvetting <strong className="text-slate-900 dark:text-slate-100">én</strong> van ten minste{' '}
        <strong className="text-slate-900 dark:text-slate-100">één metabole risicofactor</strong>, zoals obesitas, type 2 diabetes of dyslipidemie. MASLD vervangt de
        oudere term <strong className="text-slate-900 dark:text-slate-100">NAFLD</strong> en benadrukt dat metabole ontregeling nauw samenhangt met de leverziekte.
      </p>
      <p>
        Belangrijk is dat SLD niet alleen MASLD omvat. Ook <strong className="text-slate-900 dark:text-slate-100">alcohol-gerelateerde leverziekte</strong> en combinaties
        van metabole dysfunctie en alcoholgebruik vallen binnen het bredere SLD-spectrum.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Belangrijkste vormen binnen het SLD-spectrum</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Vorm</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Kernkenmerk</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">MASLD</strong>
              </td>
              <td className="p-3 align-top">Leververvetting + minimaal één metabole risicofactor</td>
            </tr>
            <tr>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">MASH</strong>
              </td>
              <td className="p-3 align-top">Metabole steatohepatitis: steatose met ontsteking en hepatocytbeschadiging</td>
            </tr>
            <tr>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">MetALD</strong>
              </td>
              <td className="p-3 align-top">Combinatie van metabole dysfunctie en relevant alcoholgebruik</td>
            </tr>
            <tr>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">ALD</strong>
              </td>
              <td className="p-3 align-top">Alcohol-gerelateerde leverziekte, met alcohol als primaire oorzaak</td>
            </tr>
            <tr>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">Overige SLD-vormen</strong>
              </td>
              <td className="p-3 align-top">Bijvoorbeeld medicatie-geïnduceerde leverziekte, monogene aandoeningen, cryptogene SLD</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-slate-50/80 dark:bg-slate-800/50 p-4 space-y-3 border-l-4 border-indigo-400 dark:border-indigo-500/85">
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Aandacht-vraag:</strong> Waarom is deze indeling belangrijk?{' '}
        </p>
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Mini-antwoord:</strong> Omdat de oorzaak, het risico op progressie en het beleid kunnen
          verschillen.
        </p>
      </div>
    </div>
  )
}
