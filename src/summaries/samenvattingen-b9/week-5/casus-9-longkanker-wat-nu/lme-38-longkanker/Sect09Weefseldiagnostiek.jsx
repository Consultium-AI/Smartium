export default function Sect09Weefseldiagnostiek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Weefseldiagnostiek</h2>
      <p>
        Voor de diagnose is weefseldiagnostiek nodig. Dat gebeurt meestal met een <span className="font-semibold">biopsie</span> of <span className="font-semibold">punctie</span>. Mogelijke technieken zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Bronchoscopie</span>: geschikt voor centrale tumoren, dicht bij de grote luchtwegen. Via een flexibele bronchoscoop kan men in de luchtwegen kijken en direct biopsie nemen.
        </li>
        <li>
          <span className="font-semibold">Navigatiebronchoscopie</span>: met CT-gegevens wordt een virtuele 3D-kaart van de luchtwegen gemaakt, zodat perifere laesies preciezer bereikt kunnen worden.
        </li>
        <li>
          <span className="font-semibold">Transthoracale punctie</span>: een CT-geleide biopsie voor pulmonaire laesies. Hierbij wordt via de borstwand een naald ingebracht.
        </li>
        <li>
          <span className="font-semibold">Slokdarm- of endobronchiale echografie</span> (<span className="font-semibold">EUS/EBUS</span>): belangrijk voor het beoordelen en aanprikken van lymfeklieren en massa’s rond trachea en bronchiën.
        </li>
        <li>
          <span className="font-semibold">VATS</span> (<em>video-assisted thoracic surgery</em>): een minimaal-invasieve thoracoscopische techniek die zowel voor diagnostiek als behandeling gebruikt kan worden.
        </li>
      </ul>
      <p>Bij een transthoracale punctie zijn de belangrijkste risico’s pneumothorax en longbloeding.</p>
    </div>
  )
}
