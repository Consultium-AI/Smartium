export default function Sect03WatIsBradycardie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wat is bradycardie en waardoor ontstaat het?</h2>
      <p>
        Bradycardie is gedefinieerd als een hartfrequentie van <span className="font-semibold">{'<'} 60 slagen per minuut overdag</span> of{' '}
        <span className="font-semibold">{'<'} 50 slagen per minuut {'\u2019s nachts'}</span>.
      </p>
      <p>
        Ritmeproblemen ontstaan door afwijkingen in de <span className="font-semibold">impulsformatie</span> of de{' '}
        <span className="font-semibold">impulsgeleiding</span>. Bij bradycardie zijn er twee hoofdmechanismen:
      </p>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <span className="font-semibold">Falende impulsformatie</span>: de sinusknoop vuurt niet of te traag.
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Een voorbeeld is <span className="font-semibold">Sick Sinus Syndroom</span>, waarbij fibrose van de sinusknoop optreedt, vaak bij ouderen.
          </p>
        </li>
        <li>
          <span className="font-semibold">Falende geleiding</span>: de impuls wordt wel gevormd, maar geblokkeerd op weg naar de ventrikels.
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Dit gebeurt bijvoorbeeld bij een <span className="font-semibold">AV-blok</span> in de AV-knoop of in de bundel van His.
          </p>
        </li>
      </ol>
      <p>
        Bradycardie kan ook ontstaan door invloeden van buitenaf, dus <span className="font-semibold">extrinsiek</span>, of door structurele schade van het hart zelf, dus{' '}
        <span className="font-semibold">intrinsiek</span>.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Oorzaken van bradycardie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Extrinsiek</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Intrinsiek</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Verhoogde intracraniële druk</td>
              <td className="px-4 py-3 align-top">{'Lev\u2019s disease (verkalking geleidingssysteem)'}</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Hoge vagale tonus</td>
              <td className="px-4 py-3 align-top">Sick Sinus Syndroom (fibrose door veroudering)</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Hypothermie</td>
              <td className="px-4 py-3 align-top">Acuut myocardinfarct, vooral onderwand</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Bètablokkers / calciumantagonisten</td>
              <td className="px-4 py-3 align-top">Myocarditis</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Hypothyreoïdie</td>
              <td className="px-4 py-3 align-top" />
            </tr>
          </tbody>
        </table>
      </div>
      <p>Bij extrinsieke oorzaken is het hartweefsel in principe gezond en is een pacemaker vaak niet nodig als de oorzaak weggenomen kan worden.</p>
    </div>
  )
}
