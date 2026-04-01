export default function Sect13PetCtEnFesTabel5() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">PET/CT en FES PET/CT</h2>
      <p>
        Met FDG PET/CT wordt glucosemetabolisme afgebeeld. Niet alle mammacarcinomen nemen veel FDG op. Een hogere
        FDG-opname past vaak bij agressievere en sneller groeiende tumoren.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Wanneer is FDG PET/CT nuttig?</h3>
      <p>Volgens de richtlijn wordt FDG PET/CT geadviseerd bij:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>T3-tumoren groter dan 5 cm;</li>
        <li>verdenking op lymfekliermetastasen;</li>
        <li>bewezen lymfekliermetastasen;</li>
        <li>metastasen op afstand;</li>
        <li>soms ook bij recidief.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 5. Tumortypen en FDG-opname</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Hoge FDG-opname
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Lage FDG-opname
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">Invasief carcinoom NST</td>
              <td className="px-3 py-3 align-top">DCIS</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">Triple-negatieve borstkanker</td>
              <td className="px-3 py-3 align-top">LCIS</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">Inflammatoire borstkanker</td>
              <td className="px-3 py-3 align-top">Invasief lobulair carcinoom</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">Hormoongevoelige borstkanker</td>
              <td className="px-3 py-3 align-top">HER2-positieve borstkanker</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij FES PET/CT wordt niet het glucosemetabolisme, maar de oestrogeenreceptor in beeld gebracht. FES is gekoppeld
        aan estradiol en kan nuttig zijn bij:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>het opsporen van metastasen die met FDG minder goed zichtbaar zijn;</li>
        <li>het beoordelen van de receptstatus van metastasen;</li>
        <li>het onderscheiden van metastasen van verschillende primaire tumoren.</li>
      </ul>
      <p>
        Bijvoorbeeld: als FDG PET/CT veel metastasen laat zien, maar onduidelijk is van welke tumor ze afkomstig zijn,
        kan FES helpen. Dit is vooral relevant bij oestrogeenreceptor-positieve ziekte.
      </p>
    </div>
  )
}
