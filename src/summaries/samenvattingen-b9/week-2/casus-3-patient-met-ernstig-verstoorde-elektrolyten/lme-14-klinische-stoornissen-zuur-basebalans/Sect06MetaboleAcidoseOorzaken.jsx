export default function Sect06MetaboleAcidoseOorzaken() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Oorzaken van metabole acidose</h2>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. Oorzaken van metabole acidose</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Type metabole acidose</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Oorzaken</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium align-top">Hoog anion-gap</td>
                <td className="px-4 py-3 align-top">Glyco-alcoholen, oxoproline (metabolisme van paracetamol), lactaatacidose, D-lactaatacidose, methanol, aspirine, nierinsufficiëntie, keto-acidose</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium align-top">Normaal anion-gap</td>
                <td className="px-4 py-3 align-top">Ernstige diarree, nierinsufficiëntie, renaal verlies van HCO3- / renale tubulaire acidose</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>Bij een hoog anion-gap metabole acidose kan de oorzaak goed worden onthouden met GOLDMARK:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Glyco-alcoholen;</li>
        <li>Oxoproline;</li>
        <li>Lactaatacidose;</li>
        <li>D-lactaatacidose;</li>
        <li>Methanol;</li>
        <li>Aspirin;</li>
        <li>Renal insufficiency;</li>
        <li>Keto-acidose.</li>
      </ul>
      <p>Bij een normaal anion-gap metabole acidose zijn de oorzaken meestal:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>ernstige diarree;</li>
        <li>nierinsufficiëntie waarbij de nier onvoldoende HCO3- kan maken of H+ kan uitscheiden;</li>
        <li>renaal verlies van HCO3-, bijvoorbeeld bij renale tubulaire acidose.</li>
      </ul>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Symptomen, diagnostiek en therapie</h3>
      <p>De klachten van metabole acidose zijn vaak:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>klachten van de onderliggende ziekte;</li>
        <li>ritmestoornissen;</li>
        <li>hyperventilatie of Kussmaul-ademhaling;</li>
        <li>coma.</li>
      </ul>
      <p>De diagnostiek bestaat vooral uit laboratoriumonderzoek, met name:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>glucose;</li>
        <li>ketonen;</li>
        <li>lactaat;</li>
        <li>anion-gap.</li>
      </ul>
      <p>De behandeling is:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de oorzaak behandelen;</li>
        <li>zo nodig HCO3- suppleren als de pH lager is dan 7 tot 7,1.</li>
      </ul>
      <p>Bij chronische nierschade kan ook bicarbonaatsuppletie deel van de behandeling zijn.</p>
    </div>
  )
}
