export default function Sect09MechanismenLeverschade() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Mechanismen van leverschade</h2>
      <p>Er zijn drie belangrijke mechanismen:</p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Directe hepatotoxiciteit</h3>
      <p>
        Dit is een voorspelbare vorm van leverschade door middelen die intrinsiek toxisch zijn voor de lever. Het is{' '}
        <strong className="text-slate-900 dark:text-slate-100">dosisafhankelijk</strong>, komt relatief vaak voor en kan
        ook in diermodellen worden aangetoond. De latentietijd is meestal kort:{' '}
        <strong className="text-slate-900 dark:text-slate-100">1–5 dagen</strong> na een te hoge dosis. Voorbeeld: een
        overdosering van paracetamol.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Idiosyncratische hepatotoxiciteit</h3>
      <p>
        Dit komt voor bij slechts een klein deel van de patiënten, ongeveer{' '}
        <strong className="text-slate-900 dark:text-slate-100">1 op 2000 tot 100.000 blootstellingen</strong>. Het is{' '}
        <strong className="text-slate-900 dark:text-slate-100">onvoorspelbaar</strong>,{' '}
        <strong className="text-slate-900 dark:text-slate-100">niet dosisafhankelijk</strong> en niet reproduceerbaar in
        dierstudies. Juist deze vorm maakt DILI vaak moeilijk te herkennen.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Indirecte hepatotoxiciteit</h3>
      <p>
        Hier ontstaat de schade niet door directe toxiciteit van het middel zelf, maar door het farmacologische effect.
        Voorbeelden zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>immuungemedieerde hepatitis;</li>
        <li>exacerbatie van hepatitis B of C;</li>
        <li>verergering van leververvetting.</li>
      </ul>
    </div>
  )
}
