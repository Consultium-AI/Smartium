export default function Sect02Tabel1Urinestrip() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 1. Kenmerken van glomerulaire en tubulaire nierschade</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerk</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Glomerulaire nierschade</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Tubulaire nierschade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">Belangrijkste urinebevindingen</td>
              <td className="px-4 py-3">Hematurie en proteïnurie</td>
              <td className="px-4 py-3">Vaak weinig afwijkingen; soms leukocyturie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-medium">Bloeddruk en vocht</td>
              <td className="px-4 py-3">Hypertensie, water- en zoutretentie, hyponatriëmie</td>
              <td className="px-4 py-3">Elektrolytstoornissen, vaak vooral lage waarden</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">Nierfunctie</td>
              <td className="px-4 py-3">Kan dalen door filterschade</td>
              <td className="px-4 py-3">Kan nog volledig normaal zijn</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-medium">Kernprobleem</td>
              <td className="px-4 py-3">Schade aan de glomerulaire basaalmembraan (GBM)</td>
              <td className="px-4 py-3">Verstoorde terugresorptie van stoffen zoals glucose en fosfaat</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De urinestrip reageert vooral op erytrocyten en albumine, en niet primair op de meeste elektrolyten. Daarom kan een tubulaire aandoening zich presenteren met weinig zichtbare urine-afwijkingen. Proteïnurie betekent dus niet automatisch dat de oorzaak glomerulair is. Bij een glomerulaire oorzaak kunnen hematurie, hoge bloeddruk en hyponatriëmie optreden, terwijl bij een tubulaire oorzaak juist de gestoorde terugresorptie van stoffen op de voorgrond staat.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: Waarom kan tubulaire nierschade toch proteïnurie geven?  *Kort antwoord:* Omdat het probleem vaak zit in de terugresorptie van gefilterde stoffen, bijvoorbeeld glucose en fosfaat. De urinestrip ziet vooral bloed en albumine.
        </p>
      </div>
    </div>
  )
}
