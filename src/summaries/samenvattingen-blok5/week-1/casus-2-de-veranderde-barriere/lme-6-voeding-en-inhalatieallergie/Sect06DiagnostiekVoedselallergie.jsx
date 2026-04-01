export default function Sect06DiagnostiekVoedselallergie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Diagnostiek bij voedselallergie</h2>
      <p>
        De diagnose wordt gesteld op basis van een goede anamnese in combinatie met het aantonen van specifiek IgE.
        Dat kan met:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>een bloedonderzoek;</li>
        <li>een huidpriktest (HPT).</li>
      </ul>
      <p>De gouden standaard in de diagnostiek is de voedselprovocatietest.</p>
      <p>
        Aandachtsvraag: is een positieve huidtest alleen genoeg voor de diagnose?{'  '}
        Mini-antwoord: nee. Een positieve test laat sensibilisatie zien, maar dat betekent nog niet automatisch dat
        iemand echt allergisch is.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Huidpriktest</h3>
      <p>
        Bij een HPT wordt een kleine druppel allergeenextract op de onderarm gedruppeld en met een lancet in de huid
        geprikt. Als er antistoffen aanwezig zijn, ontstaat binnen 15 minuten een kwaddel met erytheem. De reactie
        ontstaat doordat mestcellen in de huid geactiveerd worden via hun sIgE-receptoren.
      </p>
      <p>De test is betrouwbaar als:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de positieve controle met histamine positief is;</li>
        <li>de negatieve controle negatief is.</li>
      </ul>
      <p>
        Een HPT is positief als de doorsnede van de kwaddel 3 mm of groter is. Antihistaminica moeten vooraf worden
        gestopt.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Bloedonderzoek</h3>
      <p>
        Bij bloedonderzoek wordt gezocht naar specifieke IgE-antistoffen tegen allergenenextracten of tegen
        allergencomponenten.
      </p>
      <p>
        Bij een allergenenextract zit een mix van allergene en niet-allergene stoffen. Daardoor kan de interpretatie
        lastig zijn: iemand kan bijvoorbeeld IgE hebben tegen een onbelangrijk onderdeel van een extract.
      </p>
      <p>
        Met component-resolved diagnosis (CRD) worden zuivere of recombinant allergeencomponenten onderzocht. Dat geeft
        een specifieker beeld van het risico op een allergische reactie.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Voedselprovocatie</h3>
      <p>
        Een voedselprovocatie kan open of dubbelblind gebeuren. De dubbelblinde, placebogecontroleerde provocatie is
        de gouden standaard, maar kost veel tijd en is belastend. Het kind komt dan meestal 2 dagen, en ouders, kind en
        personeel weten niet op welke dag het echte allergeen en op welke dag placebo wordt gegeven.
      </p>
      <p>
        Bij een open voedselprovocatietest weet iedereen welk voedsel wordt gegeven. Dat is praktischer, maar geeft
        een iets grotere kans op fout-positieve reacties door subjectieve klachten.
      </p>
      <p>Bij een provocatietest krijgt het kind het verdachte voedingsallergeen in opklimmende doseringen. Dit geeft inzicht in:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de aard van de klachten;</li>
        <li>de drempel waarbij klachten optreden;</li>
        <li>de eventuele noodzaak van behandeling.</li>
      </ul>
      <p>
        Voor ouders en kind is dit ook nuttig om te leren omgaan met kleine hoeveelheden allergeen, etiketten te lezen
        en reacties te behandelen.
      </p>
    </div>
  )
}
