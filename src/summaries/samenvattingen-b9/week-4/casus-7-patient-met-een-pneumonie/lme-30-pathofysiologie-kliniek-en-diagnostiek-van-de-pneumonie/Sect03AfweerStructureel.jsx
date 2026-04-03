export default function Sect03AfweerStructureel() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Afweermechanismen van de long</h2>
      <p>De afweer van de long wordt grofweg ingedeeld in drie groepen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Structurele/anatomische factoren</li>
        <li>Aangeboren immuniteit</li>
        <li>Verworven immuniteit</li>
      </ul>
      <p>
        Deze drie vormen samen een gelaagd systeem. De eerste laag probeert te voorkomen dat micro-organismen überhaupt dieper de long in komen. Als dat toch gebeurt, nemen aangeboren en verworven afweer het over.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Structurele en anatomische afweer</h3>
      <p>
        De luchtwegen vertakken zich steeds verder. In de grotere luchtwegen zitten slijmbekercellen die mucus produceren. Dat slijm vangt ingeademde virussen en bacteriën op. In de trilharenlaag bewegen de cilia met gecoördineerde golfbewegingen, waardoor mucus langzaam naar de meer proximale luchtwegen wordt vervoerd en uiteindelijk kan worden weggehoest.
      </p>
      <p>
        Dit heet mucociliair transport: trilharen verplaatsen de mucuslaag omhoog, samen met alles wat daarin gevangen zit. De mucuslaag bestaat uit een dunne vloeibare sol-laag en een dikker gel-laag. De cilia bewegen vooral in de sol-laag, waardoor het slijm gemakkelijker vervoerd wordt.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: Wat is de belangrijkste functie van mucus?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Micro-organismen opvangen, zodat ze door trilharen en hoesten uit de luchtwegen verwijderd kunnen worden.
        </p>
      </div>
      <p>
        Hoesten is ook een belangrijk verdedigingsmechanisme. Het wordt uitgelokt door stimulatie van hoestreceptoren, die vooral in de proximale luchtwegen zitten, maar ook extra-pulmonaal aanwezig kunnen zijn. Tijdens hoesten worden hoge intrathoracale drukken opgebouwd, waardoor lucht met grote snelheid uit de long wordt gestuwd. Zo worden overtollig slijm en micro-organismen verwijderd.
      </p>
    </div>
  )
}
