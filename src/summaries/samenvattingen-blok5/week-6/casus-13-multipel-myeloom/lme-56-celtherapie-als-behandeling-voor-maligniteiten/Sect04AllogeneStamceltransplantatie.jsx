export default function Sect04AllogeneStamceltransplantatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Allogene stamceltransplantatie</h2>
      <p>
        Bij allogene HSCT worden bloedvormende stamcellen van een donor toegediend aan een patiënt, na voorafgaande
        chemotherapie en/of radiotherapie. De donorstamcellen zorgen voor herstel van de bloedcelvorming na de
        transplantatie. Belangrijk is dat het transplantaat niet alleen stamcellen bevat, maar ook immuuncompetente
        cellen, vooral T-cellen.
      </p>
      <p>Deze donor-T-cellen kunnen twee kanten op werken:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          ze herkennen resterende tumorcellen als vreemd en geven een graft-versus-tumor of graft-versus-leukemie
          effect;
        </li>
        <li>
          ze kunnen ook gezond weefsel van de patiënt als vreemd herkennen en dan graft-versus-hostziekte (GVHD)
          veroorzaken.
        </li>
      </ul>
      <p>Allogene HSCT is daardoor een vorm van immuuntherapie.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Indicaties voor allogene HSCT</h3>
      <p>Belangrijke indicaties zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>hematologische maligniteiten, vooral AML en ALL;</li>
        <li>stamcelziekten zoals aplastische anemie;</li>
        <li>erfelijke aangeboren afwijkingen van het immuunsysteem, zoals SCID;</li>
        <li>hemoglobinopathieën, zoals thalassemie en sikkelcelanemie;</li>
        <li>overige aandoeningen, zoals lysosomale stapelingsziekten.</li>
      </ul>
      <p>
        Wanneer een passende HLA-gematchte verwante donor niet beschikbaar is, kunnen alternatieve stamcelbronnen worden
        gebruikt, zoals navelstrengbloed of een haplo-identieke donor.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Belangrijke kenmerken van allogene HSCT</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Onderwerp
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kern
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Bron</td>
              <td className="px-4 py-3 align-top">Stamcellen van een donor</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Belangrijk voordeel</td>
              <td className="px-4 py-3 align-top">Graft-versus-tumor effect</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Belangrijk nadeel</td>
              <td className="px-4 py-3 align-top">GVHD en risico op afstoting</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Belang van HLA-matching</td>
              <td className="px-4 py-3 align-top">Zo identiek mogelijk tussen donor en ontvanger</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
