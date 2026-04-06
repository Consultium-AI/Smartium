export default function Sect08Nmb() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Netto monetaire baten (NMB)</h2>
      <p>
        Naast de IKER bespreekt de module een tweede manier om kosteneffectiviteit te beoordelen: de netto monetaire baten of
        NMB.
      </p>
      <p>De formule is:</p>
      <p className="font-medium text-slate-900 dark:text-slate-100">NMB = (verschil in QALY × drempelwaarde) − verschil in kosten</p>
      <p>
        Hiermee geef je eerst een geldwaarde aan de gezondheidswinst en trek je daar vervolgens de extra kosten vanaf.
      </p>
      <p>Als de uitkomst positief is, dan is de behandeling kosteneffectief bij die gekozen drempelwaarde.</p>
      <p>Voorbeeld:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>extra winst = 0,5 QALY</li>
        <li>drempelwaarde = €50.000 per QALY</li>
        <li>extra kosten = €10.000</li>
      </ul>
      <p>Dan:</p>
      <p>NMB = (0,5 × 50.000) − 10.000 = 15.000</p>
      <p>De NMB is dan positief, dus de behandeling is kosteneffectief.</p>
    </div>
  )
}
