export default function Sect03ImpactRisicofactor() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe bepaal je de impact van een risicofactor?</h2>
      <p>Er zijn twee belangrijke manieren om naar impact te kijken:</p>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Relatief risico (RR)</strong>
          <br />Dit zegt hoeveel groter de kans op ziekte is bij mensen mét de risicofactor vergeleken met mensen zónder
          die risicofactor.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Population attributable fraction (PAF)</strong>
          <br />Dit is het aandeel van de ziektegevallen in een populatie dat kan worden toegeschreven aan de risicofactor.
        </li>
      </ol>
      <p>
        Met andere woorden: RR gaat over het <strong className="text-slate-900 dark:text-slate-100">individuele risico</strong>, terwijl PAF gaat over de <strong className="text-slate-900 dark:text-slate-100">ziektelast in de hele bevolking</strong>.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 1. Verschil tussen relatief risico en PAF
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Begrip
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Vraag die je ermee beantwoordt
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Betekenis
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Relatief risico (RR)</td>
                <td className="px-4 py-3 align-top">Hoeveel meer kans heeft een patiënt op ziekte door de risicofactor?</td>
                <td className="px-4 py-3 align-top">Effect op individueel niveau</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Population attributable fraction (PAF)</td>
                <td className="px-4 py-3 align-top">Hoeveel ziekte in een populatie wordt veroorzaakt door de risicofactor?</td>
                <td className="px-4 py-3 align-top">Effect op populatieniveau</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>De PAF hangt af van twee dingen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          de <strong className="text-slate-900 dark:text-slate-100">sterkte van de risicofactor</strong>;
        </li>
        <li>
          hoe vaak de risicofactor <strong className="text-slate-900 dark:text-slate-100">voorkomt</strong>.
        </li>
      </ul>
      <p>De formule die hierbij hoort is:</p>
      <p className="px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-600 font-mono text-sm text-slate-800 dark:text-slate-200 overflow-x-auto">
        <strong>
          PAF = p<sub>Hp</sub> × (RR − 1) / [p<sub>Hp</sub> × (RR − 1) + 1]
        </strong>
      </p>
      <p>Hierin staat:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>
            p<sub>Hp</sub>
          </strong>{' '}
          voor de prevalentie van <em>H. pylori</em>;
        </li>
        <li>
          <strong>RR</strong> voor het relatieve risico op de ziekte door de risicofactor.
        </li>
      </ul>
      <p>Het idee is simpel: hoe hoger de prevalentie en hoe sterker het risico, hoe groter de PAF.</p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-3">
        <p className="text-slate-800 dark:text-amber-100 m-0">
          <strong className="text-slate-900 dark:text-amber-50">Aandachtsvraag:</strong> waarom is alleen een hoog RR niet
          genoeg om een grote populatie-impact te hebben?
          <br />
          <strong className="text-slate-900 dark:text-amber-50">Mini-antwoord:</strong> als weinig mensen de risicofactor
          hebben, blijft het aantal ziektegevallen dat eraan toe te schrijven is beperkt.
        </p>
      </div>
    </div>
  )
}
