export default function Sect06Risicofactoren() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Risicofactoren: exogeen en endogeen</h2>
      <p>
        Risicofactoren kunnen worden ingedeeld in exogeen en endogeen. Exogene factoren zorgen voor een verstoring van de barrièrefunctie van de huid. Zo’n verstoring wordt ook wel een porte d’entrée genoemd: een huiddefect waardoor ziekteverwekkers naar binnen kunnen en een infectie kunnen veroorzaken. Endogene factoren verhogen op andere manieren het risico op huidinfecties, bijvoorbeeld door slechtere doorbloeding of een verminderde afweer.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Risicofactoren voor erysipelas en cellulitis</h3>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Endogene risicofactoren</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Exogene risicofactoren</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className="p-3 align-top">Oedeem</td>
              <td className="p-3 align-top">Insectenbeet</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Gebruik van afweerremmende medicatie</td>
              <td className="p-3 align-top">Huidaandoening zoals psoriasis of eczeem</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Roken</td>
              <td className="p-3 align-top">Dermatomycose</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Diabetes mellitus</td>
              <td className="p-3 align-top">Heelkundige ingrepen</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Perifeer arterieel vaatlijden</td>
              <td className="p-3 align-top" />
            </tr>
          </tbody>
        </table>
      </div>
      <p>Belangrijke uitleg bij deze risicofactoren:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Roken heeft een nadelig effect op de (wond)genezing.</li>
        <li>
          Bij diabetes mellitus is er verminderd gevoel door polyneuropathie, waardoor sneller wondvorming ontstaat. Daarnaast zijn er vaak (micro)vasculaire problemen en een verminderde immuunrespons.
        </li>
        <li>Oedeem geeft een verstoorde vascularisatie, waardoor de genezing minder goed verloopt.</li>
        <li>
          Afweerremmende medicatie, bijvoorbeeld steroïden, vermindert de werking van het immuunsysteem en kan ook de huid verdunnen.
        </li>
        <li>Bij perifeer arterieel vaatlijden is de vascularisatie verstoord, waardoor genezing minder goed verloopt.</li>
        <li>Dermatomycose en huidaandoeningen zoals psoriasis of eczeem kunnen door jeuk en krabben de huidbarrière doorbreken.</li>
        <li>Een insectenbeet of heelkundige ingreep doorbreekt eveneens de huidbarrière.</li>
        <li>
          Soms kan een dermatomycose ook meespelen als een endogene risicofactor, doordat lokale inflammatie de huidbarrière verzwakt.
        </li>
      </ul>
      <p>
        Aandachtsvraag: waarom is diabetes een risicofactor?
        {'  '}
        Mini-antwoord: door minder gevoel, meer kans op wondjes, slechtere doorbloeding en een verminderde afweer.
      </p>
    </div>
  )
}
