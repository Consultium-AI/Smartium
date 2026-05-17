export default function Sect08BehandelingVanMorbusCrohn() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling van Morbus Crohn</h2>
      <p>
        De behandeling hangt af van de ernst en de uitbreiding van de ziekte. In de praktijk wordt vaak gewerkt volgens een step-up-strategie: je start met het minst zware middel en bouwt op als
        dat nodig is. Bij patiënten met een ongunstig beloop of specifieke risicofactoren kan ook eerder voor een top-down-strategie worden gekozen, waarbij meteen de meest effectieve middelen
        worden ingezet om ziekteprogressie en complicaties tegen te houden.
      </p>
      <p>Mesalazine en sulfasalazine zijn in Nederland niet opgenomen in de richtlijnen voor de behandeling van Crohn.</p>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Behandeling van Crohn in het kort</h3>
        <div className="overflow-x-auto mt-4 rounded-xl border border-emerald-200/80 dark:border-emerald-600/40">
          <table className="w-full text-sm border-collapse bg-white dark:bg-slate-900/50">
            <thead>
              <tr className="bg-emerald-100 dark:bg-emerald-900/40">
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">
                  Middel of ingreep
                </th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">
                  Rol in de behandeling
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Budesonide oraal
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  Geschikt als inductietherapie bij milde tot matige ziekte van Crohn in de ileocecale regio
                </td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Prednison
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  Corticosteroïd, maar bij deze situatie niet de voorkeurskeuze
                </td>
              </tr>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Azathioprine
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Onderhouds- en step-up-therapie</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Methotrexaat
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Onderhoudstherapie</td>
              </tr>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Infliximab
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  Anti-TNF-biological, inzetbaar bij ernstiger of complexe ziekte
                </td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Adalimumab
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  Anti-TNF-biological, ook inzetbaar als step-up-behandeling
                </td>
              </tr>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Vedolizumab
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Nieuwere biological voor Morbus Crohn</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Ustekinumab
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Nieuwere biological voor Morbus Crohn</td>
              </tr>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Ciprofloxacine
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  Vooral als aanvullende behandeling bij een perianale fistel in combinatie met anti-TNF
                </td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Ileocecale resectie
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  Steeds vaker gekozen bij inflammatie in de ileocecale regio
                </td>
              </tr>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Ballondilatatie
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  Behandeling van een stenose via endoscopie
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>
        Bij een milde tot matige actieve Crohn in de ileocecale hoek is budesonide de meest aangewezen inductietherapie. Het werkt goed en heeft een gunstiger bijwerkingenprofiel dan prednison.
      </p>
      <div className="p-5 bg-violet-50 dark:bg-violet-950/40 rounded-xl border border-violet-200 dark:border-violet-600/40 space-y-2">
        <p>
          <strong className="text-violet-900 dark:text-violet-200">Aandacht: waarom kies je bij milde ileocecale Crohn vaak budesonide?</strong>
        </p>
        <p>Kort antwoord: het werkt als inductiemiddel en geeft minder bijwerkingen dan prednison.</p>
      </div>
      <p>
        Voor onderhoudstherapie is azathioprine in deze casus de aangewezen stap-upbehandeling. Prednison en budesonide zijn geen onderhoudsmedicijnen. Mesalazine en ciprofloxacine zijn dat
        evenmin. Ook methotrexaat kan als onderhoudstherapie worden gebruikt.
      </p>
      <p>
        Anti-TNF-middelen, zoals infliximab en adalimumab, kunnen ook gebruikt worden. Vaak worden anti-TNF en azathioprine gecombineerd, omdat dit de effectiviteit verhoogt en antistofvorming
        helpt voorkomen. Naast anti-TNF zijn ook vedolizumab en ustekinumab geregistreerd voor Crohn.
      </p>
      <p>
        Bij patiënten met ontsteking in de ileocecale regio wordt steeds vaker gekozen voor een ileocecale resectie in plaats van biologische medicatie.
      </p>
    </div>
  )
}
