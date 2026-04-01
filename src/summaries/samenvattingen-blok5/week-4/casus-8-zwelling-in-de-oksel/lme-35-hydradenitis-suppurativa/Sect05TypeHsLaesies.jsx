export default function Sect05TypeHsLaesies() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Type HS-laesies</h2>
      <p>
        Bij HS kunnen verschillende huidafwijkingen voorkomen. Het is belangrijk om deze te herkennen, omdat ze iets zeggen over de activiteit en ernst van de ziekte.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Belangrijke HS-laesies</h3>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100 w-1/3">Laesie</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Uitleg</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className="p-3 align-top">Comedonen</td>
              <td className="p-3">
                Mee-eters; door hyperkeratose in de haarfollikel ontstaat een folliculaire plug die kan bestaan uit talg en epitheelresten
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top">Inflammatoire nodus</td>
              <td className="p-3">Een palpabele laesie van meer dan 1 cm onder de huid</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Abces</td>
              <td className="p-3">
                Een nodus kan evolueren tot een abces, gevuld met pus; vaak zeer pijnlijk; klinisch te herkennen aan fluctuatie
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top">Drainerende tunnel</td>
              <td className="p-3">
                Ontstaat door chronische ontsteking en vorming van abcessen en nodi; tunnels kunnen gaan draineren en verdwijnen niet vanzelf
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top">Hypertrofisch litteken</td>
              <td className="p-3">Een ernstige vorm van verlittekening die wijst op een ernstige ontsteking in het verleden</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een abces is dus niet zomaar een pijnlijke zwelling: het is een met pus gevulde ontstekingshaard. Een tunnel is een kanaal dat ontstaat door chronische ontsteking. Als zo’n tunnel eenmaal is gevormd, gaat die niet meer vanzelf weg.
      </p>
    </div>
  )
}
