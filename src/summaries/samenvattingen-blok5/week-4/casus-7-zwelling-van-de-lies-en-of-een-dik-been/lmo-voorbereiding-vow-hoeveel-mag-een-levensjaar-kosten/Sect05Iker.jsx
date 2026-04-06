export default function Sect05Iker() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">IKER of ICER: extra kosten per extra gezondheidswinst</h2>
      <p>
        De kernmaat voor die vergelijking is de incrementele kosteneffectiviteitsratio, vaak aangeduid als IKER of ICER. Deze
        ratio geeft aan hoeveel extra geld je betaalt voor elke extra gewonnen QALY.
      </p>
      <p>De formule is:</p>
      <p className="font-medium text-slate-900 dark:text-slate-100">IKER = verschil in kosten / verschil in effecten</p>
      <p>Dus:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>teller: kosten nieuwe behandeling minus kosten standaardbehandeling</li>
        <li>noemer: effect nieuwe behandeling minus effect standaardbehandeling</li>
      </ul>
      <p>Als een nieuwe behandeling €10.000 meer kost en 0,5 extra QALY oplevert, dan is de IKER:</p>
      <p>€10.000 / 0,5 = €20.000 per QALY</p>
      <p>Dat betekent: voor elke extra gewonnen QALY betaal je €20.000 extra.</p>
    </div>
  )
}
