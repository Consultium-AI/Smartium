export default function Sect16CARTCeltherapie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">CAR-T-celtherapie</h2>
      <p>
        Bij CAR-T-celtherapie worden T-cellen uit het bloed van de patiënt gehaald. In het laboratorium wordt daar een
        chimere antigeenreceptor, de CAR, ingebracht. Daarna worden de gemodificeerde T-cellen teruggegeven aan de
        patiënt.
      </p>
      <p>De CAR bestaat uit verschillende onderdelen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>een scFv-domein voor herkenning van het specifieke target;</li>
        <li>een hinge-domein voor flexibiliteit en positionering;</li>
        <li>een transmembraandomein voor stabiliteit;</li>
        <li>een intracellulair domein voor activatie en expansie van de T-cel.</li>
      </ul>
      <p>
        Na terugplaatsing herkennen deze T-cellen de myeloomcellen en doden ze deze. Voor multipel myeloom zijn vooral
        BCMA en GPRC5D belangrijke nieuwe targets.
      </p>
    </div>
  )
}
