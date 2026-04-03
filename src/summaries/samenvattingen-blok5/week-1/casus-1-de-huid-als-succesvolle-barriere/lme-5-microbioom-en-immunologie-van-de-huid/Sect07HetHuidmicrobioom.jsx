export default function Sect07HetHuidmicrobioom() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Het huidmicrobioom</h2>
      <p>
        Het huidmicrobioom bestaat uit alle micro-organismen die op de huid leven. Daarbij gaat het om bacteriën, virussen,
        schimmels en ook eencellige protisten. De term microbioom is de juiste benaming voor het totaal van deze organismen.
        Microbiota verwijst vooral naar de bacteriële component, en huidflora is een veelgebruikte, maar verouderde term.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Termen rond het huidmicrobioom</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Term
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Microbioom</td>
              <td className="px-4 py-3 align-top">Het totaal van alle micro-organismen in een omgeving</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Microbiota</td>
              <td className="px-4 py-3 align-top">De bacteriële component van het microbioom</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Huidflora</td>
              <td className="px-4 py-3 align-top">Veelgebruikte, maar verouderde term</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Binnen het huidmicrobioom zijn sommige micro-organismen commensalen, dus normale bewoners, terwijl andere
        potentieel pathogeen zijn.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 4. Voorbeelden van commensalen en potentiële pathogenen op de huid
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Commensalen
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Potentieel pathogenen
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">
                <em>Cutibacterium acnes</em>
              </td>
              <td className="px-4 py-3 align-top">
                <em>Staphylococcus aureus</em>
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">
                <em>Staphylococcus epidermidis</em>
              </td>
              <td className="px-4 py-3 align-top">
                <em>Streptococcus pyogenes</em>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <span className="font-semibold">Aandachtsvraag:</span>
        {` Wat is het verschil tussen microbiota en microbioom?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Microbiota is vooral de bacteriële component; microbioom is het totaal van alle micro-organismen.`}
      </p>
    </div>
  )
}
