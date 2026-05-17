export default function Sect03SpectrumEnEpidemiologie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Spectrum en epidemiologie</h2>
      <p>
        SLD is geen enkele aandoening met één vast verloop, maar een <strong className="text-slate-900 dark:text-slate-100">ziektecontinuüm</strong>. Dat continuum
        loopt van:
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Eenvoudige steatose</strong>: vetstapeling zonder ontsteking;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">MASH</strong>: steatose met ontsteking en hepatocytbeschadiging;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Leverfibrose</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Cirrhose</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Hepatocellulair carcinoom (HCC)</strong>.
        </li>
      </ol>
      <p>
        Niet elke patiënt met steatose ontwikkelt progressie. Daarom is het belangrijk onderscheid te maken tussen relatief onschuldige vetstapeling en klinisch relevante
        ziekte.
      </p>
      <p>
        De prevalentie van SLD is wereldwijd hoog. Voor NAFLD/MASLD wordt een globale prevalentie van ongeveer <strong className="text-slate-900 dark:text-slate-100">30%</strong>{' '}
        van de volwassen populatie genoemd, met duidelijke regionale verschillen. De hoogste prevalenties worden gerapporteerd in{' '}
        <strong className="text-slate-900 dark:text-slate-100">Latijns-Amerika</strong>, gevolgd door <strong className="text-slate-900 dark:text-slate-100">Midden-Oosten en Noord-Afrika</strong>,{' '}
        <strong className="text-slate-900 dark:text-slate-100">Zuid-Azië</strong> en <strong className="text-slate-900 dark:text-slate-100">Noord-Amerika</strong>. In{' '}
        <strong className="text-slate-900 dark:text-slate-100">West-Europa</strong> liggen de cijfers lager. Deze variatie hangt samen met verschillen in obesitas, leefstijl,
        genetische achtergrond en metabole risicofactoren.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Globale prevalentie van steatotische leverziekte</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Regio</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Geschatte prevalentie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Latijns-Amerika</td>
              <td className="p-3 align-top">44,4%</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Midden-Oosten en Noord-Afrika</td>
              <td className="p-3 align-top">36,5%</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Zuid-Azië</td>
              <td className="p-3 align-top">33,8%</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Noord-Amerika</td>
              <td className="p-3 align-top">31,2%</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Australasië</td>
              <td className="p-3 align-top">31,2%</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Oost-Azië</td>
              <td className="p-3 align-top">29,7%</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Azië-Pacifische regio</td>
              <td className="p-3 align-top">28,0%</td>
            </tr>
            <tr>
              <td className="p-3 align-top">West-Europa</td>
              <td className="p-3 align-top">25,1%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
