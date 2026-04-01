export default function Sect03OorzakenVanIntoxicatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">2. Oorzaken van intoxicatie</h2>
      <p>
        Een intoxicatie kan op verschillende manieren ontstaan. De module maakt een indeling in <span className="font-semibold">niet-intentioneel</span> en <span className="font-semibold">intentioneel</span>.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Niet-intentionele intoxicatie</h3>
      <p>
        Hierbij neemt iemand <span className="font-semibold">per ongeluk</span> te veel medicijnen of een andere stof in. Dat kan bijvoorbeeld gebeuren doordat het etiket niet duidelijk is of doordat een vergissing wordt gemaakt. De persoon had dus <span className="font-semibold">niet de intentie</span> om zichzelf te vergiftigen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Intentionele intoxicatie</h3>
      <p>
        Hierbij neemt iemand <span className="font-semibold">opzettelijk</span> te veel medicatie in. Dat kan gebeuren uit paniek, of omdat iemand zichzelf kwaad wil aandoen of het leven wil beëindigen. Zo’n poging om het leven te beëindigen heet <span className="font-semibold">tentamen suicidii</span>; dit wordt vaak afgekort tot <span className="font-semibold">TS</span>.
      </p>
      <p>
        Een intoxicatie kan ook door de zorgverlener zelf worden veroorzaakt, bijvoorbeeld door een verkeerd voorgeschreven middel, een bereidingsfout of een toedienfout.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Indeling van intoxicaties naar oorzaak en verloop</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Indeling</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Niet-intentioneel</td>
              <td className="px-4 py-3 align-top">Per ongeluk te veel ingenomen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Intentioneel</td>
              <td className="px-4 py-3 align-top">Opzettelijk te veel ingenomen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Acute intoxicatie</td>
              <td className="px-4 py-3 align-top">In één keer heel veel ingenomen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Chronische intoxicatie</td>
              <td className="px-4 py-3 align-top">Gedurende langere tijd steeds iets te veel ingenomen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Mono-intoxicatie</td>
              <td className="px-4 py-3 align-top">Slechts één geneesmiddel ingenomen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Mengintoxicatie</td>
              <td className="px-4 py-3 align-top">Meerdere geneesmiddelen of middelen gebruikt</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een <span className="font-semibold">chronische intoxicatie</span> ontstaat wanneer iemand langere tijd steeds iets te veel inneemt. Dat kan ook gebeuren als de nier- of leverfunctie slechter wordt en de dosering niet wordt aangepast. Het tegenovergestelde is een <span className="font-semibold">acute intoxicatie</span>: in één keer is een grote hoeveelheid ingenomen.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 text-sm text-amber-900 dark:text-amber-100 space-y-2">
        <p className="m-0">
          <span className="font-semibold">Aandachtsvraag:</span>
          {' '}
          wat bedoel je met een mengintoxicatie?
        </p>
        <p className="m-0">
          <span className="font-semibold">Mini-antwoord:</span>
          {' '}
          dat er <span className="font-semibold">meerdere middelen</span> zijn gebruikt, niet maar één.
        </p>
      </div>
    </div>
  )
}
