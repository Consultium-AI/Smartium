export default function Sect06Obstipatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Obstipatie: vaak voorkomend en vooral klinisch te beoordelen
      </h2>
      <p>
        Obstipatie is een van de meest voorkomende gastro-intestinale aandoeningen op de kinderleeftijd. Het belangrijkste
        is om goed onderscheid te maken tussen wat normaal is en wanneer verder onderzoek nodig is. Dat doe je op basis van
        anamnese en lichamelijk onderzoek.
      </p>
      <p>
        Veel kinderen worden zindelijk voor ontlasting rond de leeftijd van 18 maanden, maar dat moment verschilt sterk per
        kind. Rond 3 jaar is het merendeel zindelijk voor urine én ontlasting.
      </p>
      <p>
        In 95% van de kinderen met obstipatie is er{' '}
        <strong className="text-slate-900 dark:text-slate-100">geen onderliggende lichamelijke oorzaak</strong>: dat heet{' '}
        <strong className="text-slate-900 dark:text-slate-100">functionele obstipatie</strong>. Die diagnose wordt gesteld op
        basis van de kliniek en de Rome IV-criteria.
      </p>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 3. Behandeling van obstipatie bij kinderen
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Onderdeel
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Wat doe je?
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">basis</td>
                <td className="px-4 py-3 align-top">gezonde voeding met voldoende vezels en vocht</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">basis</td>
                <td className="px-4 py-3 align-top">voldoende beweging</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">toilettraining</td>
                <td className="px-4 py-3 align-top">na elke maaltijd 5 minuten naar het toilet, zonder afleiding</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">toilettraining</td>
                <td className="px-4 py-3 align-top">beloning achteraf kan helpen, ongeacht resultaat</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">houding</td>
                <td className="px-4 py-3 align-top">rug recht, handen op de knieën, eventueel een krukje onder de voeten</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">medicatie</td>
                <td className="px-4 py-3 align-top">als na 2 weken geen effect: PEG/macrogol; tweede keuze lactulose</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>
        Belangrijk is dat aanvullende diagnostiek zoals XBOZ, echo van het rectum of colonpassagetijd geen bewezen
        meerwaarde heeft bij functionele obstipatie. De diagnose is dus in de eerste plaats klinisch.
      </p>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Wanneer moet je juist verder denken?</h3>
        <p>
          Bij obstipatie moet je letten op <strong className="text-slate-900 dark:text-slate-100">red flags</strong>.
          Voorbeelden zijn:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>meconiumlozing later dan 48 uur na geboorte;</li>
          <li>opgezette buik met braken;</li>
          <li>lumbosacrale afwijkingen zoals dimple, haarlok of hemangioom;</li>
          <li>neurologische uitval of loopstoornis;</li>
          <li>peri-anale fistels of abces;</li>
          <li>peri-anale fissuren of blauwe plekken;</li>
          <li>failure to thrive;</li>
          <li>obstipatie na starten met koemelk.</li>
        </ul>
        <p>
          Deze signalen kunnen passen bij onderliggende aandoeningen zoals ziekte van Hirschsprung, anorectale malformatie,
          spina bifida occulta, tethered cord, ziekte van Crohn, seksueel misbruik, hypothyreoïdie, coeliakie of
          koemelkeiwitallergie.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Rectaal toucher</h3>
        <p>
          Een rectaal toucher is vaak niet van meerwaarde en kan belastend zijn voor het kind. Het kan alleen overwogen
          worden in specifieke situaties, bijvoorbeeld als het kind aan slechts één van de Rome IV-criteria voldoet en je
          de diagnose wilt ondersteunen.
        </p>
        <p>Niet doen bij:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>meer dan 2 Rome IV-criteria;</li>
          <li>geen Rome IV-criteria;</li>
          <li>een onervaren arts;</li>
          <li>inschatting dat het onderzoek te belastend is;</li>
          <li>verdenking op seksueel misbruik.</li>
        </ul>
      </div>
    </div>
  )
}
