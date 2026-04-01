export default function Sect02HematopoietischeStamceltransplantatieInHetKort() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hematopoëtische stamceltransplantatie in het kort</h2>
      <p>
        Hematopoëtische stamceltransplantatie (HSCT) betekent dat bloedvormende stamcellen via een infuus worden
        toegediend aan een patiënt die vooraf radio- en/of chemotherapie heeft gekregen. Het doel van deze behandeling
        verschilt per type transplantatie.
      </p>
      <p>Er zijn twee hoofdvormen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>autologe HSCT: de stamcellen komen van de patiënt zelf;</li>
        <li>allogene HSCT: de stamcellen komen van een donor.</li>
      </ul>
      <p>
        Vroeger werd vooral beenmerg gebruikt als stamcelbron. Tegenwoordig worden stamcellen meestal uit het perifere
        bloed verzameld na mobilisatie met een groeifactor. De stamcellen worden dan uit het bloed gefilterd via
        leukaferese. Bij beenmergafname gebeurt dit via herhaalde puncties uit het bekken, meestal onder narcose.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Autologe en allogene HSCT naast elkaar</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Autologe HSCT
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Allogene HSCT
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Herkomst stamcellen</td>
              <td className="px-4 py-3 align-top">Patiënt zelf</td>
              <td className="px-4 py-3 align-top">Donor</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Afstotingsreacties</td>
              <td className="px-4 py-3 align-top">Geen</td>
              <td className="px-4 py-3 align-top">Wel mogelijk</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Graft-versus-hostziekte (GVHD)</td>
              <td className="px-4 py-3 align-top">Nee</td>
              <td className="px-4 py-3 align-top">Ja</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Doel</td>
              <td className="px-4 py-3 align-top">Herstel van bloedcelvorming na hoge dosis therapie</td>
              <td className="px-4 py-3 align-top">Immuuntherapie en herstel van bloedcelvorming</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Belangrijkste indicatie</td>
              <td className="px-4 py-3 align-top">Multipel myeloom</td>
              <td className="px-4 py-3 align-top">Acute myeloïde leukemie (AML) en acute lymfatische leukemie (ALL)</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Conditioning</td>
              <td className="px-4 py-3 align-top">Myeloablatief</td>
              <td className="px-4 py-3 align-top">Myeloablatief of niet-myeloablatief</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandacht:</strong> waarom is dit onderscheid zo
          belangrijk?{'  '}
          <strong className="text-primary-900 dark:text-primary-200">Mini-antwoord:</strong> omdat bij autologe HSCT geen
          afstotingsreacties optreden, terwijl bij allogene HSCT juist wel afstoting en GVHD kunnen ontstaan.
        </p>
      </div>
    </div>
  )
}
