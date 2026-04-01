export default function Sect09PatientenEnTherapieenTabel2() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Waarom zijn de hallmarks belangrijk voor patiënten?</h2>
      <p>
        De hallmarks of cancer hebben directe betekenis voor de behandeling. Als je weet welk kenmerk in een tumor belangrijk
        is, kun je daar therapie op richten. Zo ontstaan verschillende behandelmogelijkheden, afhankelijk van welke
        groeiroutes of overlevingsstrategieën de tumor gebruikt.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Voorbeelden van therapieën die op hallmarks aangrijpen
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Doelwit
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeeld van behandeling
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Aanhoudende groeisignalen</td>
              <td className="px-4 py-3 align-top">EGFR-remmers</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Groeiremmende signalen ontwijken</td>
              <td className="px-4 py-3 align-top">Cyclin-dependent kinase inhibitors</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Celdood weerstaan</td>
              <td className="px-4 py-3 align-top">Pro-apoptotische BH3-mimetica</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Angiogenese stimuleren</td>
              <td className="px-4 py-3 align-top">Remmers van VEGF-signaal</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Weefsels binnendringen en uitzaaiing</td>
              <td className="px-4 py-3 align-top">Remmers van HGF/c-Met</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Tumor stimulerende ontsteking</td>
              <td className="px-4 py-3 align-top">Selectieve anti-inflammatoire middelen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Energiehuishouding herprogrammeren</td>
              <td className="px-4 py-3 align-top">Remmers van aerobe glycolyse</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Immuunsysteem ontwijken</td>
              <td className="px-4 py-3 align-top">Immune activating anti-CTLA4 mAb</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Oneindig kunnen delen</td>
              <td className="px-4 py-3 align-top">Telomerase-remmers</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Genoominstabiliteit en mutatie</td>
              <td className="px-4 py-3 align-top">PARP-remmers</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Deze voorbeelden zijn bedoeld als illustratie van hoe de hallmarks gebruikt kunnen worden als aangrijpingspunt voor
        therapie. Er bestaan dus behandelingen die proberen een bepaald kenmerk van de tumor te blokkeren.
      </p>
    </div>
  )
}
