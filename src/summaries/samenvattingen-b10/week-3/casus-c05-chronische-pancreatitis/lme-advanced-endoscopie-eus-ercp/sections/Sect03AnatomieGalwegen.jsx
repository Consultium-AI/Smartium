export default function Sect03AnatomieGalwegen () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Anatomie van de galwegen</h2>
      <p>
        Om EUS en ERCP goed te begrijpen, moet je de anatomie van de galwegen kennen. De galwegen zijn als een soort boom:
        de kleinere takken in de lever vormen samen de grotere afvoerwegen.
      </p>
      <p>De belangrijkste onderdelen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">intrahepatische galwegen</strong>: de kleine galwegen
          ín de lever;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">ductus hepaticus dextra</strong>: galweg uit de rechter
          leverhelft;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">ductus hepaticus sinistra</strong>: galweg uit de linker
          leverhelft;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">ductus hepaticus communis</strong>: de gemeenschappelijke
          levergang;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">ductus cysticus</strong>: verbinding met de galblaas;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">ductus choledochus</strong>: de gewone galweg, ook wel
          common bile duct (CBD);
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">ductus pancreaticus</strong>: de afvoergang van de pancreas;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">papil van Vater</strong>: de uitmonding in het duodenum.
        </li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Belangrijke anatomische termen</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Letter / structuur</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">A</td>
              <td className="p-3 align-top">intrahepatische galwegen</td>
            </tr>
            <tr>
              <td className="p-3 align-top">B</td>
              <td className="p-3 align-top">ductus hepaticus dextra</td>
            </tr>
            <tr>
              <td className="p-3 align-top">C</td>
              <td className="p-3 align-top">ductus hepaticus sinistra</td>
            </tr>
            <tr>
              <td className="p-3 align-top">D</td>
              <td className="p-3 align-top">ductus hepaticus communis</td>
            </tr>
            <tr>
              <td className="p-3 align-top">E</td>
              <td className="p-3 align-top">ductus cysticus</td>
            </tr>
            <tr>
              <td className="p-3 align-top">F</td>
              <td className="p-3 align-top">ductus pancreaticus</td>
            </tr>
            <tr>
              <td className="p-3 align-top">G</td>
              <td className="p-3 align-top">ductus choledochus / common bile duct (CBD)</td>
            </tr>
            <tr>
              <td className="p-3 align-top">H</td>
              <td className="p-3 align-top">papil van Vater</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De <strong className="text-slate-900 dark:text-slate-100">extrahepatische galweg</strong> bestaat uit de ductus
        hepaticus communis en de ductus choledochus. Het onderscheid daartussen hangt samen met de plaats waar de ductus
        cysticus uitmondt.
      </p>
      <p>
        De galweg mondt uit in de <strong className="text-slate-900 dark:text-slate-100">papil van Vater</strong> en ligt in
        het <strong className="text-slate-900 dark:text-slate-100">duodenum</strong>. Ook de ductus pancreaticus komt hier
        uit. Dit is een belangrijk anatomisch kruispunt, omdat juist hier EUS en ERCP hun werk doen.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Aandachtsvraag:</strong> Waar monden de galweg en de ductus pancreaticus uit?
        </p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0 mt-2">
          <strong className="font-semibold">Kort antwoord:</strong> In de papil van Vater, in het duodenum.
        </p>
      </div>
    </div>
  )
}
