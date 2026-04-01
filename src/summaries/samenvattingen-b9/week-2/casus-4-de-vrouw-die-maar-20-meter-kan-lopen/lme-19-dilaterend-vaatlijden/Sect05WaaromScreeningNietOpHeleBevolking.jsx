export default function Sect05WaaromScreeningNietOpHeleBevolking() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Waarom screening niet op de hele bevolking?</h2>
      <p>
        In Nederland is geen bevolkingsonderzoek naar AAA ingesteld. Dat komt omdat het niet voldoet aan alle criteria voor verantwoord bevolkingsonderzoek.
      </p>
      <p>De belangrijkste overwegingen zijn:</p>

      <div className="space-y-4">
        <div>
          <p className="font-medium text-slate-800 dark:text-slate-200 m-0 mb-2">Beperkte opbrengst op populatieniveau</p>
          <p className="m-0">
            AAA komt vooral voor in een specifieke risicogroep, met name oudere mannen die roken of gerookt hebben. In de algemene bevolking is de prevalentie relatief laag, waardoor het aantal personen dat gescreend moet worden hoog is.
          </p>
        </div>
        <div>
          <p className="font-medium text-slate-800 dark:text-slate-200 m-0 mb-2">Onzeker netto voordeel</p>
          <p className="m-0">
            Screening kan AAA-gerelateerde sterfte verminderen, maar het effect op de totale sterfte blijft beperkt. Veel gescreende personen overlijden uiteindelijk aan andere cardiovasculaire aandoeningen.
          </p>
        </div>
        <div>
          <p className="font-medium text-slate-800 dark:text-slate-200 m-0 mb-2">Overdiagnostiek en medicalisering</p>
          <p className="m-0 mb-2">
            Screening vindt ook kleine aneurysmata die nooit zouden ruptureren. Dit leidt tot:
          </p>
          <ul className="list-disc pl-6 space-y-1 m-0">
            <li>langdurige follow-up;</li>
            <li>psychologische belasting;</li>
            <li>extra zorgconsumptie zonder directe gezondheidswinst.</li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-slate-800 dark:text-slate-200 m-0 mb-2">Kosten-effectiviteit</p>
          <p className="m-0">
            In de Nederlandse context lijkt screening in de algemene bevolking minder kosteneffectief dan andere bevolkingsonderzoeken.
          </p>
        </div>
        <div>
          <p className="font-medium text-slate-800 dark:text-slate-200 m-0 mb-2">Operatierisico en complicaties</p>
          <p className="m-0">
            Preventieve interventies brengen reële risico’s met zich mee, zoals mortaliteit, morbiditeit en re-interventies. Dat weegt zwaar als het aneurysma mogelijk nooit klachten zou geven.
          </p>
        </div>
      </div>

      <p>
        Daarom wordt in plaats van algemene screening vooral gedacht aan selectieve opsporing bij hoogrisicogroepen, bijvoorbeeld bij oudere mannelijke rokers of patiënten met andere cardiovasculaire ziekte.
      </p>
    </div>
  )
}
