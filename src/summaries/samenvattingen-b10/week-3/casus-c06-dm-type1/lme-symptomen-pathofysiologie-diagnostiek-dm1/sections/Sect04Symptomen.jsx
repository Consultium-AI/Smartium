export default function Sect04Symptomen () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Symptomen van diabetes mellitus type 1
      </h2>
      <p>DM-1 kan zich op verschillende manieren presenteren. De klachten ontstaan vaak vrij plotseling.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Belangrijke symptomen van DM-1 en hun verklaring
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Symptoom</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Verklaring</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Gewichtsverlies</td>
              <td className="p-3 align-top">Afbraak van vet en spierweefsel door insulinetekort</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Moeheid / verlies van energie</td>
              <td className="p-3 align-top">Cellen nemen minder glucose op en kunnen minder efficiënt energie maken</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Polyurie</td>
              <td className="p-3 align-top">Glucose in de urine trekt water mee, waardoor veel plassen ontstaat</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Polydipsie</td>
              <td className="p-3 align-top">Verlies van vocht door polyurie leidt tot dorst</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Polyfagie</td>
              <td className="p-3 align-top">Verlaagde verzadigingshormonen en veranderde energiebalans geven meer honger</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Jeuk</td>
              <td className="p-3 align-top">Mogelijk door veranderde vochtbalans van de huid</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Schimmelinfecties van de huid</td>
              <td className="p-3 align-top">Door hoge glucose en verminderde weerstand</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Diabetische ketoacidose</td>
              <td className="p-3 align-top">
                Misselijkheid, braken, uitdroging, snelle en diepe ademhaling, zoet ruikende adem, verwijde pupillen en wazig zicht
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een klassiek en heel herkenbaar symptoom is <strong className="text-slate-900 dark:text-slate-100">polyurie</strong>, letterlijk: veel plassen. Dat ontstaat doordat glucose bij hoge bloedwaarden in de urine terechtkomt. Glucose in de urine verhoogt de osmolaliteit van de urine, waardoor water wordt meegesleurd. Het gevolg is vochtverlies en dus dorst.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Klinisch beeld in de praktijk</h3>
      <p>
        Niet alleen “zoete urine” kan opvallen. Ook moeheid, duidelijke afname van gewicht, veel drinken en veel plassen passen bij DM-1. Bij kinderen en jongeren kunnen klachten soms snel en heftig ontstaan. Soms wordt iemand zelfs met een ketoacidose opgenomen.
      </p>
      <p>
        Bij een ketoacidose is <strong className="text-slate-900 dark:text-slate-100">ingrijpen van levensbelang</strong>.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Waarom jeuk en schimmelinfecties?</h3>
      <p>
        Jeuk kan samenhangen met een droge huid en met veranderde vochtbalans door een hoge osmolaliteit. Schimmelinfecties ontstaan makkelijker doordat de weerstand bij hoge bloedglucose minder goed werkt en de huid kwetsbaarder is.
      </p>
    </div>
  )
}
