export default function Sect14DietistScreeningEnAdviezen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wanneer verwijs je naar een diëtist?</h2>
      <p>
        Een patiënt met kanker wordt doorverwezen naar een diëtist als er aanwijzingen zijn voor risico op ondervoeding of
        als voedingsproblemen een rol gaan spelen. Belangrijke verwijzingscriteria zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>risico op ondervoeding vastgesteld met een gevalideerd screeningsinstrument;</li>
        <li>onbedoeld gewichtsverlies van &gt;5% in de laatste maand of &gt;10% in de laatste 6 maanden;</li>
        <li>ongewilde gewichtstoename van &gt;3 kg sinds de diagnose of overgewicht;</li>
        <li>2 of meer voedingsgerelateerde klachten;</li>
        <li>langer dan 1 week symptomen die voedselinname, passage en/of absorptie ernstig belemmeren.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Screening op ondervoeding</h3>
      <p>Twee belangrijke screeningsinstrumenten zijn MUST en SNAQ.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 4. Twee screeningsinstrumenten voor ondervoeding
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Instrument
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Waar let je op?
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Interpretatie
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">MUST</td>
              <td className="px-4 py-3 align-top">BMI, gewichtsverlies, effect van acute ziekte / geen voedselinname &gt;5 dagen</td>
              <td className="px-4 py-3 align-top">
                0 punten: geen ondervoeding; 1 punt: matige ondervoeding; 2 of meer punten: ernstige ondervoeding
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">SNAQ</td>
              <td className="px-4 py-3 align-top">Onbedoeld gewichtsverlies, verminderde eetlust, gebruik van drink- of sondevoeding</td>
              <td className="px-4 py-3 align-top">
                Geeft aan of actie nodig is, zoals extra tussendoortjes of behandeling door de diëtist
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Adviezen van de diëtist bij kankercachexie</h3>
      <p>
        De diëtist probeert de voedingsinname te verbeteren, de spiermassa zo goed mogelijk te behouden en klachten te
        verminderen. De belangrijkste adviezen zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>voldoende drinken, gemiddeld 1,5 tot 2 liter per dag;</li>
        <li>liever niet drinken tijdens de maaltijd, omdat dit snel een vol gevoel kan geven;</li>
        <li>voldoende calorieën eten en drinken, vooral via vetten en koolhydraten;</li>
        <li>
          voldoende eiwitten nemen om spiermassa te behouden en te herstellen; bij kanker en behandeling is vaak 1,2 tot
          1,5 gram eiwit per kilogram lichaamsgewicht nodig;
        </li>
        <li>
          eiwitbronnen kunnen dierlijk of plantaardig zijn; dierlijke eiwitten zitten vooral in vlees, vis, melk, kaas en
          eieren, plantaardige in vleesvervangers, soja, peulvruchten en noten;
        </li>
        <li>vaker kleine hapjes of tussendoortjes nemen met iets wat goed smaakt;</li>
        <li>een actieve leefstijl behouden om spierkracht te ondersteunen;</li>
        <li>zo nodig oncologische fysiotherapie overwegen;</li>
        <li>
          wanneer gewone voeding onvoldoende is, starten met energie- en/of eiwitverrijkte dieetproducten, zoals
          drinkvoeding, sondevoeding of eiwitpoeders;
        </li>
        <li>de eetlust ondersteunen met praktische voedingsadviezen.</li>
      </ul>
    </div>
  )
}
