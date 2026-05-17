export default function Sect06RegulatieMaagzuursecretie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Regulatie van de maagzuursecretie</h2>
      <p>
        De regulatie van maagzuur is complex, maar heel belangrijk. De maagzuurproductie moet namelijk precies passen
        bij de situatie.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Belangrijkste stimulerende stoffen</h3>
      <p>De belangrijkste stimulerende factoren zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">acetylcholine</strong> uit de nervus vagus;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">gastrine</strong> uit de G-cellen;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">histamine</strong> uit de enterochromaffine-achtige
          cellen (<strong className="text-slate-900 dark:text-slate-100">ECL-cellen</strong>).
        </li>
      </ul>
      <p>
        Histamine is de centrale fysiologische stimulator. De afgifte van histamine wordt gestimuleerd door gastrine en
        acetylcholine.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Belangrijkste remmende stoffen</h3>
      <p>
        De belangrijkste remmende factor is <strong className="text-slate-900 dark:text-slate-100">somatostatine</strong>,
        afkomstig uit de D-cellen in het antrum. Daarnaast werken ook{' '}
        <strong className="text-slate-900 dark:text-slate-100">PGE2</strong>,{' '}
        <strong className="text-slate-900 dark:text-slate-100">secretine</strong>,{' '}
        <strong className="text-slate-900 dark:text-slate-100">GIP</strong> en{' '}
        <strong className="text-slate-900 dark:text-slate-100">CCK</strong> remmend.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 3. Belangrijke regelende stoffen bij maagzuursecretie
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Stof
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Effect
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Bron
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Acetylcholine</td>
                <td className="px-4 py-3 align-top">Stimuleert</td>
                <td className="px-4 py-3 align-top">N. vagus / ENS</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Gastrine</td>
                <td className="px-4 py-3 align-top">Stimuleert</td>
                <td className="px-4 py-3 align-top">G-cellen in antrum</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Histamine</td>
                <td className="px-4 py-3 align-top">Stimuleert</td>
                <td className="px-4 py-3 align-top">ECL-cellen</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Somatostatine</td>
                <td className="px-4 py-3 align-top">Remt</td>
                <td className="px-4 py-3 align-top">D-cellen in antrum</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">PGE2</td>
                <td className="px-4 py-3 align-top">Remt</td>
                <td className="px-4 py-3 align-top">lokaal</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Secretine</td>
                <td className="px-4 py-3 align-top">Remt</td>
                <td className="px-4 py-3 align-top">duodenum</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">GIP</td>
                <td className="px-4 py-3 align-top">Remt</td>
                <td className="px-4 py-3 align-top">duodenum</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">CCK</td>
                <td className="px-4 py-3 align-top">Remt</td>
                <td className="px-4 py-3 align-top">duodenum</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Drie fasen van maagfunctie</h3>
      <p>De zuursecretie verloopt in drie fasen:</p>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Cefale fase</strong>
          <p className="mt-1 mb-0">
            De maag wordt al geactiveerd vóórdat voedsel echt in de maag zit. Prikkels zoals zien, ruiken, proeven,
            kauwen en slikken activeren via de nervus vagus de maag.
          </p>
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Gastrische fase</strong>
          <p className="mt-1 mb-0">
            Dit is de belangrijkste fase. Uitrekking van de maagwand en de aanwezigheid van peptiden en aminozuren
            stimuleren de zuurproductie het sterkst.
          </p>
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Intestinale fase</strong>
          <p className="mt-1 mb-0">
            In de dunne darm kan nog een beperkte stimulatie optreden, maar er is vooral remming door factoren zoals
            zuur en vet.
          </p>
        </li>
      </ol>
      <p>
        In de <strong className="text-slate-900 dark:text-slate-100">gastrische fase</strong> kan de zuurproductie het
        best worden aangepast aan de behoefte.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Welke signalen bepalen of er meer zuur moet worden gemaakt?</h3>
      <p>
        Als de maagwand uitrekt en er eiwitafbraakproducten aanwezig zijn, neemt de zuurproductie toe. De uitrekking van de
        maagwand activeert een <strong className="text-slate-900 dark:text-slate-100">vago-vagale reflex</strong>, waardoor
        G-cellen, ECL-cellen en {'pari\u00E8tale cellen'} worden gestimuleerd.
      </p>
      <p>
        Als de luminale pH in het antrum te laag wordt, reageren D-cellen met afgifte van{' '}
        <strong className="text-slate-900 dark:text-slate-100">somatostatine</strong>. Dit remt vervolgens de G-cellen en
        de{' '}
        {'pari\u00E8tale cel'}. Daardoor wordt overmatige zuurproductie afgeremd.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 4. Signalen die maagzuur stimuleren of remmen
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Stimulerend
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Remmend
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Rek van de maagwand</td>
                <td className="px-4 py-3 align-top">Lage luminale pH in het antrum</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Peptiden en aminozuren</td>
                <td className="px-4 py-3 align-top">Somatostatine</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Acetylcholine</td>
                <td className="px-4 py-3 align-top">Secretine, GIP, CCK, PGE2</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Gastrine</td>
                <td className="px-4 py-3 align-top" />
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Histamine</td>
                <td className="px-4 py-3 align-top" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
