export default function Sect10Geneesmiddelengroepen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Welke geneesmiddelengroepen worden gebruikt?</h2>
      <p>
        De behandeling van multipel myeloom bestaat uit meerdere groepen middelen die elk op een ander doel aangrijpen.
        Juist die combinatie is belangrijk, omdat de ziekte slim kan ontsnappen aan één enkele aanpak.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 6. Belangrijkste behandelgroepen bij multipel myeloom
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Groep
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kernwerking
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Chemotherapie / alkylerende middelen
              </td>
              <td className="px-4 py-3 align-top">melfalan, cyclofosfamide, meelfufen</td>
              <td className="px-4 py-3 align-top">beschadigen DNA en remmen celdeling</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Corticosteroïden</td>
              <td className="px-4 py-3 align-top">dexamethason, prednison</td>
              <td className="px-4 py-3 align-top">maken deel uit van combinatiebehandeling</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Immunomodulerende middelen (IMiDs)
              </td>
              <td className="px-4 py-3 align-top">thalidomide, lenalidomide, pomalidomide</td>
              <td className="px-4 py-3 align-top">stimuleren afweer en werken anti-tumoraal</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Proteasoomremmers</td>
              <td className="px-4 py-3 align-top">bortezomib, carfilzomib, ixazomib</td>
              <td className="px-4 py-3 align-top">blokkeren eiwitafbraak en leiden tot celdood</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Monoklonale antistoffen</td>
              <td className="px-4 py-3 align-top">daratumumab, isatuximab, elotuzumab</td>
              <td className="px-4 py-3 align-top">binden gericht aan targets op de plasmacel</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Bispecifieke antistoffen</td>
              <td className="px-4 py-3 align-top">teclistamab, talquetamab, elranatamab</td>
              <td className="px-4 py-3 align-top">brengen T-cel en myeloomcel dicht bij elkaar</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">CAR-T-celtherapie</td>
              <td className="px-4 py-3 align-top">CAR-T</td>
              <td className="px-4 py-3 align-top">eigen T-cellen worden aangepast en teruggegeven</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Andere targeted therapie</td>
              <td className="px-4 py-3 align-top">selinexor, venetoclax</td>
              <td className="px-4 py-3 align-top">grijpen aan op export of apoptose</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
