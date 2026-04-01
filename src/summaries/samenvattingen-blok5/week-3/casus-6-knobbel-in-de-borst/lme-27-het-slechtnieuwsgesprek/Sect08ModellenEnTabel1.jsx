export default function Sect08ModellenEnTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Modellen voor slechtnieuwsgesprekken</h2>
      <p>
        Er zijn meerdere modellen die helpen bij het voeren van slechtnieuwsgesprekken. Ze zijn onderling goed
        vergelijkbaar. Het maakt daarom niet uit welk model je kiest, zolang je maar een duidelijke aanpak hebt die de
        belangrijkste onderdelen dekt.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Overzicht van modellen voor slechtnieuwsgesprekken</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Model
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Uitwerking van de letters
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kernidee
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                <strong>SAD NEWS</strong>
              </td>
              <td className="px-4 py-3 align-top">
                Set up and sit down, Ask don’t tell, Deliver the news, No fancy lingo, Expect/permit/respond to emotion,
                Wait, Support and summarize
              </td>
              <td className="px-4 py-3 align-top">
                Legt extra nadruk op de periode <strong>na</strong> het brengen van het slechte nieuws
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                <strong>SPIKES</strong>
              </td>
              <td className="px-4 py-3 align-top">
                Setting up the interview, Assessing the patient’s perception, Obtaining the patient’s invitation, Giving
                knowledge and information, Addressing emotions with empathic responses, Strategy and summary
              </td>
              <td className="px-4 py-3 align-top">Bekend model met een duidelijke opbouw van het gesprek</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                <strong>ABCDE</strong>
              </td>
              <td className="px-4 py-3 align-top">
                Advance preparation, Build a therapeutic environment/relationship, Communicate well, Deal with patient
                and family reactions, Encourage and validate emotions
              </td>
              <td className="px-4 py-3 align-top">Benadrukt voorbereiding, communicatie en emotionele reacties</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                <strong>BREAKS</strong>
              </td>
              <td className="px-4 py-3 align-top">Background, Rapport, Explore, Announce, Kindling, Summarize</td>
              <td className="px-4 py-3 align-top">Geeft een compacte volgorde van stappen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                <strong>CLEMENS</strong>
              </td>
              <td className="px-4 py-3 align-top">
                Context voorbereiden, Luisteren, Evalueren en inschatten, Meedelen, Emoties laten ventileren, Nazorg,
                Strategie en samenvatting
              </td>
              <td className="px-4 py-3 align-top">Richt zich op voorbereiding, het meedelen en de nazorg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Het SAD NEWS-model is gebaseerd op het SPIKES-protocol, maar legt meer nadruk op wat er gebeurt nadat het slechte
        nieuws is gebracht. Dat is belangrijk, omdat een patiënt dan tijd nodig kan hebben om de boodschap te laten
        landen. Pas wanneer de patiënt zover is, kun je verdergaan met vragen, zorgen en vervolgstappen.
      </p>
    </div>
  )
}
