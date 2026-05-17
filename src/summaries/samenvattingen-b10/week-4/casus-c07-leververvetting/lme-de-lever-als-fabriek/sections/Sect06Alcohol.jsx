export default function Sect06Alcohol() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Alcohol: omzetting in de lever</h2>
      <p>
        Alcohol, of <strong className="text-slate-900 dark:text-slate-100">ethanol</strong>, wordt voor meer dan{' '}
        <strong className="text-slate-900 dark:text-slate-100">90%</strong> in de lever gemetaboliseerd. De rest verlaat het lichaam via urine of longen.
      </p>
      <p>De omzetting verloopt in twee stappen:</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Ethanol → acetaldehyde</strong> via{' '}
          <strong className="text-slate-900 dark:text-slate-100">alcoholdehydrogenase (ADH)</strong> en ook via het{' '}
          <strong className="text-slate-900 dark:text-slate-100">MEOS-systeem</strong>.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Acetaldehyde → acetaat</strong> via{' '}
          <strong className="text-slate-900 dark:text-slate-100">aldehydedehydrogenase (ALDH)</strong>.
        </li>
      </ol>
      <p>
        Acetaldehyde is een <strong className="text-slate-900 dark:text-slate-100">toxische stof</strong> en speelt een belangrijke rol bij de negatieve effecten van alcohol, zoals misselijkheid, hoofdpijn en bij langdurig gebruik ook leverschade, verhoogd risico op kanker en schade aan het zenuwstelsel. Acetaat wordt verder verwerkt voor energieproductie in de cel.
      </p>
      <p>
        Genetische variatie in ADH-enzymen kan de afbraaksnelheid beïnvloeden. De{' '}
        <strong className="text-slate-900 dark:text-slate-100">ADH1B*2-variant</strong> zet alcohol sneller om en komt veel voor bij Oost-Aziaten. Daardoor kan alcoholverslaving minder vaak voorkomen, maar klachten zoals roodheid, misselijkheid en hoofdpijn kunnen juist vaker optreden door snellere opbouw van acetaldehyde.
      </p>
    </div>
  )
}
