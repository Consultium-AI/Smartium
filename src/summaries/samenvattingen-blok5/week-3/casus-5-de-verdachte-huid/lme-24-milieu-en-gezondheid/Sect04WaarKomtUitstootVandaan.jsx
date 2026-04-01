export default function Sect04WaarKomtUitstootVandaan() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Waar komt de uitstoot in de zorg vandaan?</h2>
      <p>
        Om klimaatimpact goed te begrijpen, is het belangrijk om te weten waar die uitstoot precies vandaan komt. Daarbij
        wordt gewerkt met de indeling in scope 1, 2 en 3.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Scope 1, 2 en 3 in de zorg</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Scope
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Scope 1</td>
              <td className="px-4 py-3 align-top">directe uitstoot door eigen verbranding van fossiele brandstoffen</td>
              <td className="px-4 py-3 align-top">aardgas in een ketel, brandstof in voertuigen van de organisatie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Scope 2</td>
              <td className="px-4 py-3 align-top">indirecte uitstoot door ingekochte energie</td>
              <td className="px-4 py-3 align-top">elektriciteit</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Scope 3</td>
              <td className="px-4 py-3 align-top">overige indirecte uitstoot in de keten</td>
              <td className="px-4 py-3 align-top">
                productie en transport van goederen, reizen, gebruik van producten, afvalverwerking
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De grootste klimaatimpact zit vaak niet in de directe uitstoot, maar juist in de indirecte uitstoot in de keten.
        Volgens analyses van de zorg gaat ongeveer 9% van de uitstoot om scope 1, ongeveer 10,5% om scope 2 en ongeveer
        80% om scope 3.
      </p>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-900 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtsvraag:</strong> Waarom is scope 3 zo belangrijk?{' '}
          <span className="font-medium">
            Mini-antwoord: Omdat daar de grootste indirecte uitstoot zit, bijvoorbeeld in medicijnen, disposables,
            transport en productie van ingekochte producten.
          </span>
        </p>
      </div>
    </div>
  )
}
