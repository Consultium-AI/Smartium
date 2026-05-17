export default function Sect04OperatiesSlokdarm() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Operaties aan de slokdarm</h2>
      <p>
        Welke operatie gekozen wordt, hangt vooral af van de <strong className="text-slate-900 dark:text-slate-100">tumorlocatie</strong> en de toestand van de patiënt. Ook eerdere behandelingen spelen mee. De slokdarm kan worden vervangen door een <strong className="text-slate-900 dark:text-slate-100">buismaag</strong>. Dat betekent dat van de maag een smalle buis wordt gemaakt die als nieuwe verbinding dient. In bijzondere gevallen kan ook een{' '}
        <strong className="text-slate-900 dark:text-slate-100">coloninterpositie</strong> nodig zijn; dat gebeurt zelden, bijvoorbeeld bij tumorinfiltratie van maag en slokdarm of na eerdere maagchirurgie.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">
        Tabel 2. Operatiekeuze bij slokdarm- en GEJ-tumoren
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Locatie / situatie</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Voorkeursoperatie</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Kenmerken</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Cervicaal</td>
              <td className="p-3 align-top">dCRT; bij bewezen recidief en fitte patiënt salvage-operatie</td>
              <td className="p-3 align-top">Grote operatie, vaak plaveiselcelcarcinoom, moeilijke aansluiting van buismaag</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Hoog-midden thoracaal</td>
              <td className="p-3 align-top">McKeown</td>
              <td className="p-3 align-top">Begin in thorax, daarna buik, daarna hals; cervicale anastomose</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Distaal thoracaal</td>
              <td className="p-3 align-top">Ivor-Lewis</td>
              <td className="p-3 align-top">Begin in buik, daarna thorax; intrathoracale anastomose</td>
            </tr>
            <tr>
              <td className="p-3 align-top">GEJ zonder positieve thoracale klieren, of bij hoge leeftijd / cardiopulmonale comorbiditeit</td>
              <td className="p-3 align-top">Transhiatale resectie</td>
              <td className="p-3 align-top">Minder grote operatie, via buik en hals</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Eerder maagchirurgie / tumorinfiltratie maag en slokdarm</td>
              <td className="p-3 align-top">Coloninterpositie</td>
              <td className="p-3 align-top">Zeldzaam, ongeveer 1%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">McKeown-procedure</h3>
      <p>
        Bij de <strong className="text-slate-900 dark:text-slate-100">McKeown-resectie</strong> wordt eerst in de thorax geopereerd, daarna in de buik en vervolgens in de hals. De aansluiting van de buismaag gebeurt in de hals, dus er ontstaat een{' '}
        <strong className="text-slate-900 dark:text-slate-100">cervicale anastomose</strong>. Dit is vooral passend bij hoog en midden-thoracale tumoren.
      </p>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Nadeel:</strong> de halsnaad lekt meer en er is risico op
        beschadiging van de <strong className="text-slate-900 dark:text-slate-100">nervus recurrens</strong>, de zenuw die
        de stembanden aanstuurt.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">Ivor-Lewis-procedure</h3>
      <p>
        De <strong className="text-slate-900 dark:text-slate-100">Ivor-Lewis</strong> begint in de buik. Daar wordt de
        lymfeklierdissectie gedaan en de buismaag gemaakt. Daarna volgt de thoracale fase met losmaken van de slokdarm en een{' '}
        <strong className="text-slate-900 dark:text-slate-100">intra-thoracale anastomose</strong>. Dit is de meest voorkomende slokdarmoperatie in Nederland.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">Transhiatale operatie</h3>
      <p>
        De <strong className="text-slate-900 dark:text-slate-100">transhiatale operatie</strong> gaat via de buik en de hals,
        zonder thoracotomie. De slokdarm wordt zoveel mogelijk van onder en van boven losgemaakt. Het laatste stukje wordt
        &quot;blind&quot; gestript. Dit is minder groot dan een thoracale operatie en wordt gebruikt bij patiënten met
        ernstige cardiopulmonale comorbiditeit of als men liever uit de thorax blijft.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="m-0 text-slate-800 dark:text-amber-100">
          <strong className="text-slate-900 dark:text-amber-50">Aandachtsvraag:</strong> Waarom bepaalt de tumorlocatie zo
          sterk de operatie?
        </p>
        <p className="m-0 text-slate-800 dark:text-amber-100">
          <strong className="text-slate-900 dark:text-amber-50">Mini-antwoord:</strong> Omdat de chirurg de tumor ruim moet kunnen verwijderen én de nieuwe aansluiting zo veilig mogelijk moet maken, en dat verschilt per niveau in de slokdarm.
        </p>
      </div>
    </div>
  )
}
