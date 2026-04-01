export default function Sect07AanvullendOnderzoek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Aanvullend onderzoek en diagnostiek</h2>
      <p>
        Aanvullend onderzoek helpt om de doorbloeding beter in beeld te brengen. Belangrijke onderzoeken zijn:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Doppleronderzoek</li>
        <li>Enkel-armindex (EAI)</li>
        <li>Teendrukmeting</li>
        <li>Duplexonderzoek</li>
        <li>MRA</li>
        <li>CTA</li>
        <li>Angiografie</li>
      </ul>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 4. Diagnostiek bij PAV</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderzoek</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Wat je ermee beoordeelt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Doppler</td>
                <td className="px-4 py-3">Snelheid en richting van de bloedstroom met geluidsgolven</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Enkel-armindex</td>
                <td className="px-4 py-3">Vergelijking van bloeddruk in enkel en arm</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Teendruk</td>
                <td className="px-4 py-3">Druk en doorbloeding van de tenen, vaak extra nuttig bij diabetes</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Duplex</td>
                <td className="px-4 py-3">Combinatie van Doppler en echografie; laat lumen, stroomsnelheid en signaal zien</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">MRA</td>
                <td className="px-4 py-3">Niet-invasieve beeldvorming met magnetisch veld en radiogolven</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">CTA</td>
                <td className="px-4 py-3">CT-onderzoek met jodiumhoudend contrast; geeft gedetailleerde beelden</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Angiografie</td>
                <td className="px-4 py-3">Invasief vaatonderzoek met straling en jodiumhoudend contrast</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        De Doppler is een pijnloos en veilig onderzoek. De techniek gebruikt geluidsgolven om snelheid en richting van de bloedstroom in slagaders en aders te meten.
      </p>
      <p>
        De EAI vergelijkt de bloeddruk in de armen met die in de enkels. Dat zegt iets over de doorbloeding van de benen.
      </p>
      <p>Belangrijke interpretatie van de EAI:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>EAI 0,9–1,2: geen klachten;</li>
        <li>EAI 0,90–0,35: claudicatio intermittens;</li>
        <li>EAI 0,60–0,25: rustpijn;</li>
        <li>EAI 0,35–0,05: weefselverlies.</li>
      </ul>
      <p>Een EAI:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>lager dan 0,9 geeft verdenking op PAV;</li>
        <li>kan in rust normaal zijn;</li>
        <li>een daling van meer dan 20% bij een looptest is afwijkend;</li>
        <li>en een EAI boven 1,3 kan wijzen op niet-comprimeerbare vaten, bijvoorbeeld bij diabetes mellitus.</li>
      </ul>
      <p>
        De teendrukmeting wordt vaak aanvullend gedaan na een EAI, vooral bij diabetes. Omdat de EAI bij deze patiënten vals verhoogd kan zijn door mediacalcificatie, is teendruk soms sensitiever.
      </p>
      <p>
        Bij duplexonderzoek worden Doppler en echografie gecombineerd. Zo krijg je zowel informatie over de bloedstroom als over de vaatwand en de vernauwing.
      </p>
      <p>
        Bij MRA is er geen röntgenstraling. Wel zijn er beperkingen, zoals artefacten door een stent, claustrofobie en contra-indicaties bij metaal.  Bij CTA en angiografie is er wel straling en jodiumhoudend contrast.
      </p>
    </div>
  )
}
