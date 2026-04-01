export default function Sect14LokaleEnLadderBehandeling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Lokale medicamenteuze behandeling</h3>
      <p>
        Voor de eerste lijn worden vooral lokale corticosteroïden en vitamine-D-analogen gebruikt. In Nederland zijn
        daarnaast ook ditranol, koolteer en andere lokale middelen geregistreerd, maar ditranol wordt door de
        bijwerkingen en de praktische bezwaren niet meer als eerste keus gezien. Koolteershampoo kan nog wel nuttig zijn
        bij psoriasis van de behaarde hoofdhuid.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Behandelingsladder bij psoriasis</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Niveau
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Topicaal</td>
              <td className="px-4 py-3 align-top">corticosteroïden, calcipotriol/calcitriol, ditranol, teer</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Lichttherapie</td>
              <td className="px-4 py-3 align-top">PUVA, UVB</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Systemisch</td>
              <td className="px-4 py-3 align-top">
                biologics, ciclosporine, apremilast, methotrexaat, fumaraten, retinoïden
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Lokale stapsgewijze behandeling</h3>
      <p>De keuze hangt af van de locatie van de laesies.</p>
      <p>
        Bij volwassenen met erupties op het behaarde hoofd of op andere plekken dan het gelaat en/of lichaamsplooien:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>stap 1: klasse-3 corticosteroïd, eenmaal daags gedurende 4 weken</li>
        <li>
          stap 2: bij onvoldoende effect combinatie van vitamine-D-analoog in de ochtend en klasse-3 corticosteroïd in
          de avond gedurende 4 weken; eventueel een duurder maar handiger combinatiepreparaat
        </li>
        <li>
          stap 3: bij onvoldoende effect klasse-4 corticosteroïd, eenmaal daags gedurende 4 weken; bij hardnekkige
          schilfering kan een klasse-3 corticosteroïd onder occlusie worden overwogen
        </li>
      </ul>
      <p>Bij volwassenen met erupties in het gelaat en/of in lichaamsplooien, en bij kinderen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>stap 1: klasse-2 corticosteroïd, eenmaal daags gedurende 4 weken</li>
        <li>
          stap 2: bij onvoldoende effect combinatie van vitamine-D-analoog in de ochtend en klasse-2 corticosteroïd in de
          avond gedurende 4 weken
        </li>
      </ul>
    </div>
  )
}
