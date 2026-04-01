export default function Sect04CasusVanKees() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Casus van Kees: mediastinale massa met snel progressieve klachten
      </h2>
      <p>Kees is een 12-jarige jongen met:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>hoesten;</li>
        <li>kortademigheid;</li>
        <li>minder goed kunnen fietsen;</li>
        <li>een dikker gezicht;</li>
        <li>geen effect van pufjes of antibiotica.</li>
      </ul>
      <p>
        Hier zijn duidelijke alarmsignalen aanwezig. Omdat klachten die hierbij passen snel kunnen verergeren, moet het kind
        vandaag nog beoordeeld worden.
      </p>
      <p>
        Bij beoordeling blijkt Kees echt kortademig. Hij kan alleen rechtop zitten, spreekt in korte zinnen, ademt snel en
        heeft nog een goede saturatie. Daarna wordt een foto van de borst gemaakt en blijkt er sprake van een verbreed
        mediastinum.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Waarom dit direct aandacht vraagt</h3>
      <p>Bij Kees is er sprake van:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>een verschuiving en compressie van de trachea;</li>
        <li>mogelijk een vena cava superior syndroom;</li>
        <li>risico op ernstige problemen bij het plat laten liggen of onder narcose brengen.</li>
      </ul>
      <p>
        Zelfs een CT-scan zonder sedatie kan al problemen geven, omdat de massa de circulatie en luchtweg kan beïnvloeden.
        Daarom is voorzichtigheid geboden met onderzoek onder narcose. In het verloop blijkt dat eerst prednison wordt
        gestart, waarna de zwelling afneemt en aanvullende diagnostiek onder narcose veiliger wordt.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Aanvullende diagnostiek bij verdenking op lymfoom of leukemie
      </h3>
      <p>Bij een mogelijke non-Hodgkin-lymfoom of leukemie kunnen verschillende onderzoeken nodig zijn.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Aanvullend onderzoek bij hemato-oncologische verdenking
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Onderzoek
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Waarvoor bedoeld
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Lymfeklierbiopt</td>
              <td className="px-4 py-3 align-top">
                Bevestigen van de diagnose met immunofenotypering en pathologisch onderzoek
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Beenmergpunctie</td>
              <td className="px-4 py-3 align-top">
                Beoordelen van beenmerginfiltratie; bij &gt;25% blasten is er per definitie sprake van leukemie
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Lumbaalpunctie</td>
              <td className="px-4 py-3 align-top">Nagaan of er sprake is van CZS-uitbreiding</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Bloedonderzoek</td>
              <td className="px-4 py-3 align-top">
                Ondersteunend onderzoek; normaal bloed sluit een extramedullaire leukemie niet uit
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Urine VMA/HVA</td>
              <td className="px-4 py-3 align-top">Ondersteuning bij verdenking op neuroblastoom</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">MIBG-scan</td>
              <td className="px-4 py-3 align-top">Verdere ondersteuning bij neuroblastoom</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij Kees blijkt uiteindelijk sprake te zijn van een T-NHL en wordt verder behandeld volgens het Euro-LB protocol.
      </p>
      <div className="rounded-xl border border-emerald-200 dark:border-emerald-600/40 bg-emerald-50 dark:bg-emerald-950/65 p-4">
        <p className="text-emerald-950 dark:text-emerald-100">
          <strong className="text-emerald-950 dark:text-emerald-50">Klinische relevantie:</strong> een kind met mediastinale
          verbreding en benauwdheid is potentieel instabiel; de luchtweg en circulatie kunnen snel verslechteren.
        </p>
      </div>
    </div>
  )
}
