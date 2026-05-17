export default function Sect11Remming () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Remming van de pancreassecretie</h2>
      <p>Naast stimulerende signalen zijn er ook remmende signalen.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Trypsine</strong> speelt hierin een belangrijke rol.
          Trypsine breekt factoren af die in het duodenum de afgifte van secretine en CCK stimuleren. Daardoor ontstaat een{' '}
          <strong className="text-slate-900 dark:text-slate-100">negatieve feedbacklus</strong> voor de
          (pro-)enzymsecretie.
        </li>
        <li>
          Een <strong className="text-slate-900 dark:text-slate-100">stijging van de pH</strong> in het darmlumen zorgt voor
          vermindering van <strong className="text-slate-900 dark:text-slate-100">secretinesecretie</strong> door het
          duodenum. Daardoor ontstaat ook een negatieve feedbacklus voor de bicarbonaatsecretie.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Somatostatine</strong> en{' '}
          <strong className="text-slate-900 dark:text-slate-100">pancreas-polypeptide</strong> kunnen de secretie van de
          exocriene pancreas verminderen.
        </li>
      </ul>
    </div>
  )
}
