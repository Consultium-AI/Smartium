export default function Sect06NietGenetischeFactoren() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Niet-genetische factoren</h2>
      <p>
        Niet alleen genen zijn van belang. Ook niet-genetische factoren beïnvloeden de ontwikkeling van
        auto-immuniteit.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Infecties en activatie van autoreactieve cellen
      </h3>
      <p>
        Een infectie kan antigeenpresenterende cellen activeren. Daardoor nemen costimulatoire signalen toe en
        kunnen autoreactieve T-cellen geactiveerd worden. Dit past bij bystander activatie. Daarnaast kunnen
        pathogenen via moleculaire mimicry auto-immuniteit uitlokken.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Geslacht en zwangerschap</h3>
      <p>
        Auto-immuunziekten komen vaker voor bij vrouwen dan bij mannen. Een mogelijke verklaring is dat
        genetische varianten kunnen ontsnappen aan de gebruikelijke inactivatie van één van de X-chromosomen
        in vrouwelijke cellen. Ook hormonale veranderingen spelen een rol.
      </p>
      <p>
        Zwangerschap heeft een sterke invloed op auto-immuunziekten, vooral in het derde trimester en kort na
        de bevalling. Tijdens het derde trimester zijn de vrouwelijke geslachtshormonen hoog en is de
        ziekteactiviteit vaak laag. Na de bevalling daalt deze hormonale bescherming snel, waardoor
        ziekteactiviteit juist weer hoog kan worden. Dit wordt beschreven als een soort rebound-effect.
      </p>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-950 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtsvraag:</strong> Waarom kan
          ziekteactiviteit na de bevalling toenemen?{'  '}
          <strong className="text-amber-950 dark:text-amber-50">Mini-antwoord:</strong> Omdat de hoge
          hormonale bescherming wegvalt en autoreactieve B- en T-cellen weer actiever kunnen worden.
        </p>
      </div>
    </div>
  )
}
