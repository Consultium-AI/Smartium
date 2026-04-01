export default function Sect03HemoglobineZuurstofVerzadigingscurve() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hemoglobine, zuurstof en de zuurstofverzadigingscurve</h2>
      <p>
        Hemoglobine bindt zuurstof aan het heem-ijzer in de Fe2+-vorm. Alleen dan kan zuurstof gebonden worden. Als het
        ijzer geoxideerd raakt naar Fe3+, heet dat methemoglobine. Methemoglobine is bruin gekleurd en kan geen zuurstof
        binden. Normaal bevat bloed minder dan 1% metHb.
      </p>
      <p>
        De zuurstofverzadigingscurve van hemoglobine heeft een S-vormige of sigmoïdale vorm. Dat komt door de bouw van
        hemoglobine: het is een tetramer, dus opgebouwd uit vier subunits. Wanneer één zuurstofmolecuul bindt, verandert
        de vorm van het hemoglobinemolecuul een klein beetje. Daardoor gaan de andere bindingsplaatsen makkelijker zuurstof
        binden. Dit heet coöperativiteit.
      </p>
      <p>Dat proces kun je zo begrijpen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>binding van het eerste O2-molecuul is relatief moeilijk;</li>
        <li>daarna verandert de structuur iets;</li>
        <li>het tweede O2 bindt gemakkelijker;</li>
        <li>daarna wordt ook het derde en vierde O2 sneller gebonden.</li>
      </ul>
      <p>Hierdoor stijgt de zuurstofverzadiging eerst langzaam, daarna snel, en bij hoge paO2 vlakt de curve af.</p>
      <p>
        Myoglobine gedraagt zich anders: dat is een monomeer en heeft een hyperbolische curve in plaats van een S-vormige
        curve. Ook 2,3-BPG speelt een rol bij hemoglobine en niet bij myoglobine.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandachtsvraag:</strong> waarom is de curve in de longen
          zo gunstig? <strong className="text-primary-900 dark:text-primary-200">Mini-antwoord:</strong> omdat bij een hoge
          paO2 in de longen hemoglobine vrijwel volledig kan worden opgeladen met zuurstof.
        </p>
      </div>
    </div>
  )
}
