export default function Sect09DiagnostiekMaagkanker() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Diagnostiek bij maagkanker</h2>
      <p>
        Metastasen worden aangetoond met <strong className="text-slate-900 dark:text-slate-100">CT-thorax/abdomen</strong>.
        Omdat peritoneale metastasen vaak moeilijk zichtbaar zijn, speelt{' '}
        <strong className="text-slate-900 dark:text-slate-100">diagnostische laparoscopie (DLS)</strong> een belangrijke rol. Hierbij wordt het buikvlies beoordeeld. De{' '}
        <strong className="text-slate-900 dark:text-slate-100">Peritoneal Carcinomatosis Index (PCI)</strong> wordt per regio gescoord en loopt van 0 tot 39. In principe geldt een PCI van 1-39 als palliatief.
      </p>
      <p>Tijdens laparoscopie kan men:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>verdachte afwijkingen biopsiëren voor histologie;</li>
        <li>peritoneale lavage doen voor cytologie;</li>
        <li>
          bij intakeproblemen een <strong className="text-slate-900 dark:text-slate-100">jejunumfistel</strong> of
          voedingssonde aanleggen;
        </li>
        <li>
          een <strong className="text-slate-900 dark:text-slate-100">port-a-cath</strong> plaatsen voor chemotherapie.
        </li>
      </ul>
      <p>
        De PLASTIC-studie liet zien dat PET-CT slechts bij een klein deel extra metastasen vond en dat staging laparoscopie veel vaker positief was. Daarom heeft PET-CT bij maagkanker geen duidelijke meerwaarde meer voor het aantonen van metastasen naast CT en DLS.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">
        Tabel 5. Diagnostiek bij lokaal gevorderde maagkanker
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Onderzoek</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Rol</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">CT-thorax/abdomen</td>
              <td className="p-3 align-top">Eerste beeldvorming voor metastasen</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Diagnostische laparoscopie</td>
              <td className="p-3 align-top">Beoordeling peritoneum en PCI, vooral bij verdenking peritoneale metastasen</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Biopsie</td>
              <td className="p-3 align-top">Histologische bevestiging van verdachte afwijkingen</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Peritoneale lavage</td>
              <td className="p-3 align-top">Cytologie</td>
            </tr>
            <tr>
              <td className="p-3 align-top">PET-CT</td>
              <td className="p-3 align-top">Geen meerwaarde naast CT en DLS; niet standaard meer bij maagkanker</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
