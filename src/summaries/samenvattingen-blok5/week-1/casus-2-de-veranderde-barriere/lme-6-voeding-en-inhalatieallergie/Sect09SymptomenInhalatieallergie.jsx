export default function Sect09SymptomenInhalatieallergie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Symptomen van inhalatieallergie</h2>
      <p>
        Ook hier is de anamnese de belangrijkste stap. Klachten kunnen per orgaan verschillen en ook algemene klachten
        geven.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Symptomen van inhalatieallergie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Orgaansysteem
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Mogelijke klachten
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Neus</td>
              <td className="px-4 py-3 align-top">Verstopte neus, loopneus, niezen, jeuk, neus ophalen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Ogen</td>
              <td className="px-4 py-3 align-top">Tranende ogen, roodheid, pijn, branderig gevoel, lichtgevoeligheid, zwelling</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Luchtwegen</td>
              <td className="px-4 py-3 align-top">Hoesten, piepen, benauwdheid, keelschrappen / jeuk keel</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Algemeen</td>
              <td className="px-4 py-3 align-top">
                Vermoeidheid, algehele malaise, zere keel, slaapproblemen, snurken, openmondslapen, hoofdpijn,
                concentratiestoornissen, verminderde schoolprestaties, verzuim op school of werk
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij kinderen wordt vaak eerst gedacht aan algemene malaise en hoesten. Doorvragen naar neussymptomen bevestigt
        vaak de diagnose allergische rhinoconjunctivitis.
      </p>
      <p>
        Bij chronische allergische rhinitis staat neusverstopping vaak op de voorgrond. Kinderen slapen dan slechter
        door de beperkte neuspassage en slapen vaak met de mond open.
      </p>
      <p>Neusklachten worden soms ook beschreven als:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>“runners”: vooral loopneus, niezen en jeuk;</li>
        <li>“blockers”: vooral neusverstopping.</li>
      </ul>
    </div>
  )
}
