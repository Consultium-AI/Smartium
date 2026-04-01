export default function Sect03Leefstijl() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">1. Leefstijl bij chronische nierschade</h2>
      <p>
        Een gezonde leefstijl is fundamenteel bij chronische nierschade. Het doel is niet alleen om verdere nierschade te beperken, maar vooral ook om hart- en vaatziekten en sterfte te verminderen. Daarom wordt leefstijl gezien als een belangrijk onderdeel van de totale zorg voor deze patiënten.
      </p>
      <p>De leefstijlcomponenten worden vaak samengevat met de BRAVO-componenten:</p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 1. Leefstijlcomponenten bij chronische nierschade</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Component</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Inhoud</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Belang bij CNS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Beweging</td>
              <td className="px-4 py-3">Voldoende bewegen en een gezond gewicht behouden</td>
              <td className="px-4 py-3">Ondersteunt algemene gezondheid en helpt bij gewichtsbehoud of gewichtsverlies</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">Roken</td>
              <td className="px-4 py-3">Stoppen met roken</td>
              <td className="px-4 py-3">Vermindert risico op hart- en vaatziekten en kanker; stoppen heeft duidelijke meerwaarde</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Alcohol</td>
              <td className="px-4 py-3">Beperking van alcoholgebruik</td>
              <td className="px-4 py-3">Past binnen een gezonde leefstijl</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">Voeding</td>
              <td className="px-4 py-3">Gezonde voeding</td>
              <td className="px-4 py-3">Vormt een kernonderdeel van de behandeling</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Ontspanning</td>
              <td className="px-4 py-3">Voldoende rust en stressmanagement</td>
              <td className="px-4 py-3">Ondersteunt de totale gezondheid</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Stoppen met roken</h3>
        <p>
          Stoppen met roken is een duidelijke aanbeveling. Het gaat hierbij niet alleen om het verlagen van het risico op hart- en vaatziekten, maar ook om het verminderen van het risico op kanker en longziekten. Ondersteunende therapie, zoals nicotinevervangers of begeleiding door een gespecialiseerde zorgverlener, vergroot de kans dat iemand blijvend stopt.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Voldoende bewegen en gezond gewicht</h3>
        <p className="mb-3">
          Bewegen is belangrijk, maar er bestaat geen universele, strakke definitie van wat “voldoende” precies is voor iedereen. Het officiële advies is minstens 150 minuten per week matig-intensieve inspanning, waarbij je lichaam iets harder werkt en er sprake is van enige zweetvorming. Tegelijk moet altijd rekening worden gehouden met de mogelijkheden van de individuele patiënt.
        </p>
        <p className="mb-3">
          Soms kan door comorbiditeit die 150 minuten niet haalbaar zijn. Dan geldt: elke minuut is meegenomen. Daarnaast moet een zittende leefstijl worden vermeden. Bij patiënten met obesitas wordt gewichtsverlies geadviseerd, zonder dat daarbij direct een exacte methode hoeft te worden voorgeschreven.
        </p>
        <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
          <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
            <em>Waarom is bewegen zo&apos;n belangrijk onderdeel van de aanpak?</em>  Kort antwoord: omdat het past binnen de brede, holistische behandeling van CNS en helpt om de algemene gezondheid te ondersteunen.
          </p>
        </div>
        <p className="mt-3 mb-0">
          Als extra ondersteuning kunnen patiënten worden verwezen naar bijvoorbeeld een diëtist, fysiotherapeut of lifestyle coach.
        </p>
      </div>
    </div>
  )
}
