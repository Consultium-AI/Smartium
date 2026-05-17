export default function Sect03AcuteDiagnose () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Acute pancreatitis: plots ontstane ontsteking
      </h2>
      <p>
        Acute pancreatitis is een <strong className="text-slate-900 dark:text-slate-100">plots ontstane ontsteking van het pancreas</strong>. Er ontstaat een <strong className="text-slate-900 dark:text-slate-100">systemische inflammatoire respons</strong> (SIRS), doordat verteringsenzymen voortijdig in het pancreas zelf worden geactiveerd. Het orgaan begint als het ware zichzelf te verteren. Dat geeft lokale ontsteking, zwelling en weefselschade.
      </p>
      <p>
        Het beloop verschilt sterk. Veel patiënten hebben een milde vorm en herstellen volledig, maar een deel ontwikkelt een ernstige ontstekingsreactie met <strong className="text-slate-900 dark:text-slate-100">orgaandisfunctie</strong> en levensbedreigende complicaties.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Diagnose van acute pancreatitis</h3>
      <p>
        De diagnose wordt gesteld als aan <strong className="text-slate-900 dark:text-slate-100">minimaal twee van de drie criteria</strong> wordt voldaan:
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>typische bovenbuikpijn;</li>
        <li>lipase of amylase meer dan drie keer de bovengrens van normaal;</li>
        <li>beeldvorming passend bij pancreatitis.</li>
      </ol>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Tabel 1. Diagnostische kern van acute pancreatitis</strong>
      </p>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Onderdeel</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Wat past erbij?</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Waarom belangrijk?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Klachten</td>
              <td className="p-3 align-top">Hevige, acute pijn in de bovenbuik, meestal in het epigastrium, vaak uitstralend naar de rug</td>
              <td className="p-3 align-top">Dit is meestal het startpunt van de diagnose</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Laboratorium</td>
              <td className="p-3 align-top">Lipase of amylase &gt; 3x normaal</td>
              <td className="p-3 align-top">Sterke ondersteuning van de diagnose</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Beeldvorming</td>
              <td className="p-3 align-top">Echo of CT die pancreatitis of complicaties laat zien</td>
              <td className="p-3 align-top">Helpt vooral om de oorzaak of complicaties op te sporen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Laboratoriumonderzoek wordt niet alleen gebruikt voor de diagnose, maar ook om de ernst in te schatten. Daarbij worden onder andere <strong className="text-slate-900 dark:text-slate-100">nierfunctie</strong>, <strong className="text-slate-900 dark:text-slate-100">ontstekingsparameters</strong> en <strong className="text-slate-900 dark:text-slate-100">leverwaarden</strong> bepaald.
      </p>
      <p>
        Beeldvorming is niet altijd meteen nodig. Een <strong className="text-slate-900 dark:text-slate-100">echo van de bovenbuik</strong> wordt vaak gedaan om <strong className="text-slate-900 dark:text-slate-100">galstenen</strong> aan te tonen. Een <strong className="text-slate-900 dark:text-slate-100">CT-scan</strong> is vooral zinvol bij klinische verslechtering of als er twijfel bestaat over de diagnose of complicaties, zoals <strong className="text-slate-900 dark:text-slate-100">necrose</strong>.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Aandachtsvraag:</strong> waarom is een lipasewaarde alleen niet genoeg?
        </p>
        <p className="m-0 mt-2">
          <strong className="font-semibold">Mini-antwoord:</strong> omdat een hoge lipase wel één van de diagnosestappen is, maar niets zegt over de oorzaak of de ernst.
        </p>
      </div>
    </div>
  )
}
