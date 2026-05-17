export default function Sect02InleidingEnSamenstelling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Inleiding: waarom vetvertering apart aandacht vraagt
      </h2>
      <p>
        Vetten, oftewel lipiden, zijn een belangrijk deel van onze voeding. Ze leveren energie, bevatten essentiële
        vetzuren en zijn nodig voor de opname van de vet-oplosbare vitaminen A, D, E en K. Tegelijk zijn lipiden sterk
        apolair, dus slecht oplosbaar in water. En juist in de darm gebeurt de afbraak in een waterig milieu. Daardoor
        is vetvertering ingewikkelder dan de vertering van veel andere voedingsstoffen.
      </p>
      <p>
        Voor een goede vetvertering zijn daarom meerdere factoren tegelijk nodig: lipase-activiteit, galzouten en
        darmperistaltiek. Samen zorgen zij ervoor dat grote vetdruppels worden afgebroken, de afbraakproducten kunnen
        worden opgenomen en de galzouten daarna weer grotendeels kunnen worden teruggewonnen.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">De samenstelling van vet in de voeding</h3>
      <p>
        De belangrijkste vetten in de voeding zijn triglyceriden. Daarnaast komen fosfolipiden en cholesterol voor. In de
        module wordt dit kwantitatief zo weergegeven:
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Belangrijkste bestanddelen van dieetvet
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Bestanddeel</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Aandeel in dieetvet</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Triglyceriden</td>
              <td className="p-3 align-top text-right">&gt;90%</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Fosfolipiden</td>
              <td className="p-3 align-top text-right">ongeveer 5%</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Cholesterol</td>
              <td className="p-3 align-top text-right">ongeveer 0,5%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Naast deze vetten is dieetvet de bron van essentiële vetzuren, zoals linoleenzuur en linolzuur. Ook
        vet-oplosbare vitaminen worden via vet opgenomen. Een gezond dieet bevat ongeveer 100 gram vet per dag, wat
        grofweg 30–40% van de dagelijkse energiebehoefte kan dekken. In de westerse voeding is de vetinname vaak nog
        hoger.
      </p>

      <div className="rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-slate-50/80 dark:bg-slate-800/50 p-4 space-y-3 border-l-4 border-indigo-400 dark:border-indigo-500/85">
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Aandachtsvraag:</strong> Waarom is
          vetvertering zo afhankelijk van gal?
        </p>
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Mini-antwoord:</strong> Omdat vetten
          slecht oplossen in water en galzouten helpen om vetafbraakproducten in kleine deeltjes in oplossing te houden.
        </p>
      </div>
    </div>
  )
}
