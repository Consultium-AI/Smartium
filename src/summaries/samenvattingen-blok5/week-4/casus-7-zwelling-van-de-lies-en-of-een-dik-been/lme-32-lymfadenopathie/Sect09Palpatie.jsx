export default function Sect09Palpatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Palpatie: welke kenmerken passen bij welke oorzaak?</h2>
      <p>Palpatie geeft vaak een eerste indruk van de oorzaak, maar is nooit voldoende voor een definitieve diagnose.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Palpatiekenmerken van lymfeklieren</h3>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Oorzaak</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Kenmerken</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className="p-3 align-top">Ontstoken lymfeklier</td>
              <td className="p-3">Moeilijk afgrensbaar, warm, weeke consistentie</td>
            </tr>
            <tr>
              <td className="p-3 align-top">(Non-)Hodgkinlymfoom</td>
              <td className="p-3">Rubbergachtige consistentie, losliggend, scherp afgrensbaar</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Metastase van solide tumor</td>
              <td className="p-3">Soms moeilijk afgrensbaar, vergroeid met omgeving, harde consistentie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Pijn speelt ook mee in de beoordeling. In tegenstelling tot een ontstoken lymfeklier zijn lymfkliermetastasen van solide tumoren en lymfomen niet pijnlijk.
      </p>
      <p>Belangrijk om te onthouden: deze kenmerken zijn indicatief en soms oriënterend, maar nooit genoeg voor een definitieve diagnose.</p>
    </div>
  )
}
