export default function Sect12BijwerkingenBrafMekRemmers() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Bijwerkingen van BRAF/MEK-remmers</h2>
      <p>Bij doelgerichte therapie kun je bijwerkingen verklaren via de principes:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>on-target</li>
        <li>off-target</li>
        <li>intended tissue</li>
        <li>unintended tissue</li>
      </ul>
      <p>
        On-target betekent: het middel doet precies wat het moet doen, maar het effect treedt ook op in gezond weefsel
        waar hetzelfde eiwit een rol speelt.{'  '}
        Off-target betekent: het middel raakt ook andere eiwitten dan het beoogde doel.{'  '}
        Intended tissue is het weefsel waar je het effect wilt hebben, dus de tumor.{'  '}
        Unintended tissue is gezond weefsel waar je het effect eigenlijk niet wilt.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Immunotherapie en BRAF/MEK-remmers vergeleken</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Therapie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Werking
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Typische problemen
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Behandeling van bijwerkingen
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Immunotherapie</td>
              <td className="px-4 py-3 align-top">activeert het immuunsysteem via checkpointremming</td>
              <td className="px-4 py-3 align-top">auto-immuunreacties in meerdere organen</td>
              <td className="px-4 py-3 align-top">
                vroeg herkennen, prednison/immunosuppressie, vaak therapie stoppen
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">BRAF/MEK-remmers</td>
              <td className="px-4 py-3 align-top">
                remmen het gemuteerde BRAF en het downstream MEK in de signaalroute
              </td>
              <td className="px-4 py-3 align-top">
                on-target effecten in gezond weefsel, off-target effecten, snelle resistentie
              </td>
              <td className="px-4 py-3 align-top">
                soms dosis verlagen; bij resistentie of ernstige toxiciteit heroverwegen
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Bij BRAF/MEK-remmers zijn er verschillende soorten bijwerkingen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>on-target intended tissue: remming in tumorcellen, dat is juist gewenst;</li>
        <li>
          on-target unintended tissue: remming in gezonde cellen waar BRAF/MEK ook belangrijk is, bijvoorbeeld in de huid
          of het hart;
        </li>
        <li>off-target: effecten doordat het geneesmiddel ook andere, vergelijkbare eiwitten raakt.</li>
      </ul>
      <p>
        De RAS/RAF/MEK-cascade is bijvoorbeeld ook belangrijk voor het behoud van gezonde hartspiercellen. Daarom kunnen
        cardiale bijwerkingen optreden als on-target unintended tissue-effecten. In de huid kunnen ook on-target
        bijwerkingen ontstaan.
      </p>
      <p>
        Sommige on-target bijwerkingen kunnen verbeteren door de dosis te verlagen. Hoe meer off-target bijwerkingen een
        middel heeft, hoe minder selectief het als doelgericht medicijn is.
      </p>
      <p>
        Theoretisch zou je verwachten dat BRAF-remmers geen grote unintended tissue-bijwerkingen geven, omdat de
        gemuteerde BRAF-mutatie alleen in de tumorcellen aanwezig is. In de praktijk zie je echter toch duidelijk
        bijwerkingen. Die worden daarom waarschijnlijk mede verklaard door off-target effecten.
      </p>
      <p>
        Een belangrijk klinisch punt is dat BRAF/MEK-remmers vaak in het begin sterk werken, maar dat veel patiënten na
        verloop van tijd resistentie ontwikkelen. Daardoor is de respons vaak goed aan het begin, maar minder duurzaam dan
        bij immunotherapie.
      </p>
    </div>
  )
}
