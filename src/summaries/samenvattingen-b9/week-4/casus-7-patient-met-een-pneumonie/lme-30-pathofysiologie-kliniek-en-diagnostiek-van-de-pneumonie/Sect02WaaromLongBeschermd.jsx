export default function Sect02WaaromLongBeschermd() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Waarom de long zo goed beschermd moet worden</h2>
      <p>
        Elke dag ademen we enorme hoeveelheden lucht in en uit. Daarbij komen de luchtwegen en longen voortdurend in contact met micro-organismen. Daarnaast kan er geregeld slijm uit de mond-keelholte worden geaspireerd, en dat slijm bevat vaak veel micro-organismen. Dat betekent dat de longen niet alleen een plek zijn waar gaswisseling plaatsvindt, maar ook een orgaan dat continu blootstaat aan infectierisico.
      </p>
      <p>
        Dat infecties van de onderste luchtwegen en het longparenchym niet continu ontstaan, laat zien dat de long over sterke verdedigingsmechanismen beschikt. Als die afweer faalt, of als de blootstelling aan micro-organismen heel groot is, of als een micro-organisme bijzonder virulent is, kan er toch een infectie optreden.
      </p>
      <p>
        De luchtweginfecties worden meestal ingedeeld in infecties van de bovenste en onderste luchtwegen. De grens ligt bij de stembanden: alles daarboven hoort bij de bovenste luchtwegen, alles daaronder bij de onderste luchtwegen.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. Indeling van luchtweginfecties</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Aandoening</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Locatie</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerken</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Rhinitis/sinusitis</td>
                <td className="px-4 py-3 align-top">Neus en neusbijholten</td>
                <td className="px-4 py-3 align-top">Typische verkoudheidsklachten, vaak viraal</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Laryngitis</td>
                <td className="px-4 py-3 align-top">Larynx</td>
                <td className="px-4 py-3 align-top">Meestal viraal, vooral bij kinderen; herkenbare blafhoest</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Bronchitis/tracheïtis</td>
                <td className="px-4 py-3 align-top">Trachea en/of bronchi</td>
                <td className="px-4 py-3 align-top">Infectie van de grote luchtwegen, vaak hoest</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Bronchiolitis</td>
                <td className="px-4 py-3 align-top">Bronchioli</td>
                <td className="px-4 py-3 align-top">Ontsteking van de kleine luchtwegen, vooral bij kinderen</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Pneumonie</td>
                <td className="px-4 py-3 align-top">Longparenchym, van respiratoire bronchioli tot en met alveoli</td>
                <td className="px-4 py-3 align-top">Infectie van het longweefsel zelf</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: Waarom is de grens tussen bovenste en onderste luchtwegen belangrijk?  Mini-antwoord: Omdat infecties op verschillende plaatsen andere klachten, verwekkers en verdedigingsmechanismen hebben.
        </p>
      </div>
    </div>
  )
}
