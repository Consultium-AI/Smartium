export default function SectKlinischePresentatie2() {
  return (
    <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 text-center lg:text-left">KLINISCHE PRESENTATIE (2)</h2>
      <div className="grid gap-8 xl:grid-cols-3">
        <section className="space-y-3">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-1">Symptomen</h3>
          <p>
            De klinische presentatie van een gastro-intestinale bloeding kan variëren afhankelijk van: de locatie van de bloeding, de snelheid van het bloedverlies, de hoeveelheid bloedverlies.
          </p>
          <p>Typische symptomen zijn:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Hematemesis</strong> braken van vers bloed of koffiedikachtig materiaal. Wijst meestal op een bloeding in de hoge tractus digestivus.
            </li>
            <li>
              <strong>Melena</strong> zwarte, teerachtige ontlasting. Ontstaat door vertering van bloed in het maagdarmkanaal.
            </li>
            <li>
              <strong>Hematochezie</strong> helderrood bloedverlies per anum. Meestal afkomstig uit de lage tractus digestivus.
            </li>
          </ul>
          <p>Bij ernstig bloedverlies kunnen ook optreden: duizeligheid, syncope en tekenen van shock.</p>
        </section>
        <section className="space-y-3">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-1">Klinische presentatie</h3>
          <p>Het aspect van het bloedverlies kan aanwijzingen geven over de lokalisatie van de bloeding.</p>
          <p>
            <strong>Melena</strong> wijst meestal op een bloeding in de hoge tractus digestivus. Tijdens de passage door maag en dunne darm wordt hemoglobine uit het bloed door maagzuur en bacteriële enzymen afgebroken; hierbij wordt het ijzer in hemoglobine geoxideerd en omgezet in donkere pigmenten zoals hematine. Deze chemische omzetting geeft de ontlasting de karakteristieke zwarte kleur en typische geur.
          </p>
          <p>
            <strong>Hematochezie</strong> wijst meestal op een lage tractus bloeding.
          </p>
          <p>Belangrijk: bij een massale hoge tractus bloeding kan hematochezie optreden doordat bloed snel door de darm passeert.</p>
          <p>Daarom moet bij massaal bloedverlies altijd een hoge bloeding worden uitgesloten.</p>
        </section>
        <section className="space-y-3">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-1">Anamnese</h3>
          <p>
            Een goede anamnese speelt een belangrijke rol bij het inschatten van de oorzaak en ernst van de bloeding. Belangrijke onderdelen van de anamnese zijn:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Karakter van het bloedverlies</strong> kleur en hoeveelheid bloed, duur van klachten,
            </li>
            <li>
              <strong>Medicatiegebruik</strong> NSAID&apos;s, acetylsalicylzuur, DOAC, coumarinederivaten,
            </li>
            <li>
              <strong>Voorgeschiedenis</strong> eerdere bloedingen, bekende ulcera, leverziekte, eerdere gastro-intestinale interventies, alcoholgebruik.
            </li>
          </ul>
          <p>
            Ook klachten voorafgaand aan de bloeding zijn relevant, zoals: dyspepsie, refluxklachten, dysfagie en veranderd defecatiepatroon.
          </p>
        </section>
      </div>
    </div>
  )
}
