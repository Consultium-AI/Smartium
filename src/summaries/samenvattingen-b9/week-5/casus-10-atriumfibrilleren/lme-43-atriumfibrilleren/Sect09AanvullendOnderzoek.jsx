export default function Sect09AanvullendOnderzoek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Aanvullend onderzoek</h2>
      <p>
        Na de diagnose op het ECG moet je zoeken naar een onderliggende oorzaak, omdat AF vaak een symptoom is van een ander probleem.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Bloedonderzoek</h3>
      <p>Belangrijk zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>TSH: hyperthyreoïdie is een behandelbare oorzaak;</li>
        <li>K+ en Mg2+: elektrolytstoornissen kunnen ritmestoornissen uitlokken;</li>
        <li>nierfunctie en bloedbeeld: belangrijk voor medicatieveiligheid, vooral bij antistolling.</li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Echocardiografie (TTE)</h3>
      <p>Met een transthoracale echo zoek je naar structurele hartziekten en beoordeel je:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de grootte van het linker atrium;</li>
        <li>kleplijden zoals mitralisstenose of insufficiëntie;</li>
        <li>de LVEF en de linkerventrikelfunctie.</li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Monitoring</h3>
      <p>
        Als een patiënt klachten heeft, maar het standaard ECG toont op dat moment sinusritme, dan zijn langere registraties nuttig:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Holtermonitor: registratie gedurende 24–48 uur of langer;</li>
        <li>event recorders / loop recorders: voor minder frequente klachten;</li>
        <li>smartwatches: kunnen onregelmatigheden detecteren via PPG of een 1-kanaals ECG.</li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Ischemiedetectie</h3>
      <p>Bij verdenking op ischemische hartziekte kan een fietstest of loopbandtest worden gedaan. Dan let je op:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>ST-depressie op het ECG;</li>
        <li>de hartslagrespons;</li>
        <li>de bloeddrukrespons.</li>
      </ul>
      <p>Als fietsen niet lukt, kan een stress-echo of nucleaire scan worden ingezet.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Transoesofageale echo (TOE)</h3>
      <p>
        Een TOE is vooral belangrijk vóór een geplande cardioversie wanneer de patiënt geen adequate antistolling heeft gehad. Je onderzoekt dan of er een trombus zit in het linker hartoor. Een gewone TTE laat dat gebied vaak niet goed zien. Als er een stolsel aanwezig is, mag je niet cardioverseren vanwege het risico op een beroerte.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">X-thorax</h3>
      <p>Een thoraxfoto is zinvol bij verdenking op hartfalen of longpathologie. Je kunt zoeken naar:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>cardiomegalie;</li>
        <li>longoedeem;</li>
        <li>longaandoeningen zoals COPD of pneumonie.</li>
      </ul>
    </div>
  )
}
