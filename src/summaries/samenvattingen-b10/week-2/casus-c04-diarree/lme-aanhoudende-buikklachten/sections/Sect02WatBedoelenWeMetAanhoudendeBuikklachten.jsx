export default function Sect02WatBedoelenWeMetAanhoudendeBuikklachten() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Aanhoudende buikklachten: wat bedoelen we daarmee?</h2>
      <p>
        Aanhoudende lichamelijke klachten, afgekort ALK, zijn klachten waarvoor de arts niet of onvoldoende een lichamelijke verklaring vindt. In deze e-module draait het vooral om
        aanhoudende buikklachten.
      </p>
      <p>
        ALK is een verzamelnaam voor functionele stoornissen. Dat betekent dat er klachten zijn zonder dat er een duidelijke lichamelijke afwijking wordt aangetoond. Het is belangrijk om te
        onthouden dat elk medisch specialisme weer andere vormen van ALK kent.
      </p>
      <p>
        Aanhoudende buikklachten kunnen dus bestaan terwijl aanvullend onderzoek geen afwijkingen laat zien. De klachten kunnen wel echt hinderlijk zijn, langdurig aanwezig zijn en veel
        invloed hebben op het dagelijks leven.
      </p>

      <div className="p-5 bg-violet-50 dark:bg-violet-950/40 rounded-xl border border-violet-200 dark:border-violet-600/40 space-y-2">
        <p>
          <strong className="text-violet-900 dark:text-violet-200">Aandachtsvraag:</strong> Wanneer noem je klachten in deze context aanhoudend?{'  '}
          <strong className="text-violet-900 dark:text-violet-200">Mini-antwoord:</strong> Als een patiënt al minimaal een aantal weken lichamelijke klachten heeft zonder aangetoonde
          lichamelijke afwijkingen, ook niet na uitgebreid aanvullend onderzoek.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Kernbegrippen rond aanhoudende buikklachten</h3>
        <div className="overflow-x-auto mt-4 rounded-xl border border-emerald-200/80 dark:border-emerald-600/40">
          <table className="w-full text-sm border-collapse bg-white dark:bg-slate-900/50">
            <thead>
              <tr className="bg-emerald-100 dark:bg-emerald-900/40">
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">
                  Begrip
                </th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">
                  Betekenis
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">ALK</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  Aanhoudende lichamelijke klachten zonder voldoende lichamelijke verklaring
                </td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Functionele stoornis
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  Klachten waarbij de functie verstoord is, maar geen duidelijke lichamelijke afwijking wordt gevonden
                </td>
              </tr>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">PDS</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  Prikkelbaredarmsyndroom, een voorbeeld van ALK dat vaak voorkomt binnen de interne geneeskunde
                </td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Persisterende ALK
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  Klachten die langdurig blijven bestaan, ook na verloop van tijd
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
