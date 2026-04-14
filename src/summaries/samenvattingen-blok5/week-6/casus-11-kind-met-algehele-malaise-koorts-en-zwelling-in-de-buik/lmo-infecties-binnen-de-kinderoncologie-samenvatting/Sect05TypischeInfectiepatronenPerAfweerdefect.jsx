export default function Sect05TypischeInfectiepatronenPerAfweerdefect() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Typische infectiepatronen per afweerdefect</h2>
      <p>
        Niet elk afweerdefect geeft hetzelfde infectiepatroon. Dat is klinisch belangrijk, omdat het helpt om van infectiepatroon terug te redeneren naar welk deel van de afweer mogelijk tekortschiet.
      </p>

      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 pt-2">Tabel 3. Typische infecties bij verschillende afweerdefecten</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="w-full min-w-[40rem] border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800/80">
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Type afweerdefect
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Voorbeelden
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Typische infecties en verwekkers
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">B-celdefecten</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">CVID, XLA, IgA-deficiëntie, IgG-subklassedeficiëntie</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                vooral luchtweginfecties en maag-darminfecties; gekapselde micro-organismen, darmparasieten en enterovirussen
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">T-celdefecten en gecombineerde B-/T-celdefecten</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">CID, SCID, CD40L-deficiëntie</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                luchtweginfecties, maag-darminfecties, systemische virale infecties en virale reactivaties; bacteriën, virussen, schimmels, gisten en parasieten
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Granulocytenstoornissen</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">CGD, congenitale neutropeniesyndromen</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                luchtweginfecties, maag-darminfecties, tandvleesinfecties, abcessen en botinfecties; bacteriën, schimmels en gisten
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Complementstoornissen</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">C2-, C3-, C5- tot C8-deficiëntie</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                meningitis, luchtweginfecties en invasieve infecties; vooral gekapselde en gramnegatieve bacteriën
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Stoornissen in immuunregulatie</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">HLH, XLP, ALPS</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">vaak een afwijkende respons op virale infecties</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Overige omschreven immunodeficiënties</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Wiskott-Aldrich, DiGeorge, hyper-IgE-syndroom</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">infectiepatroon afhankelijk van het functionele defect</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Deze indeling helpt om klinische patronen te herkennen. Een kind met recidiverende otitiden en pneumonieën past anders dan een kind met diepe abcessen en granulomateuze afwijkingen. Bij CGD zijn granulocyten wel aanwezig, maar niet in staat om gefagocyteerd materiaal normaal te doden. Daardoor passen diepe infecties, granuloomvorming en hardnekkige ontstekingen goed in dat beeld. Een kind met SCID daarentegen kan juist ernstige gecombineerde infecties krijgen met bacteriën, virussen en schimmels tegelijk.
      </p>
    </div>
  )
}
