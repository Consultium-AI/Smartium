export default function Sect03ImmuunsuppressieveGeneesmiddelenTabel1EnKlassiek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Immuunsuppressieve geneesmiddelen</h2>
      <p>
        Immuunsuppressiva vormen een heterogene groep. Sommige middelen werken vooral op rijpe immuuncellen en remmen hun
        functie, terwijl andere de groei of rijping van cellen remmen. Daardoor zijn de effecten en bijwerkingen
        verschillend.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Belangrijkste immunosuppressieve geneesmiddelen
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Middel/groep
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Werking
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijke toepassing
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijke bijwerkingen/opmerkingen
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Corticosteroïden</td>
              <td className="px-4 py-3 align-top">Remmen cytokine-gen transcriptie</td>
              <td className="px-4 py-3 align-top">Brede immuunsuppressie</td>
              <td className="px-4 py-3 align-top">Werken op functies van rijpe cellen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Calcineurineremmers: ciclosporine, tacrolimus
              </td>
              <td className="px-4 py-3 align-top">Remmen calcineurine en daarmee T-celactivatie</td>
              <td className="px-4 py-3 align-top">Transplantatie, auto-immuunziekten</td>
              <td className="px-4 py-3 align-top">Werken op functies van rijpe cellen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Azathioprine</td>
              <td className="px-4 py-3 align-top">Purinederivaat; remt DNA-replicatie in delende cellen</td>
              <td className="px-4 py-3 align-top">Preventie van afstoting, systemische auto-immuunziekten</td>
              <td className="px-4 py-3 align-top">
                Beenmergsuppressie, controle van leukocyten en trombocyten nodig, darmepitheel kan ook worden beïnvloed
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Mycofenolaatmofetil</td>
              <td className="px-4 py-3 align-top">Remt IMP-dehydrogenase en dus de novo purinesynthese</td>
              <td className="px-4 py-3 align-top">
                Onderhoudsimmuunsuppressie na transplantatie, vervanging bij azathioprineproblemen
              </td>
              <td className="px-4 py-3 align-top">Selectief voor geactiveerde T- en B-cellen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Cyclofosfamide</td>
              <td className="px-4 py-3 align-top">Alkylerend middel; interfereert met DNA-verdubbeling</td>
              <td className="px-4 py-3 align-top">
                Agressieve auto-immuunziekten, HSCT-conditionering, sommige maligniteiten
              </td>
              <td className="px-4 py-3 align-top">
                Infectierisico, reactivering van virussen, blaascarcinoom bij langdurig gebruik
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Klassieke middelen: corticosteroïden en calcineurineremmers
      </h3>
      <p>
        Corticosteroïden remmen de transcriptie van cytokinegenen. Daardoor wordt de ontstekingsreactie breed
        onderdrukt.
      </p>
      <p>
        Calcineurineremmers zoals ciclosporine en tacrolimus remmen calcineurine. Calcineurine is belangrijk voor
        T-celactivatie. Als die stap geblokkeerd wordt, komt de T-cel minder goed tot actie.
      </p>
    </div>
  )
}
