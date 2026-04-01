export default function Sect09HoeWordtOverdiagnoseGeschat() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe wordt overdiagnose geschat?</h2>
      <p>
        Er zijn verschillende manieren om overdiagnose te schatten, maar niet alle methoden zijn even betrouwbaar. De
        meest betrouwbare schattingen komen volgens de beoordeling uit gerandomiseerde gecontroleerde trials (RCT’s)
        waarbij de controlegroep na afloop van de screeningsperiode niet alsnog wordt gescreend.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Waarom zijn sommige trials beter geschikt?</h3>
      <p>
        In trials waarin de controlegroep na afloop alsnog screening krijgt, wordt de vergelijking moeilijker. Dan
        ontstaat er namelijk een mengvorm van wél en niet screenen, waardoor de hoeveelheid overdiagnose:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>te laag kan uitvallen als gevonden gevallen in de controlegroep worden meegeteld;</li>
        <li>of te hoog kan uitvallen als het effect van screening en de timing van detectie verkeerd worden geïnterpreteerd.</li>
      </ul>
      <p>De drie trials die als het meest geschikt werden gezien voor de schatting van overdiagnose waren:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Malmö;</li>
        <li>Canada 1;</li>
        <li>Canada 2.</li>
      </ul>
      <p>Deze trials gaven ongeveer dezelfde orde van grootte:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>ongeveer 11% overdiagnose vanuit een populatieperspectief;</li>
        <li>ongeveer 19% vanuit het perspectief van de individuele vrouw die wordt uitgenodigd voor screening.</li>
      </ul>
      <p>
        Dat betekent dus: als je kijkt naar alle vrouwen die worden uitgenodigd, is ongeveer 11% van de vastgestelde
        borstkankers toe te schrijven aan overdiagnose; kijk je naar de vrouwen die tijdens de screeningperiode
        daadwerkelijk een diagnose krijgen, dan ligt het aandeel hoger.
      </p>
    </div>
  )
}
