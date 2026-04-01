export default function Sect11MetoprololEnCyp2d6() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Toepassing in de kliniek: metoprolol en CYP2D6</h2>
      <p>
        Metoprolol is een lipofiele selectieve bètablokker. Het aangrijpingspunt is de β1-receptor op cardiale cellen. Metoprolol wordt in de lever afgebroken via CYP2D6 tot inactieve metabolieten.
      </p>
      <p>Metoprolol wordt gebruikt bij onder andere:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>hypertensie,</li>
        <li>coronairlijden,</li>
        <li>angina pectoris,</li>
        <li>myocardinfarct,</li>
        <li>hartfalen,</li>
        <li>aritmieën.</li>
      </ul>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Gevolgen van CYP2D6-variatie</h3>
      <p>
        Bij een ultrarapid metaboliser wordt metoprolol sneller omgezet in een inactieve metaboliet. Daardoor is de blootstelling aan de actieve stof lager en kan de bloeddruk mogelijk minder goed dalen. Soms is dan een hogere dosis nodig.
      </p>
      <p>
        Bij co-medicatie is dit ook belangrijk. Fluoxetine is een sterke CYP2D6-remmer. Als fluoxetine samen met metoprolol wordt gebruikt, wordt de klaring van metoprolol verminderd. Daardoor stijgen de spiegels van metoprolol, met risico op bradycardie en hypotensie. Als fluoxetine wordt afgebouwd, verdwijnt die remming weer en kunnen de metoprololspiegels dalen, waardoor de bloeddrukcontrole minder goed kan worden.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Wat als er geen farmacogenetisch profiel beschikbaar is?</h3>
      <p>Er zijn drie mogelijkheden:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>preventief genotyperen vóór start van de behandeling;</li>
        <li>een andere antihypertensivum kiezen dat minder afhankelijk is van hepatische klaring, bijvoorbeeld atenolol of sotalol;</li>
        <li>metoprolol starten in de gebruikelijke dosering en de dosis ophogen op geleide van effect.</li>
      </ul>
    </div>
  )
}
