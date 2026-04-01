export default function Sect06WatValtOpAanHetKlachtenpatroon() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wat valt op aan het klachtenpatroon?</h2>
      <p>
        Als je de casussen naast elkaar zet, zie je een oplopende variatie in klachten. Sommige patiënten hebben vooral inspanningsgebonden klachten, zoals pijn na een bepaalde loopafstand. Andere patiënten hebben klachten die duidelijk ernstiger zijn, zoals nachtelijke pijn of klachten in rust.
      </p>
      <p>
        Dat verschil is belangrijk. Het helpt je om te begrijpen dat perifere vaatziekten zich niet bij iedereen op dezelfde manier uiten. De ene patiënt merkt vooral dat hij minder ver kan lopen, terwijl een ander juist last heeft van pijn of doofheid die ook zonder inspanning aanwezig is. Ook het verschil tussen links en rechts is relevant, omdat vaatproblemen vaak asymmetrisch kunnen zijn.
      </p>
      <p>
        De aanwezigheid van risicofactoren speelt in alle casussen een grote rol. Je ziet terugkerend bijvoorbeeld hypertensie, diabetes mellitus en roken. Ook een voorgeschiedenis met cardiovasculaire problemen, zoals myocardinfarct of TIA/CVA, past in dit beeld. Deze gegevens zijn niet los van elkaar te zien: ze vormen samen de klinische context waarin je de CT-scan moet beoordelen.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. Klinische signalen die je in deze module leert meewegen</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Signaal</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Waarom is het belangrijk?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Pijn bij lopen na een vaste afstand</td>
                <td className="px-4 py-3">Wijst op inspanningsgebonden doorbloedingsproblemen</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Links-rechts verschil</td>
                <td className="px-4 py-3">Kan helpen om de aangedane zijde te herkennen</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Nachtpijn of rustpijn</td>
                <td className="px-4 py-3">Past bij ernstiger klachten</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Krachtverlies, zwakte of atrofie</td>
                <td className="px-4 py-3">Geeft aan dat de functie van het been duidelijk beïnvloed kan zijn</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Wonden</td>
                <td className="px-4 py-3">Belangrijk om de ernst van de vaatproblematiek te beoordelen</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Koude voeten</td>
                <td className="px-4 py-3">Klinisch relevant bij beoordeling van de doorbloeding</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
