export default function Sect02WatIsEenMProteine() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wat is een M-proteïne?</h2>
      <p>
        Een M-proteïne is een eiwit dat wordt gemaakt door een monoklonale plasmacelpopulatie. Dat betekent dat de
        plasmacellen allemaal uit dezelfde kloon komen en dus hetzelfde eiwit produceren. Zo’n eiwit is meestal een
        immunoglobuline, oftewel een antistof.
      </p>
      <p>
        Een immunoglobuline kan bestaan uit verschillende combinaties van zware en lichte ketens. In deze module worden de
        volgende typen genoemd:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>IgG-kappa</li>
        <li>IgG-lambda</li>
        <li>IgA-kappa</li>
        <li>IgA-lambda</li>
        <li>IgM-kappa</li>
        <li>IgM-lambda</li>
        <li>IgD-kappa</li>
        <li>IgD-lambda</li>
        <li>IgE-kappa</li>
        <li>IgE-lambda</li>
      </ul>
      <p>In totaal zijn er dus 10 verschillende M-proteïnetypen mogelijk.</p>
      <p>
        Bij een polyclonale immuunrespons maken veel verschillende klonen antistoffen; dat past bijvoorbeeld bij een
        klassieke bacteriële immuunrespons.{'  '}
        Bij een oligoklonale respons zijn er een paar klonen actief, zoals bij virale infecties, EBV, CMV of na een
        stamceltransplantatie.{'  '}
        Bij een monoklonale respons is er één dominante kloon aanwezig: dan denk je aan een M-proteïne.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandachtvraag:</strong> Wat betekent een smalle,
          duidelijke band in een immunofixatie?{'  '}
          <strong className="text-primary-900 dark:text-primary-200">Mini-antwoord:</strong> Dat wijst op één kloon die
          hetzelfde immunoglobuline maakt.
        </p>
      </div>
    </div>
  )
}
