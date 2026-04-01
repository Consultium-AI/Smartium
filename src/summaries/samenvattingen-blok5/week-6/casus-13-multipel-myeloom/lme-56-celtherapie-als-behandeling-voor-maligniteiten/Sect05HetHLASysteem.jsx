export default function Sect05HetHLASysteem() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Het HLA-systeem</h2>
      <p>
        Het HLA-systeem speelt een centrale rol bij acceptatie of afstoting van weefsels en dus ook van
        stamceltransplantaten. HLA staat voor humane leukocyten antigenen. Hoe groter de verschillen tussen patiënt en
        donor in HLA-antigenen, hoe groter de kans op afstoting van het transplantaat en op omgekeerde afstoting.
      </p>
      <p>
        Iedere persoon heeft twee haplotypen: één van de moeder en één van de vader. De kans dat een broer of zus dezelfde
        twee haplotypen erft, is 25%. Daarom is de kans op een HLA-identieke broer of zus ook 25%.
      </p>
      <p>
        De HLA-antigenen worden codominant tot expressie gebracht: zowel de maternale als de paternale variant staat op het
        celoppervlak.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">HLA-klasse I en II</h3>
      <p>HLA-antigenen worden verdeeld in klasse I en klasse II.</p>
      <p>HLA-klasse I: HLA-A, HLA-B en HLA-C</p>
      <p>
        Deze komen voor op alle kernhoudende cellen en op trombocyten. Ze presenteren intracellulaire antigenen of peptiden
        aan CD8+ T-lymfocyten. De gepresenteerde peptiden zijn meestal 8–11 aminozuren lang.
      </p>
      <p>HLA-klasse II: HLA-DR, HLA-DQ en HLA-DP</p>
      <p>
        Deze komen voor op antigeenpresenterende cellen zoals macrofagen, B-cellen en dendritische cellen. Ze presenteren
        extracellulaire antigenen aan CD4+ T-lymfocyten. De peptiden zijn meestal 9–30 aminozuren lang.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. HLA-klasse I versus HLA-klasse II</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                HLA-klasse I
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                HLA-klasse II
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Voorbeelden</td>
              <td className="px-4 py-3 align-top">HLA-A, -B, -C</td>
              <td className="px-4 py-3 align-top">HLA-DR, -DQ, -DP</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Komt voor op</td>
              <td className="px-4 py-3 align-top">Alle kernhoudende cellen en trombocyten</td>
              <td className="px-4 py-3 align-top">Antigeenpresenterende cellen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type antigeen</td>
              <td className="px-4 py-3 align-top">Intracellulair</td>
              <td className="px-4 py-3 align-top">Extracellulair</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">T-celrespons</td>
              <td className="px-4 py-3 align-top">CD8+ T-cellen</td>
              <td className="px-4 py-3 align-top">CD4+ T-cellen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandacht:</strong> waarom zijn HLA-antigenen zo
          belangrijk bij transplantatie?{'  '}
          <strong className="text-primary-900 dark:text-primary-200">Mini-antwoord:</strong> omdat verschillen in HLA de
          kans op afstoting en GVHD vergroten, dus donor en ontvanger moeten zo goed mogelijk matchen.
        </p>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Alloreactiviteit en minor antigens</h3>
      <p>
        De herkenning van vreemde HLA-antigenen en de reactie daarop heet alloreactiviteit. T-cellen kunnen allo-donor-HLA
        op twee manieren herkennen:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>direct: T-cellen binden aan vreemd HLA op het oppervlak van een andere cel;</li>
        <li>indirect: vreemd HLA wordt gepresenteerd in de context van het eigen HLA-systeem.</li>
      </ul>
      <p>
        Zelfs als donor en ontvanger HLA-identiek zijn, kan toch nog afstoting optreden. Dat komt door verschillen in
        eiwitten die gecodeerd worden door polymorfe genen buiten het HLA-systeem. Dat zijn de zogenoemde minor
        HLA-antigenen.
      </p>
      <p>
        Bijvoorbeeld: het H-Y-antigeen is specifiek voor mannen. Wanneer een vrouwelijke donor stamcellen geeft aan een
        mannelijke ontvanger, kan dat risico op omgekeerde afstoting groter maken.
      </p>
    </div>
  )
}
