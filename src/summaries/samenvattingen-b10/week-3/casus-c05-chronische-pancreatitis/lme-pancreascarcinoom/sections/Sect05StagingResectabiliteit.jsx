export default function Sect05StagingResectabiliteit () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Stadiëring en resectabiliteit</h2>
      <p>
        Pancreascarcinoom wordt ingedeeld in <strong className="text-slate-900 dark:text-slate-100">4 stadia</strong>,
        afhankelijk van twee hoofdpunten:
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>of er <strong className="text-slate-900 dark:text-slate-100">metastasen</strong> zijn, en</li>
        <li>hoe sterk de tumor betrokken is bij <strong className="text-slate-900 dark:text-slate-100">bloedvaten</strong>.</li>
      </ol>
      <p>
        Bij de stadiëring kijk je vooral naar contact met de <strong className="text-slate-900 dark:text-slate-100">
          truncus coeliacus
        </strong>, de <strong className="text-slate-900 dark:text-slate-100">arteria mesenterica superior</strong>, de{' '}
        <strong className="text-slate-900 dark:text-slate-100">arteria hepatica communis</strong> en de{' '}
        <strong className="text-slate-900 dark:text-slate-100">vena porta/vena mesenterica superior</strong>. Internationale criteria, zoals de{' '}
        <strong className="text-slate-900 dark:text-slate-100">NCCN-criteria</strong>, worden vaak gebruikt. In Nederland worden ook <strong className="text-slate-900 dark:text-slate-100">DPCG-criteria</strong> gebruikt, waarbij soms iets sneller een hogere stadiëring wordt gegeven.
      </p>
      <p>De belangrijkste categorieën zijn:</p>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Tabel 2. Globale stadia bij pancreascarcinoom</strong>
      </p>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Stadium</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Kenmerken</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Resectabel</td>
              <td className="p-3 align-top">Geen relevante betrokkenheid van belangrijke vaten, geen metastasen</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Borderline resectabel</td>
              <td className="p-3 align-top">Beperkte vaatbetrokkenheid; operatie mogelijk na goede selectie of neoadjuvante behandeling</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Locally advanced / lokaal irresectabel</td>
              <td className="p-3 align-top">Meer uitgesproken vaatbetrokkenheid; primaire operatie meestal niet mogelijk</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Gemetastaseerd</td>
              <td className="p-3 align-top">Uitzaaiingen op afstand; operatie niet primair</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij de metastasering zijn de <strong className="text-slate-900 dark:text-slate-100">lever</strong>, het{' '}
        <strong className="text-slate-900 dark:text-slate-100">peritoneum</strong>, de <strong className="text-slate-900 dark:text-slate-100">
          longen
        </strong> en <strong className="text-slate-900 dark:text-slate-100">extragionale lymfeklieren</strong> de belangrijkste locaties. Een groot deel van de patiënten heeft bij diagnose al gemetastaseerde ziekte.
      </p>
    </div>
  )
}
