export default function Sect12CARTCeltherapie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">CAR-T-celtherapie</h2>
      <p>
        Een andere recente vorm van kankerimmunotherapie is CAR-T-celtherapie. Hierbij worden T-lymfocyten van de patiënt
        genetisch aangepast zodat ze een chimeere antigeenreceptor dragen.
      </p>
      <p>Die receptor bestaat uit:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>een extracellulair antigeenherkenningsdeel,</li>
        <li>een transmembraandeel,</li>
        <li>een intracellulair signaaldeel met T-celactiverende domeinen,</li>
        <li>vaak ook een kostimulerend domein zoals CD28 of 4-1BB,</li>
        <li>en het signaaldomein CD3ζ.</li>
      </ul>
      <p>Het grote voordeel is dat CAR-T-cellen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>een gewenste antigeenspecificiteit hebben;</li>
        <li>hun antigeen kunnen herkennen zonder MHC-presentatie.</li>
      </ul>
      <p>Daarmee combineren ze eigenschappen van B-cellen en T-cellen.</p>
      <p>De procedure duurt ongeveer drie weken:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>bloed afnemen en mononucleaire cellen zuiveren;</li>
        <li>T-lymfocyten isoleren;</li>
        <li>de T-cellen ex vivo uitbreiden en activeren;</li>
        <li>CAR-T-cellen voorbereiden;</li>
        <li>infusie van de CAR-T-cellen.</li>
      </ul>
      <p>
        CAR-T wordt vooral gebruikt bij B-cellymfoom en B-celleukemie, meestal met een CD19-CAR. Bij patiënten met een
        recidief of refractaire tumor, bij wie andere behandelingen niet meer werken, kan deze therapie tot volledige
        remissie leiden. De behandeling is duur en wordt in Nederland nog op relatief beperkte schaal toegepast.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Bijwerkingen van CAR-T</h3>
      <p>
        De belangrijkste bijwerking is het Cytokine Release Syndrome (CRS). Dit ontstaat door massale activatie van de
        CAR-T-cellen, vooral als het doeltantigeen niet volledig tumorspecifiek is en ook op normaal weefsel voorkomt. De
        CAR-T-cellen produceren dan veel pro-inflammatoire cytokinen.
      </p>
      <p>Klinisch zie je onder andere:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>hoge koorts,</li>
        <li>hyperinflammatie,</li>
        <li>verhoogd ferritine,</li>
        <li>aanhoudende cytopenieën,</li>
        <li>stollingsstoornissen,</li>
        <li>leverfunctiestoornissen.</li>
      </ul>
      <p>
        CRS begint meestal binnen twee dagen na de start en piekt rond één tot twee weken. Tocilizumab, een
        anti-IL-6-receptorblokker, is toegestaan als behandeling van CRS.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandachtspunt: waarom kan CAR-T CRS geven?</strong>{' '}
          <strong className="text-primary-900 dark:text-primary-200">Antwoord:</strong> omdat de gemodificeerde T-cellen
          massaal geactiveerd raken en grote hoeveelheden cytokinen vrijzetten.
        </p>
      </div>
    </div>
  )
}
