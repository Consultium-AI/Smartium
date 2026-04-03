export default function Sect06WatertekortHypernatriemie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Watertekort berekenen bij hypernatriëmie</h2>
      <p>
        Een hypernatriëmie betekent in de kern dat iemand water tekort heeft. Dat tekort hoef je niet altijd tot op de milliliter precies te weten; het gaat er vooral om dat je een indruk krijgt van hoeveel water iemand ongeveer nodig heeft om het natrium te laten dalen.
      </p>
      <p>Hypernatriëmie zie je vooral bij mensen die:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>geen goede dorstprikkel hebben;</li>
        <li>of geen gehoor kunnen geven aan de dorstprikkel.</li>
      </ul>
      <p>Daarom komt hypernatriëmie vaak voor bij:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>ouderen;</li>
        <li>neurologische patiënten, bijvoorbeeld bij verlamming of stoornissen van het dorstcentrum.</li>
      </ul>
      <p>Een watertekort bereken je grofweg met:</p>
      <p className="font-mono text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/50 px-3 py-2 rounded-lg">
        totaal lichaamswater × (actueel natrium / normaal natrium - 1)
      </p>
      <p>Voor het totaal lichaamswater kun je gebruiken:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>kind: 0,6 × gewicht</li>
        <li>jonge man: 0,6 × gewicht</li>
        <li>jonge vrouw: 0,5 × gewicht</li>
        <li>oude man: 0,5 × gewicht</li>
        <li>oude vrouw: 0,45 × gewicht</li>
      </ul>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 3. Schatting van totaal lichaamswater</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Patiëntengroep</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Schatting totaal lichaamswater</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Kind</td>
                <td className="px-4 py-3">0,6 × lichaamsgewicht</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Jonge man</td>
                <td className="px-4 py-3">0,6 × lichaamsgewicht</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Jonge vrouw</td>
                <td className="px-4 py-3">0,5 × lichaamsgewicht</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Oude man</td>
                <td className="px-4 py-3">0,5 × lichaamsgewicht</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Oude vrouw</td>
                <td className="px-4 py-3">0,45 × lichaamsgewicht</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Rekenvorm in de praktijk</h3>
        <p>
          Stel dat iemand 72 kg weegt en je gebruikt voor een jonge vrouw 50% lichaamswater. Dan is het totaal lichaamswater:
        </p>
        <p className="font-mono text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/50 px-3 py-2 rounded-lg mb-3">
          0,5 × 72 = 36 liter
        </p>
        <p>Bij een serum-natrium van 156 mmol/L en een normale waarde van 140 mmol/L:</p>
        <p className="font-mono text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/50 px-3 py-2 rounded-lg mb-3">
          36 × ([156/140] - 1) = 4,1 liter
        </p>
        <p>
          Dat betekent dus een watertekort van ongeveer 4,1 liter. Dat is duidelijk veel. Als het natrium nog hoger is, bijvoorbeeld 166 mmol/L, is het tekort nog groter.
        </p>
        <p>
          Belangrijk is dat dit een schatting is. Het is niet bedoeld als exact getal tot op de milliliter. Het doel is dat je een gevoel krijgt voor de orde van grootte van de behandeling. Als je bijvoorbeeld 4,1 liter in 2–3 dagen wilt geven, kom je al snel uit op ongeveer 2 liter water per dag. Daarbij moet je ook nog rekening houden met voortdurend verlies, bijvoorbeeld via diarree.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtvraag: Waarom is die berekening vooral een schatting?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Omdat het doel is om een praktische indruk te krijgen van de benodigde aanvulling; voortdurende verliezen en klinische omstandigheden tellen ook mee.
        </p>
      </div>
    </div>
  )
}
