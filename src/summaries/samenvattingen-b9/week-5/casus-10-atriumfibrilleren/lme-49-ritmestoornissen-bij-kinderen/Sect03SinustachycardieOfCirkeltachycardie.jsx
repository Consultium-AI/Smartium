export default function Sect03SinustachycardieOfCirkeltachycardie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Sinustachycardie of cirkeltachycardie?</h2>
      <p>
        Bij kinderen is een snelle hartslag niet automatisch een ritmestoornis. De eerste vraag is altijd: past dit bij de situatie, of is het ritme zelf afwijkend?
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Sinustachycardie versus cirkeltachycardie
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Sinustachycardie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Cirkeltachycardie
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Oorzaak</td>
              <td className="px-4 py-3 align-top">Passend bij de situatie, bijvoorbeeld koorts, onrust of sepsis</td>
              <td className="px-4 py-3 align-top">Ritmestoornis door een kringloop in de geleiding</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Ritme</td>
              <td className="px-4 py-3 align-top">Variabel, kan meebewegen met de situatie of ademhaling</td>
              <td className="px-4 py-3 align-top">Heel strak en regelmatig</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Begin en einde</td>
              <td className="px-4 py-3 align-top">Meestal geleidelijk</td>
              <td className="px-4 py-3 align-top">Vaak abrupt begin en abrupt einde</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Hartfrequentie</td>
              <td className="px-4 py-3 align-top">Binnen de normale range voor de leeftijd</td>
              <td className="px-4 py-3 align-top">Vaak buiten de normale range voor sinustachycardie voor die leeftijd</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">P-toppen</td>
              <td className="px-4 py-3 align-top">Voor elk QRS-complex zichtbaar</td>
              <td className="px-4 py-3 align-top">P-toppen zijn vaak niet zichtbaar of liggen achter het QRS-complex</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij sinustachycardie zie je dus P-toppen vóór elk QRS-complex. Op het ECG is het ritme bovendien positief in I, II en aVF. Bij cirkeltachycardie is het ritme veel strakker en sneller, en de P-toppen zijn niet goed te zien of zitten verstopt in of achter het QRS-complex.
      </p>
      <p>
        <span className="font-semibold">Aandachtvraag:</span> wat is het typische gevoel bij een cirkeltachycardie?{`  `}*Mini-antwoord: een plots begin en plots einde van heel snelle hartkloppingen.*
      </p>
    </div>
  )
}
