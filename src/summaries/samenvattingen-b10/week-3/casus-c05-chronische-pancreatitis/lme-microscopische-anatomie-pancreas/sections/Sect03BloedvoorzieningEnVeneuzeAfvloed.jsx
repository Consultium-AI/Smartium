export default function Sect03BloedvoorzieningEnVeneuzeAfvloed () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Bloedvoorziening en veneuze afvloed</h2>
      <p>
        De pancreas ligt in een goed doorbloed gebied. De arteriële toevoer verloopt via twee belangrijke takken:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          de <strong className="text-slate-900 dark:text-slate-100">a. pancreaticoduodenalis superior</strong>;
        </li>
        <li>
          de <strong className="text-slate-900 dark:text-slate-100">a. pancreaticoduodenalis inferior</strong>.
        </li>
      </ul>
      <p>
        De <strong className="text-slate-900 dark:text-slate-100">a. pancreaticoduodenalis superior</strong> ontspringt uit
        de <strong className="text-slate-900 dark:text-slate-100">a. gastroduodenalis</strong>.
      </p>
      <p>
        De <strong className="text-slate-900 dark:text-slate-100">a. pancreaticoduodenalis inferior</strong> ontspringt uit
        de <strong className="text-slate-900 dark:text-slate-100">a. mesenterica superior</strong>.
      </p>
      <p>
        Deze vaten vormen samen een <strong className="text-slate-900 dark:text-slate-100">arteriële arcade</strong> rondom
        de pancreas en het duodenum. De <strong className="text-slate-900 dark:text-slate-100">pancreastaart</strong> wordt
        vooral van bloed voorzien door takken van de <strong className="text-slate-900 dark:text-slate-100">a. lienalis</strong>.
      </p>
      <p>
        De veneuze afvloed loopt via de <strong className="text-slate-900 dark:text-slate-100">v. pancreaticoduodenalis superior</strong>{' '}en{' '}
        <strong className="text-slate-900 dark:text-slate-100">inferior</strong>.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Belangrijkste bloedvoorziening van de pancreas
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Gebied</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Arteriële toevoer</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Veneuze afvloed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Kop en duodenumregio</td>
              <td className="p-3 align-top">a. pancreaticoduodenalis superior en inferior</td>
              <td className="p-3 align-top">v. pancreaticoduodenalis superior en inferior</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Proximale aanvoer</td>
              <td className="p-3 align-top">a. gastroduodenalis</td>
              <td className="p-3 align-top">via pancreatoduodenale venen</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Distale aanvoer, vooral staart</td>
              <td className="p-3 align-top">takken van a. lienalis</td>
              <td className="p-3 align-top">veneuze afvloed via pancreasvenen</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
