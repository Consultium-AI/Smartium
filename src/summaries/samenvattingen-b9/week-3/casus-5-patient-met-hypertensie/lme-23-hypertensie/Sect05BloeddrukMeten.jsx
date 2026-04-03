export default function Sect05BloeddrukMeten() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Bloeddruk meten: spreekkamer, thuismeting en 24-uursmeting</h2>
      <p>
        De bloeddruk die je in de spreekkamer meet, is vaak hoger dan thuis. Daarom is de 24-uurs bloeddrukmeting de gouden standaard. Er wordt ook steeds meer met thuismetingen gewerkt.
      </p>
      <p>
        {'Bij 24-uursmeting kijk je naar dag- en nachtgemiddelden. Zo\u2019n registratie laat niet alleen de gemiddelde bloeddruk zien, maar ook pieken en het verschil tussen dag en nacht. Dat helpt om hypertensie beter te beoordelen.'}
      </p>
      <p>Een voorbeeld van streefwaarden:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>daggemiddelde rond &lt;135/85 mmHg</li>
        <li>nachtgemiddelde rond &lt;120/70 mmHg</li>
      </ul>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandacht-vraagje: Waarom is een 24-uursmeting zo handig?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Omdat je dan een realistischer beeld krijgt van de bloeddruk dan met één meting in de spreekkamer.
        </p>
      </div>
    </div>
  )
}
