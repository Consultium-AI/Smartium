export default function Sect02AlgemeneBouwVanDeTractusDigestivus() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Algemene bouw van de tractus digestivus</h2>
      <p>
        De tractus digestivus is in de hele lengte opgebouwd volgens een vaste basis. Dat maakt het makkelijker om verschillende weefsels onder de microscoop te herkennen. De wand bestaat in
        grote lijnen uit vier lagen: mucosa, submucosa, muscularis en aan de buitenzijde serosa of adventitia.
      </p>
      <p>
        De mucosa is de binnenste laag en ligt direct tegen het lumen aan. Hierin zitten het epitheel, de lamina propria en de muscularis mucosae. De submucosa ligt daaronder en bevat
        steunweefsel, bloedvaten, lymfevaten en de plexus submucosus. De muscularis zorgt voor beweging van de darm en bestaat meestal uit een circulaire en een longitudinale spierlaag, met
        daartussen de plexus myentericus. De buitenste laag is ofwel serosa ofwel adventitia.
      </p>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. De opbouw van de darmwand</h3>
        <div className="overflow-x-auto mt-4 rounded-xl border border-emerald-200/80 dark:border-emerald-600/40">
          <table className="w-full text-sm border-collapse bg-white dark:bg-slate-900/50">
            <thead>
              <tr className="bg-emerald-100 dark:bg-emerald-900/40">
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">Laag</th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">
                  Belangrijkste onderdelen
                </th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">Functie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Mucosa</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Epitheel, lamina propria, muscularis mucosae</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Bescherming, secretie, opname</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Submucosa</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Bindweefsel, vaten, zenuwplexus</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Steun, voeding, aansturing</td>
              </tr>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Muscularis</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Circulaire en longitudinale spierlaag</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Mengt en vervoert de inhoud</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Serosa / adventitia</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Buitenste bekleding</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Bedekking of verankering</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>Een paar begrippen zijn heel belangrijk om te onthouden:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Lamina propria: bindweefsel in de mucosa.</li>
        <li>Muscularis mucosae: dunne spierlaag in de mucosa.</li>
        <li>Plexus submucosus en plexus myentericus: zenuwplekken die de darmfunctie helpen regelen.</li>
      </ul>
      <div className="p-5 bg-violet-50 dark:bg-violet-950/40 rounded-xl border border-violet-200 dark:border-violet-600/40 space-y-2">
        <p>
          <strong className="text-violet-900 dark:text-violet-200">Aandachtsvraag:</strong> waarom is deze basisopbouw handig om te kennen?{' '}
          <strong className="text-violet-900 dark:text-violet-200">Mini-antwoord:</strong> omdat je daarmee veel organen uit de tractus digestivus sneller herkent en ook beter begrijpt waarom
          een bepaald deel een bepaalde functie heeft.
        </p>
      </div>
    </div>
  )
}
