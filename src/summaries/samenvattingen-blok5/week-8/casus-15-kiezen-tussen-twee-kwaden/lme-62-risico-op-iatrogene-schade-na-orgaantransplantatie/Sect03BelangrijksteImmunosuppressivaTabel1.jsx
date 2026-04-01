export default function Sect03BelangrijksteImmunosuppressivaTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De belangrijkste immunosuppressiva</h2>
      <p>
        Er bestaan veel immunosuppressieve middelen. In de praktijk worden ze vaak gecombineerd, omdat verschillende
        aangrijpingspunten nodig zijn om afstoting goed te onderdrukken.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Belangrijkste immunosuppressiva en hun aangrijpingspunt
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Klasse
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijk werkingspunt
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Calcineurineremmers</td>
              <td className="px-4 py-3 align-top">Cyclosporine, tacrolimus</td>
              <td className="px-4 py-3 align-top">
                Remmen T-celactivatie via calcineurine/NFAT en daarmee IL-2-gerelateerde activatie
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">mTOR-remmers</td>
              <td className="px-4 py-3 align-top">Sirolimus, everolimus</td>
              <td className="px-4 py-3 align-top">Remmen celgroei en celdeling</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Antimetabolieten</td>
              <td className="px-4 py-3 align-top">Azathioprine, mycofenolaatmofetil</td>
              <td className="px-4 py-3 align-top">Remmen purine- en DNA-synthese</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Corticosteroïden</td>
              <td className="px-4 py-3 align-top">Prednison, prednisolon, methylprednisolon</td>
              <td className="px-4 py-3 align-top">Remmen ontsteking en immuunactiviteit</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Costimulatieblokkers</td>
              <td className="px-4 py-3 align-top">Belatacept, abatacept</td>
              <td className="px-4 py-3 align-top">
                Blokkeren de costimulatie tussen antigeenpresenterende cel en T-cel
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Inductietherapie</td>
              <td className="px-4 py-3 align-top">Basiliximab, anti-thymocyte globulinen</td>
              <td className="px-4 py-3 align-top">Verminderen of remmen T-celactiviteit sterk</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De kern van de afweerreactie zit vooral in de activatie van T-cellen. Een antigeenpresenterende cel presenteert
        antigeen via MHC, waarna via costimulatie en intracellulaire signaalroutes de T-cel actief wordt. Daarna volgen
        replicatie, differentiatie en activatie van andere immuuncellen. Immunosuppressiva grijpen op verschillende
        plekken in die keten aan.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">
            Aandachtsvraag: Maakt de merknaam van het middel uit voor het risico?
          </strong>{' '}
          <strong className="text-primary-900 dark:text-primary-200">Kort antwoord:</strong> Nee, vooral de duur, dosis
          en combinatie van immunosuppressiva zijn bepalend.
        </p>
      </div>
    </div>
  )
}
