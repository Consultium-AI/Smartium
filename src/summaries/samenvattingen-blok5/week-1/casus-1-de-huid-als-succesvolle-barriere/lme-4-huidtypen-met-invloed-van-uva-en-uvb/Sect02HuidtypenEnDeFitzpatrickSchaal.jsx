export default function Sect02HuidtypenEnDeFitzpatrickSchaal() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Huidtypen en de Fitzpatrick-schaal</h2>
      <p>
        De huid verschilt wereldwijd in kleur en in gevoeligheid voor zonlicht. Binnen de dermatologie wordt vaak
        gewerkt met de Fitzpatrick-schaal. Dat is een indeling van huidtypen op basis van hoe de huid reageert op
        zonlicht en op pigmentatie.
      </p>
      <p>
        De huidtypen lopen van zeer licht gepigmenteerd tot zeer donker gepigmenteerd. Daarbij geldt: hoe hoger het
        huidtype, hoe minder snel iemand verbrandt en hoe sneller de huid bruin wordt.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Fitzpatrick-huidtypen</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Huidtype
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Reactie op zon
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Pigmentatie
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">I</td>
              <td className="px-4 py-3 align-top">Verbrandt altijd, wordt niet bruin</td>
              <td className="px-4 py-3 align-top">Zeer lichte huid</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">II</td>
              <td className="px-4 py-3 align-top">Verbrandt makkelijk, wordt moeilijk bruin</td>
              <td className="px-4 py-3 align-top">Lichte huid</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">III</td>
              <td className="px-4 py-3 align-top">Verbrandt mild, wordt geleidelijk bruin</td>
              <td className="px-4 py-3 align-top">Licht getinte huid</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">IV</td>
              <td className="px-4 py-3 align-top">Verbrandt nauwelijks, wordt snel bruin</td>
              <td className="px-4 py-3 align-top">Matig getinte huid</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">V</td>
              <td className="px-4 py-3 align-top">Verbrandt zeer zelden, wordt zeer snel bruin</td>
              <td className="px-4 py-3 align-top">Donkere huid</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">VI</td>
              <td className="px-4 py-3 align-top">Verbrandt nooit, wordt zeer snel bruin</td>
              <td className="px-4 py-3 align-top">Zeer donkere huid</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De Fitzpatrick-schaal is ontwikkeld om dermatologen te helpen bij het inschatten van de gevoeligheid voor
        UV-straling en het risico op huidkanker. Het is wel een globale indeling en beschrijft de rijke variatie in
        huidkleuren maar beperkt.
      </p>
    </div>
  )
}
