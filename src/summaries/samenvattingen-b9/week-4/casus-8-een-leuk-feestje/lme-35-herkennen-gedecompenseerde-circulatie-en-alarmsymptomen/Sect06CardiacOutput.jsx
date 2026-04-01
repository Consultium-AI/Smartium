export default function Sect06CardiacOutput() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wat bepaalt de cardiac output?</h2>
      <p>De cardiac output is de hoeveelheid bloed die het hart per minuut rondpompt. Die hangt samen met:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          het <span className="font-semibold">lichaamsoppervlak</span>;
        </li>
        <li>
          het <span className="font-semibold">basale metabolisme</span>;
        </li>
        <li>
          <span className="font-semibold">neurale</span> en <span className="font-semibold">humorale</span> regulatie;
        </li>
        <li>
          de <span className="font-semibold">leeftijd</span>.
        </li>
      </ul>
      <p>
        Omdat lichaamsgrootte meespeelt, wordt cardiac output vaak genormaliseerd naar lichaamsoppervlak. Dan spreek je van de <span className="font-semibold">cardiac index</span>.
      </p>
      <p>
        De <span className="font-semibold">cardiale reserve</span> is het verschil tussen de maximale cardiac output en de rustwaarde. Hoe groter die reserve, hoe meer inspanning iemand kan leveren. Bij gezonde mensen kan de cardiac output tijdens inspanning duidelijk stijgen. Bij oudere mensen of bij mensen met ischemische hartziekte is die stijging minder groot.
      </p>
      <p>Bij toenemende inspanning stijgt de cardiac output door twee dingen tegelijk:</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <span className="font-semibold">het slagvolume neemt toe</span>, doordat de veneuze return stijgt en de vullingsdruk hoger wordt;
        </li>
        <li>
          <span className="font-semibold">de hartfrequentie neemt toe</span>, en dat wordt bij hogere inspanning steeds belangrijker.
        </li>
      </ol>
      <p>
        Het slagvolume wordt wel begrensd: door de grootte en stijfheid van het hart, en door de vullingstijd. Als de hartfrequentie te hoog wordt, verkort de vullingstijd en kan het slagvolume niet onbeperkt blijven stijgen. Uiteindelijk wordt de maximale cardiac output dus vooral beperkt door een combinatie van een lager maximaal slagvolume en een lagere maximale hartfrequentie naarmate men ouder wordt.
      </p>
      <p className="text-center text-slate-400 dark:text-slate-500 font-mono">---</p>
    </div>
  )
}
