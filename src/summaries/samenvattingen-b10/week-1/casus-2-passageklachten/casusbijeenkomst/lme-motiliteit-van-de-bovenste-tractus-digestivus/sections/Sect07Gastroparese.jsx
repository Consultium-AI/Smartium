export default function Sect07Gastroparese() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Gastroparese</h2>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Gastroparese</strong> is een aandoening waarbij de inhoud
        van de maag <strong className="text-slate-900 dark:text-slate-100">trager dan normaal</strong> naar het duodenum
        doorstroomt. Dit komt niet door een blokkade, maar door{' '}
        <strong className="text-slate-900 dark:text-slate-100">onvoldoende contractie van de maagspieren</strong>.
      </p>
      <p>Mechanismen die een rol kunnen spelen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          beschadiging van de <strong className="text-slate-900 dark:text-slate-100">nervus vagus</strong>;
        </li>
        <li>
          verlies of dysfunctie van{' '}
          <strong className="text-slate-900 dark:text-slate-100">interstitiële cellen van Cajal</strong>;
        </li>
        <li>
          afwijkingen aan de <strong className="text-slate-900 dark:text-slate-100">pylorus</strong>.
        </li>
      </ul>
      <p>Typische klachten zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>misselijkheid;</li>
        <li>braken;</li>
        <li>snelle verzadiging;</li>
        <li>opgeblazen gevoel;</li>
        <li>epigastrische pijn.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">Oorzaken van gastroparese</h3>
      <p>De meest voorkomende oorzaken zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">idiopathisch</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">(slecht gereguleerde) diabetes mellitus</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">postchirurgisch</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">postinfectieus</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">medicamenteus</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">autonome stoornissen</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">sclerodermie</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">chronische mesenteriale ischemie</strong>.
        </li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">Diagnostiek</h3>
      <p>Voor de diagnose zijn <strong className="text-slate-900 dark:text-slate-100">alle drie</strong> nodig:</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>typische symptomen;</li>
        <li>geobjectiveerde vertraagde maagontlediging;</li>
        <li>afwezigheid van mechanische obstructie.</li>
      </ol>
      <p>De eerste stap is bloedonderzoek, onder andere naar:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">HbA1c</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">TSH</strong>.
        </li>
      </ul>
      <p>
        Daarna volgt een <strong className="text-slate-900 dark:text-slate-100">gastroscopie</strong> om mechanische
        obstructie uit te sluiten. Tijdens gastroscopie kunnen biopten worden afgenomen om{' '}
        <strong className="text-slate-900 dark:text-slate-100">Helicobacter pylori</strong> uit te sluiten.
      </p>
      <p>
        De <strong className="text-slate-900 dark:text-slate-100">gouden standaard</strong> is{' '}
        <strong className="text-slate-900 dark:text-slate-100">scintigrafie</strong>. De patiënt krijgt een{' '}
        <strong className="text-slate-900 dark:text-slate-100">99mTechnetium-gelabelde vaste maaltijd</strong> en er wordt
        gekeken hoe lang die in de maag aanwezig blijft. Als er na{' '}
        <strong className="text-slate-900 dark:text-slate-100">4 uur nog &gt; 10%</strong> aanwezig is, past dit bij
        vertraagde maagontlediging.
      </p>
      <p>
        Een alternatief is de <strong className="text-slate-900 dark:text-slate-100">13C-ademtest</strong>.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">
        Tabel 4. Scintigrafie en 13C-ademtest bij maagontlediging
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Onderzoek</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Kern</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Scintigrafie</td>
              <td className="p-3 align-top">gouden standaard; 99mTc-gelabelde maaltijd</td>
            </tr>
            <tr>
              <td className="p-3 align-top">13C-ademtest</td>
              <td className="p-3 align-top">stabiel isotoop; via afbraak ontstaat 13CO2 in de uitademing</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>De differentiaaldiagnose bevat onder andere:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>psychiatrische stoornis zoals anorexia nervosa of depressie;</li>
        <li>ruminatiesyndroom;</li>
        <li>functionele dyspepsie;</li>
        <li>cyclisch braken;</li>
        <li>toxisch/medicamenteus zoals cannabinoïd hyperemesis;</li>
        <li>infectieuze gastritis, bijvoorbeeld door H. pylori.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">Behandeling</h3>
      <p>
        De eerste stap is, indien mogelijk, de{' '}
        <strong className="text-slate-900 dark:text-slate-100">onderliggende oorzaak behandelen</strong>. Daarnaast is een
        belangrijk onderdeel van de behandeling het dieet:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">4–5 kleine maaltijden per dag</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">laag in vet</strong> en{' '}
          <strong className="text-slate-900 dark:text-slate-100">laag in vezels</strong>;
        </li>
        <li>
          vermijden van moeilijk verteerbaar voedsel, zoals schillen, strengen, rauwe groenten, noten en zaden;
        </li>
        <li>
          indien gewenst eerst <strong className="text-slate-900 dark:text-slate-100">blenderen</strong>.
        </li>
      </ul>
      <p>
        Medicamenteus is de eerste keuze een <strong className="text-slate-900 dark:text-slate-100">dopamine-antagonist</strong>:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">metoclopramide</strong> is eerste keus;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">domperidon</strong> is tweede keus.
        </li>
      </ul>
      <p>
        Deze middelen kunnen een <strong className="text-slate-900 dark:text-slate-100">QT-verlenging</strong> geven;
        daarom is een <strong className="text-slate-900 dark:text-slate-100">ECG vooraf</strong> aanbevolen. In tweede lijn
        kan kortdurend <strong className="text-slate-900 dark:text-slate-100">erytromycine</strong> worden gebruikt, een
        krachtige <strong className="text-slate-900 dark:text-slate-100">motiline-agonist</strong> met kans op tachyfylaxie.
      </p>
      <p>Andere middelen verbeteren de maaglediging niet, maar kunnen worden overwogen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">anti-emetica</strong> zoals ondansetron of granisetron;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">nortriptyline</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">prucalopride</strong>.
        </li>
      </ul>
      <p>
        Bij ernstige therapierefractie kan een{' '}
        <strong className="text-slate-900 dark:text-slate-100">multidisciplinaire bespreking</strong> nodig zijn. Daarbij
        hoort ook aandacht voor een eetstoornis als er gewichtsverlies en eetrestrictie is. Als orale intake onvoldoende
        blijft, kan een <strong className="text-slate-900 dark:text-slate-100">PEG-J</strong> worden overwogen. Als
        endoscopische plaatsing niet mogelijk is, kan chirurgisch een enterostomie worden aangelegd.
      </p>
    </div>
  )
}
