export default function Sect04Appendicitis() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Appendicitis</h2>
      <p>
        De appendix, ook wel het wormvormige aanhangsel, heeft zijn oorsprong aan het caecum. Vanuit de appendix lopen de
        taenia coli over het colon. De appendix is meestal ongeveer 9 cm lang en 6 mm in diameter, maar dit kan variëren.
      </p>
      <p>
        De bloedvoorziening verloopt via de a. mesenterica superior, vervolgens via de a. ileocolica en uiteindelijk de
        a. appendicularis. Deze appendiculaire arterie ligt in het mesoappendix en is belangrijk om te herkennen bij een
        appendectomie.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Functie van de appendix</h3>
        <p className="mt-4">
          Vroeger werd de appendix vaak gezien als een rudimentair orgaan, maar hij speelt een rol in het afweersysteem van
          de darm, vooral in de eerste levensjaren. De appendix hoort bij het gut associated lymphoid tissue (GALT) en
          bevat veel B- en T-lymfocyten. Ook in de mucosa zitten veel IgA, IgG en macrofagen. Daarnaast draagt de appendix
          bij aan het evenwicht van het microbioom van de darm. Je kunt de appendix zien als een soort safe house van de
          darmflora.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Ontstaan van appendicitis</h3>
        <p className="mt-4">Appendicitis kan ontstaan als de appendix wordt afgesloten. Dat kan op verschillende manieren:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            door een appendicoliet of faecoliet: een klein steentje van samengeklonterde mineralen en feces;
          </li>
          <li>door lymfeweefselzwelling, waardoor de doorgang tussen appendix en caecum wordt afgesloten;</li>
          <li>door aanhoudende mucusproductie en bacteriële proliferatie;</li>
          <li>door een verstoring van de microbiome-balans, waardoor ongewenste bacteriën overgroeien.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Diagnostiek</h3>
        <p className="mt-4">
          Appendicitis heeft vaak een typisch beloop: het begint met vage pijn rond de navel en die pijn migreert naar de
          rechter onderbuik. Het meest pijnlijke punt ligt vaak op ongeveer 1/3 van de lijn tussen navel en rechter
          heupbeen; dat wordt ook wel het punt van McBurney genoemd.
        </p>

        <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mt-6">
          Tabel 3. Diagnostiek bij appendicitis
        </h4>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600 mt-3">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
              <tr>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Onderdeel</th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Kenmerken</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900/40">
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">Klachten</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Pijn rond navel, later rechter onderbuik
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  Lichamelijk onderzoek
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Pijn op McBurney-punt, soms peritoneale prikkeling
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">Lab</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Verhoogd CRP en leukocytose ondersteunen de diagnose
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  Belangrijk punt
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Normaal lab sluit beginnende appendicitis niet uit
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">Beeldvorming</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Echografie is altijd geïndiceerd
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">CT-scan</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Als echo geen uitsluitsel geeft of appendix niet in beeld komt
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4">Bij echo zijn belangrijke primaire criteria:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>niet-comprimeerbare tubulaire structuur;</li>
          <li>diameter &gt; 6 mm;</li>
          <li>wandverdikking &gt; 2 mm;</li>
          <li>blind eindigend;</li>
          <li>pijn bij druk met de probe.</li>
        </ul>
        <p className="mt-4">Secundaire tekenen zijn:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>appendicoliet;</li>
          <li>periappendiculair vetinfiltraat;</li>
          <li>vrij vocht;</li>
          <li>hypervascularisatie bij Doppler.</li>
        </ul>
        <p className="mt-4">
          Als de appendix niet goed zichtbaar is op echo, kan een CT-scan helpen. De CT-scan heeft een hoge sensitiviteit
          en specificiteit van ongeveer 95%. Typische tekenen op CT zijn een diameter &gt; 6 mm, wandverdikking en
          periappendiculair vetinfiltraat.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Simpele en gecompliceerde appendicitis</h3>
        <p className="mt-4">
          Een simpele appendicitis is een flegmoneuze appendicitis zonder necrose of perforatie. Een gecompliceerde
          appendicitis omvat juist:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>een gangreneuze ontsteking;</li>
          <li>een perforatie;</li>
          <li>of een appendicitis met abces.</li>
        </ul>
        <p className="mt-4">
          Wat betekent gangreen hier? <em>Kort antwoord:</em> het weefsel is aangetast door afsterven, meestal door slechte
          doorbloeding of ernstige infectie.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Behandeling</h3>
        <p className="mt-4">
          Appendicitis wordt vaak operatief behandeld, maar conservatieve behandeling is ook vaak mogelijk. Simpele
          appendicitis kan met antibiotica worden behandeld als een soort step-up-behandeling. Toch moet bij een deel van
          de patiënten later alsnog een appendectomie gebeuren. Bij een faecoliet op beeldvorming is een
          operatie-indicatie aanwezig, omdat conservatieve behandeling dan vaak niet succesvol is.
        </p>
      </div>
    </div>
  )
}
