export default function Sect10BehandelingEnOrgaanschadeTabel3() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling en orgaanschade</h2>
      <p>
        Bepaalde behandelingen zijn gekoppeld aan specifieke orgaanschade. Dat helpt om late effecten beter te begrijpen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Voorbeelden van behandeling gerelateerde orgaanschade</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Behandeling
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Typisch late effect
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Cisplatine / carboplatine</td>
              <td className="px-4 py-3 align-top">Nefrotoxiciteit, schade aan de gehoorzenuw</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Vincristine</td>
              <td className="px-4 py-3 align-top">Perifere neuropathie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Doxorubicine</td>
              <td className="px-4 py-3 align-top">Cardiotoxiciteit</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Bleomycine</td>
              <td className="px-4 py-3 align-top">Pulmonale fibrose</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Cyclofosfamide</td>
              <td className="px-4 py-3 align-top">Hemorragische cystitis</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Methotrexaat, 5-FU, 6-MP</td>
              <td className="px-4 py-3 align-top">Myelosuppressie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij de hartfunctie is vooral het gebruik van anthracyclines belangrijk. Dat geeft een groter risico op verminderde
        hartfunctie. Dat risico wordt bepaald door:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de cumulatieve dosering;</li>
        <li>bestraling.</li>
      </ul>
      <p>
        Bij survivors die anthracyclines en/of bestraling van de borstkas hebben gehad, wordt daarom regelmatig een echo van
        het hart gemaakt. Als de hartfunctie achteruitgaat, wordt geprobeerd die met medicatie te stabiliseren. In ernstige
        gevallen kan zelfs een harttransplantatie nodig zijn.
      </p>
      <p>Bij het hart worden verder genoemd:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>meer ritmestoornissen;</li>
        <li>meer klepproblemen;</li>
        <li>meer infarcten.</li>
      </ul>
      <p>
        Ook tweede tumoren zijn een belangrijk orgaanspecifiek langetermijneffect. De risico’s daarvan zijn onder andere
        gekoppeld aan:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>bepaalde chemotherapie, zoals doxorubicine en topo-isomerase-remmers;</li>
        <li>bestraling;</li>
        <li>erfelijkheid/genetische predispositie.</li>
      </ul>
      <p>Plaatsen waar tweede tumoren kunnen ontstaan zijn onder meer:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>hersenen;</li>
        <li>schildklier;</li>
        <li>borst;</li>
        <li>darm;</li>
        <li>beenmerg.</li>
      </ul>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-950 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtsvraag:</strong> Verandert het risico op een tweede
          tumor met de tijd? <strong className="text-amber-950 dark:text-amber-50">Mini-antwoord:</strong> Ja, de cumulatieve
          incidentie blijft toenemen; na ongeveer 20 jaar heeft circa 2,5% een nieuwe vorm van kanker gehad, en na 40 jaar
          ongeveer 10%.
        </p>
      </div>
    </div>
  )
}
