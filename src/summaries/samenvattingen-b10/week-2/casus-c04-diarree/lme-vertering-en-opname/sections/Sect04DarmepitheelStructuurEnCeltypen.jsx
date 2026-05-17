export default function Sect04DarmepitheelStructuurEnCeltypen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Het darmepitheel: structuur en celtypen</h2>
      <p>
        De dunne darm bestaat uit duodenum, jejunum en ileum. De wand is opgebouwd uit vier lagen: mucosa, submucosa, circulaire spierlaag en longitudinale spierlaag. Het luminale oppervlak is
        sterk vergroot door plooien, villi en crypten.
      </p>
      <p>Het epithelium is het belangrijkste opname-oppervlak. Het bevat meerdere celtypen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Enterocyten: zorgen voor verdere afbraak, opname en transepitheliaal transport van nutriënten.</li>
        <li>Gobletcellen: secreteren mucines, die samen met water de mucosalaag in stand houden.</li>
        <li>Panethcellen: dragen bij aan de afweer van de darm.</li>
        <li>Entero-endocriene cellen: maken hormonen die verschillende darmfuncties beïnvloeden.</li>
      </ul>
      <p>
        Tight junctions scheiden het apicale van het basolaterale compartiment. Dat is heel belangrijk, want de enterocyt is een gepolariseerde cel: de apicale zijde kijkt naar het lumen, de
        basolaterale zijde naar het interstitium.
      </p>
      <div className="p-5 bg-violet-50 dark:bg-violet-950/40 rounded-xl border border-violet-200 dark:border-violet-600/40 space-y-2">
        <p>
          <strong className="text-violet-900 dark:text-violet-200">Aandachtsvraag:</strong> Waarom is die polariteit van de enterocyt zo handig?{' '}
          <strong className="text-violet-900 dark:text-violet-200">Mini-antwoord:</strong> Daardoor kan opname gericht van lumen naar interstitium verlopen; dat heet vectorieel transport.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Opbouw van het darmepitheel en functie van de celtypen</h3>
        <div className="overflow-x-auto mt-4 rounded-xl border border-emerald-200/80 dark:border-emerald-600/40">
          <table className="w-full text-sm border-collapse bg-white dark:bg-slate-900/50">
            <thead>
              <tr className="bg-emerald-100 dark:bg-emerald-900/40">
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">Celtype</th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">Functie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Enterocyt</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Opname en transport van nutriënten</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Gobletcel</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Mucineproductie en onderhoud van de mucuslaag</td>
              </tr>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Panethcel</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Darmafweer</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Entero-endocriene cel
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Hormoonsecretie</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
