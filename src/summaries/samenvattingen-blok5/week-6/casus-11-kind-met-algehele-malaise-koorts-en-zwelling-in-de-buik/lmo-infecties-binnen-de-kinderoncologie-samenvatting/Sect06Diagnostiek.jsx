export default function Sect06Diagnostiek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Diagnostiek</h2>
      <p>Bij infecties in deze groep moet diagnostiek vroeg en breed worden ingezet. De gebruikelijke diagnostiek kan namelijk tekortschieten.</p>
      <p>
        Serologie is vaak onbetrouwbaar, omdat patiënten soms weinig antistoffen maken of al immunoglobulinen krijgen. Daarom is directe verwekkerdetectie vaak bruikbaarder, bijvoorbeeld met PCR. Kweken kunnen negatief blijven als een patiënt al antibiotica gebruikt. Opportunistische verwekkers zijn bovendien soms moeilijk te kweken en vereisen gericht laboratoriumonderzoek of speciale voedingsbodems.
      </p>
      <p>
        Soms blijft de verwekker ondanks herhaald onderzoek onvindbaar. Een kind met CGD en een leverlaesie laat dat goed zien: herhaald onderzoek toonde geen infectieuze verwekker aan, terwijl het klinische beeld en de histologie wel duidelijk in de richting van een infectieuze complicatie wezen. Dan kan toch brede behandeling nodig zijn.
      </p>
      <p>
        Invasieve diagnostiek, zoals een biopt, kan dus noodzakelijk zijn. Ook overleg met de arts-microbioloog is belangrijk, zodat kostbaar materiaal goed verwerkt wordt en zeldzamere verwekkers niet gemist worden.
      </p>

      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 pt-2">Tabel 4. Belangrijke diagnostische principes</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="w-full min-w-[36rem] border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800/80">
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Probleem
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Gevolg voor de diagnostiek
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Serologie vaak onbetrouwbaar</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">liever directe verwekkerdetectie, bijvoorbeeld PCR</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Kweken onder antibioticagebruik kunnen negatief zijn</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">negatieve kweek sluit infectie niet uit</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Opportunisten zijn soms lastig aantoonbaar</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">gericht microbiologisch onderzoek nodig</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Co-infecties komen vaker voor</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">na één gevonden pathogeen soms verder zoeken</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Verwekker blijft onduidelijk</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">invasieve diagnostiek kan nodig zijn</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
