export default function Sect09Verwekkers() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Verwekkers: welke micro-organismen passen erbij?</h2>
      <p>
        Een erysipelas of cellulitis kan door verschillende verwekkers worden veroorzaakt. Afhankelijk van patiëntkenmerken of exposities komen sommige verwekkers vaker voor. Dat heeft gevolgen voor de behandeling.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Belangrijke verwekkers en typische context</h3>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100 w-1/3">Verwekker</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Kenmerkende context</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className="p-3 align-top font-semibold text-slate-900 dark:text-slate-100">Staphylococcus aureus</td>
              <td className="p-3">
                Meest voorkomend bij erysipelas/cellulitis; sommige stammen produceren toxinen en kunnen abcederende of necrotiserende ontstekingen geven, soms met blaarvorming. Bij recent verblijf in buitenlandse ziekenhuizen moet methicillineresistentie worden overwogen. Dragerschap kan worden aangetoond met neus-, keel- en perineumkweken.
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top font-semibold text-slate-900 dark:text-slate-100">Bètahemolytische streptokokken</td>
              <td className="p-3">
                Meest voorkomende verweker van erysipelas; kan daarnaast verschillende klinische beelden veroorzaken, van een ongecompliceerde faryngitis tot een fasciitis necroticans. Komt ook voor als commensaal op huid en/of keel.
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top font-semibold text-slate-900 dark:text-slate-100">Pseudomonas aeruginosa</td>
              <td className="p-3">
                Gram-negatieve verweker; kan worden opgelopen via besmet water, bijvoorbeeld in bubbelbaden. Behandeling bijvoorbeeld met ciprofloxacine.
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top font-semibold text-slate-900 dark:text-slate-100">Niet-tuberculeuze mycobacteriën</td>
              <td className="p-3">
                Expositie via watercontact of na chirurgische ingrepen, zowel bij immuuncompetente als immuungecompromitteerde patiënten. Sommige species hebben een lange kweektijd; effectieve behandeling vraagt vaak maanden antibiotische therapie.
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top font-semibold text-slate-900 dark:text-slate-100">Capnocytophaga canimorsus</td>
              <td className="p-3">
                Micro-organisme komt commensaal voor in de hondenbek. Infectie na hondenbeet kan leiden tot sepsis, met name bij immuungecompromitteerde patiënten. Goed gevoelig voor bèta-lactam antibiotica, doxycycline en clindamycine.
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top font-semibold text-slate-900 dark:text-slate-100">Pasteurella multocida</td>
              <td className="p-3">
                Infectie na een beet of krab van een huisdier, zoals katten, honden, ratten of konijnen. Vaak goed gevoelig voor penicilline.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Bij de casus werd daarnaast gedacht aan een dermatomycose als port d’entrée.</p>
    </div>
  )
}
