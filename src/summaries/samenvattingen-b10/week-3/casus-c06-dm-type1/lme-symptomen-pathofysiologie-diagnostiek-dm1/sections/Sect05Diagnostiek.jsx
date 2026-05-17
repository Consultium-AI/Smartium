export default function Sect05Diagnostiek () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Diagnostiek van diabetes mellitus type 1
      </h2>
      <p>
        Voor de diagnose kijk je naar <strong className="text-slate-900 dark:text-slate-100">bloedonderzoek</strong>. Leeftijd, klachten en het klinische beeld geven vaak al veel informatie, maar de diagnose wordt bevestigd met metingen van glucose en HbA1c.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 3. Diagnostische criteria voor diabetes mellitus
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Onderzoek</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Afkapwaarde</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Nuchtere glucose na ≥8 uur vasten</td>
              <td className="p-3 align-top">&gt; 7,0 mmol/L</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Willekeurige glucose</td>
              <td className="p-3 align-top">&gt; 11,1 mmol/L</td>
            </tr>
            <tr>
              <td className="p-3 align-top">HbA1c</td>
              <td className="p-3 align-top">≥ 48 mmol/mol</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij een <strong className="text-slate-900 dark:text-slate-100">nuchtere glucose</strong> boven 7,0 mmol/L na minstens 8 uur vasten is sprake van diabetes. Een <strong className="text-slate-900 dark:text-slate-100">willekeurige glucose</strong> boven 11,1 mmol/L wijst ook op diabetes. Bij asymptomatische mensen moet je zo’n uitslag nog eens herhalen, omdat een eenmalig hoge glucose bijvoorbeeld door infectie kan komen.
      </p>
      <p>
        Hebben mensen al <strong className="text-slate-900 dark:text-slate-100">klassieke symptomen van hyperglykemie</strong> of een hyperglykemische crisis, zoals polyurie, polydipsie of afvallen, dan is herhaling niet nodig.
      </p>
      <p>
        HbA1c is een maat voor de gemiddelde bloedsuiker over een langere periode. De afkapwaarde voor diabetes is{' '}
        <strong className="text-slate-900 dark:text-slate-100">≥ 48 mmol/mol</strong>.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Wat is HbA1c precies?</h3>
      <p>
        Glucose kan binden aan hemoglobine in rode bloedcellen. Hoe hoger en hoe langer de bloedglucose, hoe meer glucose aan hemoglobine bindt. Dat heet <strong className="text-slate-900 dark:text-slate-100">geglycosyleerd hemoglobine</strong>, oftewel <strong className="text-slate-900 dark:text-slate-100">HbA1c</strong>.
      </p>
      <p>
        Rode bloedcellen leven ongeveer <strong className="text-slate-900 dark:text-slate-100">drie maanden</strong>. Daarom is HbA1c een goede <strong className="text-slate-900 dark:text-slate-100">langetermijnmarker</strong> voor de gemiddelde glucosewaarde.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Wanneer is HbA1c niet betrouwbaar?</h3>
      <p>
        HbA1c is alleen goed bruikbaar als de levensduur van de rode bloedcellen normaal is. Als die levensduur wordt verkort of verlengd, kan HbA1c een vertekend beeld geven.
      </p>
      <p>Denk bijvoorbeeld aan:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">grote bloeding of hemolyse</strong>: minder “oude” rode bloedcellen → HbA1c kan lager uitvallen;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">anemie</strong>: verlengde levensduur van rode bloedcellen → HbA1c kan foutief hoger uitvallen;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">kort na een bloedtransfusie</strong>: dan kijk je liever niet naar HbA1c, maar vooral naar de bloeddonor.
        </li>
      </ul>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Aandachtsvraag:</strong> Waarom zegt HbA1c niet alles over de dagelijkse glucosecontrole?
        </p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0 mt-2">
          <strong className="font-semibold">Mini-antwoord:</strong> Omdat het een gemiddelde over ongeveer twee tot drie maanden weergeeft; iemand kan toch veel hypo- en hyperglykemieën hebben die elkaar uitmiddelen.
        </p>
      </div>
    </div>
  )
}
