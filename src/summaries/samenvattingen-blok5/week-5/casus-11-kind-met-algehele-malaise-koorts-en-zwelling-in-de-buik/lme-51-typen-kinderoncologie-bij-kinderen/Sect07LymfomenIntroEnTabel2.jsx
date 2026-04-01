export default function Sect07LymfomenIntroEnTabel2() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Lymfomen</h2>
      <p>
        Bij kinderen komen vaak vergrote lymfeklieren voor. Dat is meestal goedaardig: meer dan 95% van de
        lymfeklierzwellingen is goedaardig en vaak gerelateerd aan infecties. Verder onderzoek is vooral nodig als een klier:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>te groot is;</li>
        <li>4 tot 6 weken blijft bestaan;</li>
        <li>blijft groeien.</li>
      </ul>
      <p>Er zijn twee hoofdvormen van kwaadaardige lymfeklierzwelling:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>non-Hodgkinlymfoom</li>
        <li>Hodgkinlymfoom</li>
      </ul>
      <p>
        Non-Hodgkinlymfoom wordt weer onderverdeeld in verschillende vormen, waaronder Burkittlymfoom, T-non-Hodgkinlymfoom,
        grootcellig B-cellymfoom en LCAL.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Non-Hodgkinlymfoom en Hodgkinlymfoom</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Non-Hodgkinlymfoom
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Hodgkinlymfoom
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Epidemiologie</td>
              <td className="px-3 py-3 align-top">
                30–50 kinderen per jaar in Nederland; op alle leeftijden; associatie met Epstein-Barr-virus
              </td>
              <td className="px-3 py-3 align-top">
                30–40 kinderen per jaar in Nederland; vooral bij pubers; associatie met Epstein-Barr-virus
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Symptomen</td>
              <td className="px-3 py-3 align-top">
                Afhankelijk van de locatie: bolle buik, benauwdheid, lymfeklierzwelling, obstructie van urinewegen of darmen,
                snelgroeiend
              </td>
              <td className="px-3 py-3 align-top">
                Lymfeklierzwelling, nachtzweten, afvallen, jeuk, koorts, langzamer groeiend
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Diagnostiek</td>
              <td className="px-3 py-3 align-top">Bloedonderzoek, beeldvorming en biopt</td>
              <td className="px-3 py-3 align-top">Bloedonderzoek, beeldvorming en biopt</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Behandeling</td>
              <td className="px-3 py-3 align-top">
                Protocol afhankelijk van type; 4–9 maanden bij B-NHL, 2 jaar bij T-NHL; stamceltransplantatie speelt nauwelijks
                een rol
              </td>
              <td className="px-3 py-3 align-top">
                Euronet-protocol; duur ongeveer 6 maanden; stamceltransplantatie speelt nauwelijks een rol
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Complicaties</td>
              <td className="px-3 py-3 align-top">Tumorlysissyndroom bij start van chemotherapie, mucositis, neuropathie</td>
              <td className="px-3 py-3 align-top">
                Problemen door steroïden, zoals diabetes en gedragsveranderingen; neuropathie
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Late effecten</td>
              <td className="px-3 py-3 align-top">Over het algemeen vallen de lange-termijneffecten mee</td>
              <td className="px-3 py-3 align-top">
                Infertiliteit, secundaire maligniteiten, cardiotoxiciteit, vermoeidheid
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
