export default function Sect10Bijwerkingen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Bijwerkingen van chemoradiotherapie</h2>
      <p>
        dCRT is een zware behandeling. De bijwerkingen zijn belangrijk om te kennen, zeker omdat ze de kwaliteit van
        leven sterk kunnen beïnvloeden.
      </p>
      <p>De meest genoemde bijwerkingen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">radiatie-oesofagitis</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">pijn</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">passageklachten</strong>.
        </li>
      </ul>
      <p>
        Voor veel patiënten betekent dit een periode waarin zij niet zelf kunnen eten en drinken en afhankelijk zijn van
        een <strong className="text-slate-900 dark:text-slate-100">sonde voor voeding</strong>. Dat maakt de behandeling
        niet alleen lichamelijk, maar ook praktisch en emotioneel zwaar.
      </p>
      <p>Daarnaast komen ook deze bijwerkingen voor:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">huidirritatie</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">vermoeidheid</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">radiatiepneumonitis</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">hartschade</strong> aan de coronairen en kleppen;
        </li>
        <li>
          late bijwerkingen zoals <strong className="text-slate-900 dark:text-slate-100">stenose</strong>,{' '}
          <strong className="text-slate-900 dark:text-slate-100">fistelvorming</strong> en{' '}
          <strong className="text-slate-900 dark:text-slate-100">ulcera</strong>.
        </li>
      </ul>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 9. Bijwerkingen van dCRT</h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Type bijwerking
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Voorbeelden
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Acute klachten</td>
                <td className="px-4 py-3 align-top">Radiatie-oesofagitis, pijn, passageklachten</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Functionele gevolgen</td>
                <td className="px-4 py-3 align-top">Tijdelijk niet kunnen eten of drinken, sondevoeding</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Overige klachten</td>
                <td className="px-4 py-3 align-top">Huidirritatie, vermoeidheid</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Organschade</td>
                <td className="px-4 py-3 align-top">Radiatiepneumonitis, hartschade</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Late bijwerkingen</td>
                <td className="px-4 py-3 align-top">Stenose, fistel, ulcera</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>
        Vooral bij <strong className="text-slate-900 dark:text-slate-100">oudere en kwetsbare patiënten</strong> is dCRT
        een zware behandeling. Het idee dat iemand maandenlang niet normaal kan eten en drinken laat goed zien waarom
        afwegingen rond deze behandeling zo belangrijk zijn.
      </p>
    </div>
  )
}
