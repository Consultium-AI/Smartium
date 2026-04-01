export default function Sect11VerdiepingCspEnSicd() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Verdieping: CSP en S-ICD</h2>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Conduction System Pacing (CSP)</h3>
      <p>
        Bij een standaard pacemakerdraad in de punt van de rechterkamer ontstaat soms een wat afwijkende, minder efficiënte samentrekking.{' '}
        <br />
        Bij <span className="font-semibold">Conduction System Pacing</span> wordt de draad direct in het eigen geleidingssysteem geplaatst, bijvoorbeeld in de <span className="font-semibold">bundel van His</span> of de{' '}
        <span className="font-semibold">linker bundeltak</span>. Het hart wordt dan via de eigen snelwegen geactiveerd. Dat is fysiologischer en helpt voorkomen dat de pompfunctie op termijn achteruitgaat.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Subcutane ICD (S-ICD)</h3>
      <p>
        Een <span className="font-semibold">S-ICD</span> is een ICD waarbij de draad niet via de bloedvaten in het hart ligt, maar <span className="font-semibold">onder de huid</span> langs het borstbeen loopt. De generator zit aan de zijkant van de borstkas, onder de oksel.
      </p>
      <p>Voordelen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>geen materiaal in de bloedbaan of in het hart;</li>
        <li>geen risico op ernstige complicaties zoals lead-endocarditis of vaatletsel.</li>
      </ul>
      <p>Beperkingen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">geen brady-pacing</span>;
        </li>
        <li>
          <span className="font-semibold">geen ATP</span>.
        </li>
      </ul>
      <p>Daardoor is een S-ICD vooral geschikt voor jonge patiënten die wel ritmebewaking nodig hebben, maar geen pacing nodig hebben.</p>
    </div>
  )
}
