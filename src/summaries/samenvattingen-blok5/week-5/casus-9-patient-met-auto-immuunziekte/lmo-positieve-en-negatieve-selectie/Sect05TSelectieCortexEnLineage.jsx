export default function Sect05TSelectieCortexEnLineage() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Positieve en negatieve selectie van T-lymfocyten in de thymus
      </h2>
      <p>
        T-lymfocyten ontwikkelen zich in de thymus. Daarbij is niet alleen van belang óf de T-celreceptor iets bindt,
        maar vooral hoe sterk de receptor bindt aan peptide-MHC-complexen.
      </p>
      <p>
        T-lymfocyten kunnen antigenen alleen herkennen wanneer die gepresenteerd worden in de context van MHC. Daarom
        moet tijdens de ontwikkeling gecontroleerd worden of de T-celreceptor in staat is om lichaamseigen MHC te
        herkennen, maar niet te sterk reageert op lichaamseigen peptiden.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Dubbelpositieve thymocyten</h3>
      <p>
        Een belangrijk stadium in de thymus is dat van de dubbelpositieve thymocyt. Deze cel draagt zowel CD4 als CD8.
        In dit stadium wordt getest hoe goed de T-celreceptor bindt aan MHC-moleculen met peptide.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Positieve selectie in de cortex</h3>
      <p>
        In de cortex van de thymus presenteren corticale thymusepitheelcellen peptide-MHC-complexen aan dubbelpositieve
        thymocyten. Cellen waarvan de T-celreceptor met lage of intermediaire affiniteit aan eigen MHC bindt, krijgen
        overlevingssignalen. Zij worden positief geselecteerd.
      </p>
      <p>
        Positieve selectie betekent dus: de cel blijkt bruikbaar, omdat zij in staat is lichaamseigen MHC te herkennen.
        Zonder dit vermogen zou de T-cel later geen antigenen kunnen herkennen.
      </p>
      <p>
        Thymocyten die helemaal niet binden aan MHC krijgen geen overlevingssignalen en gaan in apoptose. Ze sterven
        dus omdat ze functioneel onbruikbaar zijn.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Lineage choice: CD4 of CD8</h3>
      <p>
        Tijdens positieve selectie wordt ook bepaald of een T-lymfocyt verder uitrijpt tot CD4+- of CD8+-T-lymfocyt.
      </p>
      <p>
        Een cel die vooral MHC-klasse II herkent, ontwikkelt zich tot CD4+-T-lymfocyt en verliest CD8.
      </p>
      <p>
        Een cel die vooral MHC-klasse I herkent, ontwikkelt zich tot CD8+-T-lymfocyt en verliest CD4.
      </p>
      <p>Daarmee bepaalt de bindingssterkte én de MHC-klasse het uiteindelijke lot van de T-cel.</p>
    </div>
  )
}
