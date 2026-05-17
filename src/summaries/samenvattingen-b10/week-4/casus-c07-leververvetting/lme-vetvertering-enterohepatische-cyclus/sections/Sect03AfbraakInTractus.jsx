export default function Sect03AfbraakInTractus() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Afbraak van vetten in de tractus digestivus</h2>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">De rol van lipases</h3>
      <p>
        De afbraak van triglyceriden begint al in de maag. Daar werkt <strong className="text-slate-900 dark:text-slate-100">maaglipase</strong>, dat goed actief is bij een lage pH. In de dunne darm gaat de afbraak verder door{' '}
        <strong className="text-slate-900 dark:text-slate-100">pancreaslipase</strong>. In het duodenum wordt ook{' '}
        <strong className="text-slate-900 dark:text-slate-100">co-lipase</strong> actief. Dit is belangrijk, omdat
        co-lipase het lipase helpt binden aan het oppervlak van vetdruppels en voorkomt dat het lipase door galzouten
        wordt geïnactiveerd.
      </p>
      <p>De vetvertering wordt dus niet door één enzym gedragen, maar door een samenwerkend systeem:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>maaglipase start de afbraak;</li>
        <li>pancreaslipase doet het grootste deel van het werk in de dunne darm;</li>
        <li>co-lipase zorgt ervoor dat pancreaslipase effectief kan blijven werken;</li>
        <li>galzouten en darmbewegingen helpen de vetdruppels toegankelijk te maken.</li>
      </ul>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Gemengde micellen: waarom zijn die nodig?</h3>
      <p>
        Wanneer vetten in de darm worden afgebroken, ontstaan onder andere{' '}
        <strong className="text-slate-900 dark:text-slate-100">vrije vetzuren</strong> en{' '}
        <strong className="text-slate-900 dark:text-slate-100">monoglyceriden</strong>. Deze producten zijn nog steeds
        relatief hydrofoob. Om ze toch door de waterige darminhoud te transporteren, vormen galzouten samen met deze
        afbraakproducten <strong className="text-slate-900 dark:text-slate-100">gemengde micellen</strong>.
      </p>
      <p>
        Een micel is een klein transportdeeltje waarin lipiden als het ware verpakt worden. Daardoor kunnen de
        afbraakproducten naar het oppervlak van de enterocyt worden gebracht. Zonder deze micellen zou opname van vet
        veel minder efficiënt zijn.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Stappen in de vetvertering</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Stap</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Wat gebeurt er?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">1. Start in de maag</td>
              <td className="p-3 align-top">Maaglipase begint met triglycerideafbraak</td>
            </tr>
            <tr>
              <td className="p-3 align-top">2. Voortzetting in de dunne darm</td>
              <td className="p-3 align-top">Pancreaslipase breekt triglyceriden verder af</td>
            </tr>
            <tr>
              <td className="p-3 align-top">3. Activatie van co-lipase</td>
              <td className="p-3 align-top">Co-lipase helpt lipase aan het vetoppervlak en voorkomt inactivatie</td>
            </tr>
            <tr>
              <td className="p-3 align-top">4. Vorming van micellen</td>
              <td className="p-3 align-top">Galzouten en afbraakproducten vormen gemengde micellen</td>
            </tr>
            <tr>
              <td className="p-3 align-top">5. Opname in enterocyt</td>
              <td className="p-3 align-top">Vrije vetzuren en monoglyceriden worden opgenomen</td>
            </tr>
            <tr>
              <td className="p-3 align-top">6. Verpakking en transport</td>
              <td className="p-3 align-top">
                In de enterocyt worden ze opnieuw tot triglyceriden gemaakt en via lipoproteïnen aan de lymfe afgegeven
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Opname door enterocyten en afgifte aan de lymfe</h3>
      <p>
        De producten van lipolyse worden door de enterocyten opgenomen. In de cel worden ze opnieuw omgezet in
        triglyceriden. Daarna worden ze verpakt met specifieke eiwitten tot{' '}
        <strong className="text-slate-900 dark:text-slate-100">lipoproteïnen</strong> en afgegeven aan de{' '}
        <strong className="text-slate-900 dark:text-slate-100">lymfevaten</strong>. Op die manier komen de vetten
        uiteindelijk in de circulatie terecht.
      </p>

      <div className="rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-slate-50/80 dark:bg-slate-800/50 p-4 space-y-3 border-l-4 border-indigo-400 dark:border-indigo-500/85">
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Aandachtsvraag:</strong> Wat is het doel
          van die herverpakking in de enterocyt?
        </p>
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Mini-antwoord:</strong> Zo kunnen
          vetafbraakproducten veilig worden getransporteerd, eerst via de lymfe en daarna verder door het lichaam.
        </p>
      </div>
    </div>
  )
}
