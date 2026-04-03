export default function Sect03AfnameVerwerking() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Van afname tot verwerking</h2>
      <p>
        Na afname door de nefroloog of radioloog moet het weefsel, vaak niet groter dan een luciferhoutje, zo snel mogelijk vers bij de patholoog aankomen. Het materiaal mag niet in formaline worden gefixeerd, omdat immunofluorescentie en elektronenmicroscopie dan niet meer mogelijk zijn. De patholoog verdeelt het materiaal in meerdere secties, zodat elk deel voor een andere techniek gebruikt kan worden.
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 1. De drie onderzoekstechnieken van het nierbiopt</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Techniek</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Wat wordt onderzocht?</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Belangrijkste opbrengst</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">Lichtmicroscopie</td>
              <td className="px-4 py-3">Algemene structuur van het nierweefsel met verschillende kleuringen</td>
              <td className="px-4 py-3">Schadepatronen en laesies beoordelen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-medium">Immunofluorescentie (IF) en immunohistochemie (IHC)</td>
              <td className="px-4 py-3">Antilichamen tegen specifieke eiwitten of antigenen</td>
              <td className="px-4 py-3">Immuuncomplexen, complement, transplantatie- of virusmarkers en celtypen aantonen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">Elektronenmicroscopie (EM)</td>
              <td className="px-4 py-3">Ultrastructuur met zeer hoge resolutie</td>
              <td className="px-4 py-3">Zeer kleine afwijkingen zichtbaar maken, vooral in fibrillen en basaalmembranen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        In de praktijk vullen deze technieken elkaar aan: elk onderzoek laat een ander deel van de puzzel zien.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandacht-vragetje: Waarom mag het nierbiopt niet in formaline worden gefixeerd?</p>
        <p className="mt-2">
          <span className="font-semibold">Kort antwoord:</span>{' '}Omdat immunofluorescentie en elektronenmicroscopie dan niet meer mogelijk zijn.
        </p>
      </div>
    </div>
  )
}
