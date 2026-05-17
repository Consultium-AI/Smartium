export default function Sect04CytochroomP450() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Cytochroom P450 en geneesmiddelinteracties</h2>
      <p>
        De cytochroom P450-enzymen zitten vooral in de <strong className="text-slate-900 dark:text-slate-100">hepatocyten</strong> en in mindere mate ook in de{' '}
        <strong className="text-slate-900 dark:text-slate-100">dunne darm</strong>. Door de aanwezigheid in de darm dragen ze bij aan het first-pass effect.
      </p>
      <p>
        Er zijn inmiddels ongeveer veertig CYP450-eiwitten bekend. Voor het metabolisme van geneesmiddelen zijn vooral{' '}
        <strong className="text-slate-900 dark:text-slate-100">CYP3A4, CYP2D6, CYP2C9 en CYP2C19</strong> belangrijk.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Begrippen rond CYP450</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Begrip</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Substraat</td>
              <td className="p-3 align-top">Een geneesmiddel dat door een CYP-enzym wordt afgebroken</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Remmer</td>
              <td className="p-3 align-top">Een middel dat een CYP-enzym blokkeert en de afbraak van andere middelen vertraagt</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Inductor</td>
              <td className="p-3 align-top">
                Een middel dat de productie van CYP-enzymen verhoogt en daarmee de afbraak versnelt
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Een <strong className="text-slate-900 dark:text-slate-100">substraat</strong> wordt dus door hetzelfde enzym omgezet. Als meerdere middelen hetzelfde iso-enzym gebruiken, kunnen er klinisch relevante interacties optreden.
      </p>
      <p>
        Een <strong className="text-slate-900 dark:text-slate-100">remmer</strong> bindt zich sterk aan het enzym en verstoort zo de afbraak van andere geneesmiddelen. Daardoor kunnen andere middelen langzamer worden gemetaboliseerd, terwijl de remmer zelf ook invloed ondervindt.
      </p>
      <p>
        Een <strong className="text-slate-900 dark:text-slate-100">inductor</strong> zorgt ervoor dat er meer CYP-enzymen worden aangemaakt. Dat gebeurt via activatie van specifieke transcriptiefactoren in de celkern. Het gevolg is vaak een versnelde afbraak van geneesmiddelen. Soms neemt ook de productie van{' '}
        <strong className="text-slate-900 dark:text-slate-100">P-glycoproteïne-transporters</strong> toe, waardoor transport van geneesmiddelen door cellen verbetert.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Klinische relevantie van inductie en remming</h3>
      <p>Veranderingen in enzymactiviteit kunnen belangrijk zijn omdat ze geneesmiddelinteracties veroorzaken of het effect van een middel veranderen.</p>

      <h4 className="text-base font-semibold text-slate-900 dark:text-slate-200">Voorbeeld: rifampicine en orale anticonceptiva</h4>
      <p>
        Rifampicine is een sterke <strong className="text-slate-900 dark:text-slate-100">CYP3A4-inductor</strong>. De anticonceptiepil, bijvoorbeeld met{' '}
        <strong className="text-slate-900 dark:text-slate-100">ethinylestradiol/desogestrel</strong>, is een substraat voor CYP3A4. Als beide samen worden gebruikt, wordt de pil sneller afgebroken. Daardoor daalt de concentratie van de werkzame stoffen en neemt de werking van de anticonceptie af. Dat verhoogt het risico op ongewenste zwangerschap. Vaak is dan aanvullende anticonceptie nodig, zoals condooms.
      </p>

      <h4 className="text-base font-semibold text-slate-900 dark:text-slate-200">Voorbeeld: rifampicine en ciclosporine</h4>
      <p>
        Ciclosporine is een immunosuppressivum dat transplantatiepatiënten gebruiken om afstoting te voorkomen. Rifampicine versnelt de afbraak van ciclosporine, waardoor de bloedconcentratie daalt en het risico op transplantaatafstoting toeneemt.
      </p>

      <h4 className="text-base font-semibold text-slate-900 dark:text-slate-200">Voorbeeld: itraconazol en ciclosporine</h4>
      <p>
        Itraconazol is juist een sterke <strong className="text-slate-900 dark:text-slate-100">CYP3A4-remmer</strong>. Daardoor wordt ciclosporine langzamer afgebroken en stijgt de bloedconcentratie. Dat vergroot de kans op bijwerkingen, zoals{' '}
        <strong className="text-slate-900 dark:text-slate-100">nefrotoxiciteit</strong>.
      </p>
    </div>
  )
}
