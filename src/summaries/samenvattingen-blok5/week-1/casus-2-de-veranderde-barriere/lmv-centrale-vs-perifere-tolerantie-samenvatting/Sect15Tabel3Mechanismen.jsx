export default function Sect15Tabel3Mechanismen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 3. Mechanismen van verlies van tolerantie en voorbeelden
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Mechanisme
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Uitleg
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeeld uit de clip
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Polyclonale activatie</td>
              <td className="px-4 py-3 align-top">Brede activering van lymfocyten buiten normale specificiteit om</td>
              <td className="px-4 py-3 align-top">EBV</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Superantigenen</td>
              <td className="px-4 py-3 align-top">Abnormale activatie van T-cellen</td>
              <td className="px-4 py-3 align-top">Staphylococcus</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Molecular mimicry</td>
              <td className="px-4 py-3 align-top">Kruisreactie tussen microbieel antigeen en autoantigeen</td>
              <td className="px-4 py-3 align-top">Guillain-Barré na Campylobacter jejuni</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Bystander-activatie</td>
              <td className="px-4 py-3 align-top">Meelopen van autoreactieve lymfocyten tijdens infectie</td>
              <td className="px-4 py-3 align-top">Infectiegerelateerde co-activatie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Vrijkomen afgeschermde autoantigenen
              </td>
              <td className="px-4 py-3 align-top">Doorbreken van immune privileged sites</td>
              <td className="px-4 py-3 align-top">Sympathische oftalmopathie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Neoantigenen / haptenisatie
              </td>
              <td className="px-4 py-3 align-top">Nieuwe immunogene structuren ontstaan</td>
              <td className="px-4 py-3 align-top">Geneesmiddel- of modificatiegerelateerd</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Verlies Treg-functie</td>
              <td className="px-4 py-3 align-top">Verminderde perifere suppressie</td>
              <td className="px-4 py-3 align-top">IPEX-syndroom</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
