export default function Sect10VolwasseneAcuteOfChronischeDiarree() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <hr className="my-8 border-slate-200 dark:border-slate-600" />
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Volwassene met diarree: acute of chronische diarree?</h2>
      <p>Bij volwassenen is het eerst belangrijk om onderscheid te maken tussen acute en chronische diarree.</p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 6. Acute versus chronische diarree</h3>
        <div className="overflow-x-auto mt-4 rounded-xl border border-emerald-200/80 dark:border-emerald-600/40">
          <table className="w-full text-sm border-collapse bg-white dark:bg-slate-900/50">
            <thead>
              <tr className="bg-emerald-100 dark:bg-emerald-900/40">
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">
                  Type
                </th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">
                  Definitie
                </th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">
                  Voorbeelden
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Acute diarree
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Kortdurend</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  Gastro-enteritis, reizigersdiarree, voedselvergiftiging, medicatie-geïnduceerd, bijvoorbeeld na antibiotica
                </td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Chronische diarree
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Langer dan 4 weken</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  Prikkelbare darm syndroom, IBD, coeliakie, lactose-intolerantie, galzuurdiarree, microscopische colitis, hyperthyreoïdie, SIBO
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Lactose-intolerantie is een belangrijke oorzaak van chronische diarree. Ongeveer 20% van de voedingscalorieën wordt geleverd door disachariden zoals sacharose, lactose en maltose.
        Disachariden moeten worden gesplitst door disacharidasen voordat ze kunnen worden opgenomen.
      </p>
      <p>
        Lactase is daarbij de enzymactiviteit die het laagst is. Bij veel mensen neemt de lactaseactiviteit na de eerste levensjaren af. Dit gebeurt bij ongeveer 70% van de
        wereldbevolking. Alleen een minderheid behoudt voldoende activiteit. Primair lactasedeficiëntie komt autosomaal dominant over en is in Noord- en West-Europa relatief ongewoon.
      </p>
      <p>Secundaire lactasedeficiëntie kan ontstaan door beschadiging van de dunne darmepitheelcellen, zoals bij:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>coeliakie;</li>
        <li>tropische spruw;</li>
        <li>giardiasis;</li>
        <li>bacteriële overgroei;</li>
        <li>uitgebreide dunndarmresecties.</li>
      </ul>
      <p>
        Wanneer chronische diarree waarschijnlijk door lactose-intolerantie wordt veroorzaakt, is de lactose-ademtest een geschikte eerste vervolgstap.
      </p>

      <div className="p-5 bg-violet-50 dark:bg-violet-950/40 rounded-xl border border-violet-200 dark:border-violet-600/40 space-y-2">
        <p>
          <strong className="text-violet-900 dark:text-violet-200">Aandachtsvraag:</strong> Waarom is een lactose-ademtest logischer dan meteen een CT-scan of endoscopie?{'  '}
          <strong className="text-violet-900 dark:text-violet-200">Mini-antwoord:</strong> Omdat het een minder invasieve en gerichte test is wanneer het klinisch beeld past bij
          lactose-intolerantie.
        </p>
      </div>
    </div>
  )
}
