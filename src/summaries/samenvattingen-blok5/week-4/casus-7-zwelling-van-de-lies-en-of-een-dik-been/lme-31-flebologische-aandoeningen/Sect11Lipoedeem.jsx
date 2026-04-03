export default function Sect11Lipoedeem() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Lipoedeem</h2>
      <p>
        Lipoedeem is een chronische aandoening die alleen bij vrouwen voorkomt. Het beeld wordt gekenmerkt door een
        disproportionele vetverdeling aan benen, billen en/of armen. Het gaat hier niet vooral om vocht, maar om
        toegenomen volume door vetweefsel. Daarom is de term eigenlijk ongelukkig.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Klinisch beeld</h3>
      <p>Typische kenmerken zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>disproportionele verdeling van vetweefsel</li>
        <li>snelle pijn of gemakkelijk blauwe plekken</li>
        <li>gevoeligheid bij aanraken</li>
        <li>moeheidsklachten van de extremiteiten</li>
        <li>geringe of geen invloed van gewichtsverlies op de disproportie</li>
        <li>geen afname van pijnklachten bij hoogleggen van het been</li>
      </ul>
      <p>
        Bij lipoedeem kunnen de benen erg gevoelig zijn en snel blauwe plekken vertonen na stoten. De pijnklachten en
        zwelling verdwijnen niet door hoog leggen en nemen juist toe bij lichamelijke inspanning. Dat kan leiden tot
        verminderde mobiliteit, beperkingen in het dagelijks functioneren en verlies van kwaliteit van leven.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Pathofysiologie</h3>
      <p>Het exacte pathofysiologische mechanisme is niet bekend. Mogelijke mechanismen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>hypertrofie en/of hyperplasie van adipocyten</li>
        <li>overmatige filtratie van vocht</li>
        <li>capillaire fragiliteit</li>
      </ul>
      <p>In latere fasen speelt overgewicht vaak ook een extra rol.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Diagnostiek</h3>
      <p>Voor de diagnose moeten eerst andere oorzaken van volumetoename worden uitgesloten, zoals:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>lymfoedeem</li>
        <li>obesitas</li>
        <li>lipohypertrofie</li>
      </ul>
      <p>
        Een belangrijk onderscheid met obesitas is dat bij lipoedeem de vetverdeling dyscongruent is en dat afvallen daar
        vaak weinig invloed op heeft. Bij obesitas is het vetweefsel meer gegeneraliseerd verdeeld.
      </p>
      <p>
        Een klassiek teken is het cuff sign: de vetdepots eindigen abrupt boven de malleoli, terwijl voet en enkel
        slanker blijven. Bij aantasting van de armen kan een vergelijkbaar beeld zichtbaar zijn met slanke handen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 4. Kenmerken die passen bij lipoedeem
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Past bij lipoedeem?
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Dyscongruente vetverdeling
              </td>
              <td className="px-4 py-3 align-top">Ja</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Gering effect van gewichtsverlies op disproportie
              </td>
              <td className="px-4 py-3 align-top">Ja</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Snelle pijn / blauwe plekken
              </td>
              <td className="px-4 py-3 align-top">Ja</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Gevoeligheid bij aanraken
              </td>
              <td className="px-4 py-3 align-top">Ja</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Afname van pijn door hoogleggen
              </td>
              <td className="px-4 py-3 align-top">Nee</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">BMI ≥ 40 op zichzelf</td>
              <td className="px-4 py-3 align-top">Nee, dat past eerder bij obesitas</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">
            Korte vraag: Waarom is hoogleggen geen goede manier om lipoedeem van chronisch veneuze ziekte te
            onderscheiden?
          </strong>
          <br />
          <strong className="text-primary-900 dark:text-primary-200">Kort antwoord:</strong> Omdat klachten bij
          lipoedeem juist niet afnemen door hoogleggen, terwijl veneuze klachten dat vaak wel doen.
        </p>
      </div>
    </div>
  )
}
