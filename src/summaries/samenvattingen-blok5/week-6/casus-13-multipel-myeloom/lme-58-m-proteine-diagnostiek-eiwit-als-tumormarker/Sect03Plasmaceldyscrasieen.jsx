export default function Sect03Plasmaceldyscrasieen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Plasmaceldyscrasieën: hoe onderscheid je ze?</h2>
      <p>
        Onder de noemer plasmaceldyscrasie vallen aandoeningen waarbij er een woekering is van maligne plasmacellen. Het
        M-proteïne is hierbij een tumormarker, omdat het een product van de plasmacel is.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Belangrijkste plasmaceldyscrasieën en hun onderscheid
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Aandoening
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                M-proteïne
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Beenmerg
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Andere problemen
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">MGUS</td>
              <td className="px-4 py-3 align-top">
                M-proteïne {'<'} 30 g/L
              </td>
              <td className="px-4 py-3 align-top">
                {'<'} 10% plasmacellen
              </td>
              <td className="px-4 py-3 align-top">Geen andere problemen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Smouldering myeloom</td>
              <td className="px-4 py-3 align-top">
                M-proteïne {'>'} 30 g/L of urine {'>'} 500 mg/24u
              </td>
              <td className="px-4 py-3 align-top">
                {'>'} 10% plasmacellen
              </td>
              <td className="px-4 py-3 align-top">Geen andere problemen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Multipel myeloom</td>
              <td className="px-4 py-3 align-top">M-proteïne aanwezig</td>
              <td className="px-4 py-3 align-top">
                {'>'} 10% klonale plasmacellen
              </td>
              <td className="px-4 py-3 align-top">Myeloomgerelateerde weefselschade (CRAB)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>CRAB staat voor hyperCalciëmie, Renal disease, Anemie, Botlaesies.</p>
      <p>
        Naast deze drie hoofdgroepen horen ook solitair plasmacytoom, POEMS-syndroom, systemische AL-amyloïdose en MGRS
        bij de maligne plasmacelaandoeningen.
      </p>
      <p>De kern van het onderscheid zit dus steeds in drie vragen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Hoeveel M-proteïne is er?</li>
        <li>Hoeveel plasmacellen zitten er in het beenmerg?</li>
        <li>Is er orgaanschade of weefselschade aanwezig?</li>
      </ul>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandachtvraag:</strong> Waarom is een M-proteïne nog
          niet automatisch multipel myeloom?{'  '}
          <strong className="text-primary-900 dark:text-primary-200">Mini-antwoord:</strong> Omdat je ook moet kijken
          naar het aantal plasmacellen in het beenmerg en naar orgaanschade.
        </p>
      </div>
    </div>
  )
}
