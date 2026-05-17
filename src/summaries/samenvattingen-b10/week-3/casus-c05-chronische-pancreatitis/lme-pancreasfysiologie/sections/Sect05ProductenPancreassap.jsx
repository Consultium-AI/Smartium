export default function Sect05ProductenPancreassap () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        De belangrijkste producten van het pancreassap
      </h2>
      <p>
        Het pancreassap bevat vijf kerncomponenten die steeds terugkomen als hoofdonderdelen van de exocriene secretie:
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Belangrijkste componenten van het pancreassap
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Component</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Functie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">HCO3−</td>
              <td className="p-3 align-top">Verhoogt de pH en beschermt het darmepitheel</td>
            </tr>
            <tr>
              <td className="p-3 align-top">α-Amylase</td>
              <td className="p-3 align-top">Vertering van koolhydraten</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Peptidasen</td>
              <td className="p-3 align-top">Vertering van eiwitten</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Lipasen</td>
              <td className="p-3 align-top">Vertering van vetten</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Na+, Cl− en H2O</td>
              <td className="p-3 align-top">Hydratatie van de secretie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Daarnaast bevat de pancreas ook andere stoffen, zoals RNasen en DNasen, trypsine-inhibitoren,
        pancreas-geassocieerd eiwit en andere componenten die in steengruppen en eiwitaggregaten kunnen voorkomen.
      </p>
    </div>
  )
}
