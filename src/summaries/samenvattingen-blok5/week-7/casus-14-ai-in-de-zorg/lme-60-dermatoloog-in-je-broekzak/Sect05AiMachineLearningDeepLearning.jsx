export default function Sect05AiMachineLearningDeepLearning() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Artificial Intelligence, Machine Learning en Deep Learning
      </h2>
      <p>
        Bij huidkanker-apps komen vaak drie begrippen terug: Artificial Intelligence (AI), Machine Learning en Deep
        Learning.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 3. AI, Machine Learning en Deep Learning
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Begrip
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kernidee
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">AI</td>
              <td className="px-4 py-3 align-top">
                Verzamelnaam voor methoden waarbij een computer taken uitvoert die we als “intelligent” zien
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Machine Learning</td>
              <td className="px-4 py-3 align-top">
                Algoritmen leren van data en gebruiken wat ze geleerd hebben om beslissingen te maken
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Deep Learning</td>
              <td className="px-4 py-3 align-top">
                Neurale netwerken leren zelf de belangrijke kenmerken uit data, door herhaalde training
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij Machine Learning haalt de ontwikkelaar vaak zelf kenmerken uit beelden, bijvoorbeeld kleur of grootte van een
        huidvlek. Bij Deep Learning krijgt het netwerk juist de hele foto en leert het zelf welke kenmerken belangrijk
        zijn.
      </p>
      <p>
        Deep Learning werkt met neurale netwerken: lagen van met elkaar verbonden nodes, een beetje zoals een netwerk
        van neuronen en synapsen. Bij beeldherkenning spreekt men vaak van een Convolutional Neural Network (CNN). Dat
        netwerk gebruikt convoluties: filtering op het beeld om relevante informatie eruit te halen. Daarna volgen
        meerdere lagen, en uiteindelijk wordt een classificatie gemaakt, bijvoorbeeld: auto, truck, of in medische
        toepassingen een bepaalde huidafwijking.
      </p>
    </div>
  )
}
