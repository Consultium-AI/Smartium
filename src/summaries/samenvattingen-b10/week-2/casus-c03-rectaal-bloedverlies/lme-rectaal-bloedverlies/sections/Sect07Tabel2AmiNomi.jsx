export default function Sect07Tabel2AmiNomi() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 2. Acute mesenteriale ischemie en NOMI
        </h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
              <tr>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Kenmerk</th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">
                  Acute mesenteriale ischemie (AMI)
                </th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">NOMI</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900/40">
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Bloedvatproblematiek</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Occlusie door embolie, trombose of obstructie
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Geen echte stenose of occlusie
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Mechanisme</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Abrupte stop of sterke vermindering van bloedtoevoer
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Vasoconstrictie van mesenteriale vaten
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Oorzaken</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Vaak atherosclerose met plaqueruptuur of cardiale embolie
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Shock, redistributie, inotrope middelen, ernstig hartfalen, postoperatief, dialyse, massale
                  brandwonden, abdominale compartment syndrome, ernstige sepsis, type A/B aortadissectie
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Klinische context</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Vaak oudere patiënt met risicofactoren
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Vaak ernstig zieke patiënt met lage perfusie
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Beleid</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Snelle diagnostiek en interventie
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Herstellen van perfusie en oorzaak behandelen
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>
        NOMI kan voorkomen bij ernstig hartfalen met inotropie of intra-aortale ballonpomp, postoperatief na cardiale
        chirurgie of aortachirurgie, bij hypotensie of slechte perfusie na dialyse of massale brandwonden, bij abdominale
        compartment syndrome na massaal bloedverlies, bij ernstige sepsis en bij type A/B aortadissectie. Ook hier
        geldt: het probleem is niet een afgesloten vat, maar een te sterke vaatvernauwing.
      </p>
    </div>
  )
}
