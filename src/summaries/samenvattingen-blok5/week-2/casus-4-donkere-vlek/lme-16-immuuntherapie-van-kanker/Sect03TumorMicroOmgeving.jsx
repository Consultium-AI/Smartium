export default function Sect03TumorMicroOmgeving() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De tumor-micro-omgeving</h2>
      <p>
        De tumor-micro-omgeving is de directe omgeving van de tumor. Hier zitten verschillende cellen, waaronder
        immuuncellen, en die kunnen een tumor juist helpen of remmen. In de stof krijgt vooral de rol van immuuncellen
        nadruk.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Belangrijke immuuncellen en hun rol in de tumor-micro-omgeving
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Celtype
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Rol in de tumor-micro-omgeving
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">M2-macrofagen</td>
              <td className="px-4 py-3 align-top">Belangrijk voor een immuunsuppressieve omgeving</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Regulatorische T-lymfocyten (Treg)
              </td>
              <td className="px-4 py-3 align-top">Onderdrukken de activiteit van anti-tumor effectorcellen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Tumorcellen zelf</td>
              <td className="px-4 py-3 align-top">Dragen actief bij aan immuunsuppressie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">M1-macrofagen</td>
              <td className="px-4 py-3 align-top">Dragen bij aan een pro-inflammatoire, immuun-stimulerende micro-omgeving</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Cytotoxische T-lymfocyten</td>
              <td className="px-4 py-3 align-top">Kunnen tumorcellen doden, maar worden in de tumor vaak geremd</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Fibroblasten</td>
              <td className="px-4 py-3 align-top">
                Zorgen voor netwerksstructuur en kunnen immuunsuppressieve factoren maken, maar lijken geen dominante rol te
                spelen
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        M2-macrofagen en Treg-cellen zijn dus belangrijk voor een omgeving waarin anti-tumorreacties worden onderdrukt.
        Tumorcellen zelf kunnen eveneens een immuunsuppressieve omgeving creëren. Dat is een van de kenmerken die
        tumorvorming ondersteunen.
      </p>
    </div>
  )
}
