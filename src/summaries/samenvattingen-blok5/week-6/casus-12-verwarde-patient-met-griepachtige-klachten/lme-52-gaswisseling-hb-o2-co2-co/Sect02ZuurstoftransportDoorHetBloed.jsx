export default function Sect02ZuurstoftransportDoorHetBloed() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Zuurstoftransport door het bloed</h2>
      <p>
        Zuurstof wordt vanuit de longen via het bloed vervoerd naar de perifere weefsels, zoals spieren, hersenen en lever.
        Het bloed kan zuurstof op twee manieren dragen: een klein deel is opgelost in plasma, en het grootste deel zit
        gebonden aan hemoglobine in de rode bloedcellen.
      </p>
      <p>
        Hemoglobine is hier dus de sleutel. Door de aanwezigheid van hemoglobine wordt de zuurstoftransportcapaciteit van
        het bloed enorm verhoogd. Zonder hemoglobine zou de hoeveelheid zuurstof die in bloed vervoerd kan worden veel te
        klein zijn om aan de behoefte van het lichaam te voldoen, zeker bij inspanning.
      </p>
      <p>Belangrijke getallen om te onthouden:</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Belangrijke waarden bij zuurstoftransport</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Opgeloste O2 in bloed</td>
              <td className="px-4 py-3 align-top">ongeveer 0,3 mL O2 per 100 mL bloed</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Hb-gebonden O2 in bloed</td>
              <td className="px-4 py-3 align-top">ongeveer 20 mL O2 per 100 mL bloed</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Totale hoeveelheid Hb in bloed</td>
              <td className="px-4 py-3 align-top">ongeveer 2,25 mmol/L</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Afgegeven O2 in rust</td>
              <td className="px-4 py-3 align-top">ongeveer 5 mL O2 per 100 mL bloed</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Normale paO2 op zeeniveau</td>
              <td className="px-4 py-3 align-top">75–100 mmHg</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Normale SpO2</td>
              <td className="px-4 py-3 align-top">95–98%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een normale zuurstofverzadiging zegt dus niet alleen iets over “hoeveel zuurstof er in bloed zit”, maar vooral over
        hoeveel hemoglobine met zuurstof is beladen. Bij rust wordt ongeveer 25% van het aanwezige zuurstofaanbod aan de
        weefsels afgegeven; bij inspanning stijgt die afgifte, omdat de behoefte dan groter wordt en het hartminuutvolume
        toeneemt.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandachtsvraag:</strong> waarom is opgeloste zuurstof
          alleen niet genoeg? <strong className="text-primary-900 dark:text-primary-200">Mini-antwoord:</strong> omdat de
          oplosbare hoeveelheid zuurstof in bloed veel te klein is om in rust, laat staan bij inspanning, aan de
          zuurstofbehoefte van het lichaam te voldoen.
        </p>
      </div>
    </div>
  )
}
