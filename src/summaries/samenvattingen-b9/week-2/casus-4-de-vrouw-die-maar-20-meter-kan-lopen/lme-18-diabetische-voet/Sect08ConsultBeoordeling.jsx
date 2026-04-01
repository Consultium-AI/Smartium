export default function Sect08ConsultBeoordeling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe beoordeel je een patiënt met een diabetische voet?</h2>
      <p>De aanpak van het consult verloopt in een vaste volgorde:</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Anamnese</li>
        <li>Lichamelijk onderzoek: inspectie</li>
        <li>Lichamelijk onderzoek: auscultatie</li>
        <li>Lichamelijk onderzoek: palpatie</li>
        <li>Aanvullend onderzoek, non-invasief</li>
        <li>Aanvullend onderzoek, invasief</li>
      </ol>

      <p>Bij inspectie let je op:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>wondlocatie;</li>
        <li>roodheid;</li>
        <li>oedeem;</li>
        <li>droge huid;</li>
        <li>standsafwijkingen;</li>
        <li>schoeisel;</li>
        <li>eelt;</li>
        <li>nagelafwijkingen.</li>
      </ul>

      <p>Bij palpatie van de vaatboom voel je naar pulsaties, onder andere in:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>a. femoralis communis;</li>
        <li>a. poplitea;</li>
        <li>a. dorsalis pedis;</li>
        <li>a. tibialis posterior.</li>
      </ul>

      <p>
        Bij een diabetische voet kan je wel pulsaties voelen in de lies en knieholte, maar geen pulsaties in de voetarteriën. Dat past bij een verminderd perifere doorbloeding.
      </p>

      <p>Aanvullend doe je functietesten, zoals:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>enkel/arm-index, eventueel aangevuld met teendruk;</li>
        <li>monofilamentonderzoek om de tastzin van de voet te beoordelen.</li>
      </ul>
    </div>
  )
}
