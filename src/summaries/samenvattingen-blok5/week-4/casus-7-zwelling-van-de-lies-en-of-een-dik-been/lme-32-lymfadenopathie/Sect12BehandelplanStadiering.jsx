export default function Sect12BehandelplanStadiering() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandelplan bij lymfoom</h2>
      <p>
        De behandeling van een agressief non-Hodgkinlymfoom hangt onder andere af van de verspreiding van het lymfoom in het lichaam. Die verspreiding wordt vastgesteld met stageringsonderzoek.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Klinische prognostische factoren</h3>
      <p>Naast de stagering is het belangrijk om een indruk te krijgen van de prognose. Daarbij spelen de volgende factoren een rol:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>serum LDH;</li>
        <li>WHO performance status;</li>
        <li>stadium III of IV;</li>
        <li>leeftijd;</li>
        <li>aantal extranodale lokalisaties.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Stadiëring volgens Ann Arbor</h3>
      <p>Voor de uitbreiding van het lymfoom in het lichaam wordt de Ann Arbor-classificatie gebruikt. Er zijn vier stadia.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Ann Arbor-stadiëring</h3>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100 w-28">Stadium</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Beschrijving</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className="p-3 align-top font-medium">Stadium I</td>
              <td className="p-3">Aandoening van slechts 1 lymfeklierstation of 1 extralymfatisch orgaan</td>
            </tr>
            <tr>
              <td className="p-3 align-top font-medium">Stadium II</td>
              <td className="p-3">
                Aandoening van 2 of meer lymfeklierstations aan dezelfde zijde van het middenrif, of van 2 of meer lymfeklierstations en een begrensde aandoening van een extralymfatisch orgaan of gebied aan dezelfde zijde van het middenrif
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top font-medium">Stadium III</td>
              <td className="p-3">
                Aandoening van lymfeklierstations aan beide zijden van het middenrif, eventueel vergezeld van een begrensde aandoening van een extralymfatisch orgaan of aandoening van de milt of beide
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top font-medium">Stadium IV</td>
              <td className="p-3">
                Gedissemineerde aandoening van één of meer extralymfatische organen of gebieden met of zonder aandoening van lymfeklierstations
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Deze stadiëring is belangrijk voor de behandeling. Een diffuus grootcellig B-cellymfoom in een lokaal stadium, dus stadium I, wordt behandeld met een beperkt aantal 3 rituximab-CHOP-kuren, gevolgd door radiotherapie van het aangedane gebied.  Een stadium II-IV lymfoom heeft uitgebreidere behandeling nodig, met 6 rituximab-CHOP-kuren.
      </p>
      <p>Rituximab-CHOP is dus een belangrijke standaardbehandeling in deze context.</p>
    </div>
  )
}
