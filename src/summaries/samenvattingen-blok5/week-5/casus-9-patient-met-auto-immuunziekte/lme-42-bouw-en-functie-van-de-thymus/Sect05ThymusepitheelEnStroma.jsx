export default function Sect05ThymusepitheelEnStroma() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Thymusepitheel en thymusstroma</h2>
      <p>
        Naast thymocyten bevat de thymus ook andere celtypen. Samen vormen deze het stroma van de thymus. Een
        groot deel van dit stroma bestaat uit epitheelcellen. Daarnaast maken ook fibroblasten,
        endotheelcellen, dendritische cellen en macrofagen deel uit van het thymusstroma. Neutrofiele
        granulocyten horen daar niet bij.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 3. Celtypen van het thymusstroma
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Celtype
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Hoort bij thymusstroma?
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Epitheelcellen
              </td>
              <td className="px-4 py-3 align-top">Ja</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Fibroblasten
              </td>
              <td className="px-4 py-3 align-top">Ja</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Endotheelcellen
              </td>
              <td className="px-4 py-3 align-top">Ja</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Dendritische cellen
              </td>
              <td className="px-4 py-3 align-top">Ja</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Macrofagen</td>
              <td className="px-4 py-3 align-top">Ja</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Neutrofiele granulocyten
              </td>
              <td className="px-4 py-3 align-top">Nee</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Het thymusepitheel is bijzonder. In andere organen vormt epithelium meestal een continuüm: een
        aaneengesloten laag. In de thymus is dat anders. Daar vormen de epitheelcellen een 3-dimensionaal
        netwerk, waartussen thymocyten en bloedvaten aanwezig zijn. Dit netwerk wordt ook wel het reticulum
        van de thymus genoemd.
      </p>
      <p>
        De epitheelcellen in de cortex en medulla hebben niet dezelfde morfologie. Corticale epitheelcellen
        zijn dunner en meer langgerekt, terwijl medullaire epitheelcellen meer cytoplasma hebben. Deze
        structuurverschillen passen bij de verschillende zones van de thymus.
      </p>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-950 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtsvraag:</strong> Wat maakt
          thymusepitheel anders dan epitheel elders in het lichaam?{' '}
          <span className="text-amber-900 dark:text-amber-100">
            Kort antwoord: Het vormt geen gewone aaneengesloten bekleding, maar een driedimensionaal netwerk.
          </span>
        </p>
      </div>
    </div>
  )
}
