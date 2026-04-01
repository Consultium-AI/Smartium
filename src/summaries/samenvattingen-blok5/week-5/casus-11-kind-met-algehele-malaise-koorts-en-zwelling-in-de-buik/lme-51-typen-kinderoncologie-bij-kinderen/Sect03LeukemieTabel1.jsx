export default function Sect03LeukemieTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Leukemie</h2>
      <p>
        Leukemie ontstaat in het beenmerg, waar normaal gesproken bloedcellen worden gevormd. Vanuit de hematopoëtische
        stamcel ontwikkelen zich rode bloedcellen, bloedplaatjes en witte bloedcellen. Als de ontwikkeling van deze cellen
        stagneert en daarna ongecontroleerde proliferatie optreedt, ontstaat leukemie. Bij een afwijking in de ontwikkeling
        van lymfatische cellen spreek je van acute lymfatische leukemie (ALL). Wanneer de afwijking zit in de ontwikkeling
        van rode bloedcellen, bloedplaatjes of granulocyten, spreek je van acute myeloïde leukemie (AML).
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. ALL en AML naast elkaar</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                ALL
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                AML
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Ontstaan</td>
              <td className="px-3 py-3 align-top">Uit de lymfatische lijn</td>
              <td className="px-3 py-3 align-top">Uit de myeloïde lijn</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Epidemiologie</td>
              <td className="px-3 py-3 align-top">
                Ongeveer 115 kinderen per jaar; 85% B-lymfocyten, 15% T-lymfocyten; vooral peuters, kleuters en pubers; kan
                ook bij &lt; 1 jaar voorkomen
              </td>
              <td className="px-3 py-3 align-top">Ongeveer 25 kinderen per jaar; komt op alle leeftijden voor</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Belangrijkste klachten</td>
              <td className="px-3 py-3 align-top">
                Bleekheid, bloedingsneiging, infecties, botpijn, zenuwstelseluitval, vergrote testis, algehele malaise
              </td>
              <td className="px-3 py-3 align-top">
                Bleekheid, bloedingsneiging, infecties, botpijn, algehele malaise; daarnaast tandvleesbloeding en cerebrale
                bloeding kunnen opvallen
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Diagnostiek</td>
              <td className="px-3 py-3 align-top">Bloedonderzoek, beenmergpunctie, lumbaalpunctie, beeldvorming</td>
              <td className="px-3 py-3 align-top">Zelfde diagnostische stappen, maar mediastinale verbreding wordt niet gezien</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Behandeling</td>
              <td className="px-3 py-3 align-top">
                ALL-protocollen zoals ALL2gether, ALL-Interfant bij kinderen &lt; 1 jaar en ESPALL bij speciale genetische
                kenmerken; duur ruim 2 jaar; stamceltransplantatie zelden nodig
              </td>
              <td className="px-3 py-3 align-top">
                AML-protocol; duur ongeveer 1/2 jaar; stamceltransplantatie vaker nodig dan bij ALL
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Complicaties</td>
              <td className="px-3 py-3 align-top">Infecties, alopecia, diabetes, trombose, convulsies, pijn door neuropathie</td>
              <td className="px-3 py-3 align-top">Grootendeels vergelijkbaar met ALL</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Late effecten</td>
              <td className="px-3 py-3 align-top">Vermoeidheid, concentratiestoornissen, botproblemen, zelden verminderde hartpompfunctie</td>
              <td className="px-3 py-3 align-top">Vermoeidheid, infertiliteit, cardiotoxiciteit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
