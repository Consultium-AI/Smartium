export default function SectSerumcreatinineNietRenale() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Als serumcreatinine afwijkt zonder echte nierschade</h2>
      <p>
        Niet elke afwijking van serumcreatinine betekent meteen dat de nier zelf ziek is. Soms verandert het creatinine door iets anders dan een daling van de nierfunctie.
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 1. Niet-renale oorzaken van een afwijkend serumcreatinine</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Oorzaak</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Wat gebeurt er?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Afwijkende spiermassa</td>
              <td className="px-4 py-3">Het uitgangsniveau van creatinine wijkt af; een verandering in spiermassa gaat langzaam. Verlies van spiermassa gaat wel sneller dan opbouw.</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Creatine-inname</td>
              <td className="px-4 py-3">Creatine wordt niet-enzymatisch omgezet in creatinine; vooral creatine-monohydraat kan het serumcreatinine verhogen.</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Lang gekookt vlees</td>
              <td className="px-4 py-3">Bij langdurig koken wordt creatine uit het vlees vrijgemaakt en omgezet in creatinine; denk aan stoofvlees, niet aan een medium-rare biefstuk.</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Geneesmiddelen die tubulaire secretie remmen</td>
              <td className="px-4 py-3">Bijvoorbeeld trimethoprim en cimetidine.</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Urinelekkage / urine in weefsel</td>
              <td className="px-4 py-3">Creatinine uit de urine kan weer in het bloed terechtkomen na letsel van blaas of ureter. Een eGFR op basis van creatinine is dan onbetrouwbaar.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Creatinine is dus een waarde die je altijd in de context moet lezen. Het zegt iets over de nierfunctie, maar niet altijd rechtstreeks. Dit past ook bij het feit dat creatinine niet alleen glomerulair wordt verwerkt, maar ook tubulair wordt uitgescheiden. Als je vermoedt dat de nierfunctie zelf intact is, kan een eGFR op basis van cystatine C een alternatief zijn. Cystatine C wordt in de proximale tubulus afgebroken en komt daarom niet in de urine terug.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Denkvraag: Waarom kan stoofvlees je creatinine beïnvloeden?  Antwoord: Omdat langdurig koken creatine in creatinine omzet, en dat kan vervolgens de bloedwaarde beïnvloeden.
        </p>
      </div>
    </div>
  )
}
