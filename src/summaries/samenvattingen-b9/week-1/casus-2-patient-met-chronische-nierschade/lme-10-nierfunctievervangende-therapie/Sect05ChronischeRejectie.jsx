export default function Sect05ChronischeRejectie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Chronische rejectie</h2>
      <p>
        Chronische rejectie is een belangrijk probleem op langere termijn na niertransplantatie, ondanks de huidige immunosuppressiva. Een groot deel van de patiënten die dit ontwikkelen, zal uiteindelijk het transplantaat verliezen.
      </p>
      <p>
        In tegenstelling tot acute rejectie is chronische rejectie sterk gedreven door donor-specifieke antistoffen. Ook andere afweercellen spelen een rol, zoals:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>neutrofiele granulocyten;</li>
        <li>mogelijk NK-cellen.</li>
      </ul>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Klinisch beeld</h3>
        <p className="mb-2">Chronische rejectie herken je vooral aan:</p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>een gestage afname van de nierfunctie van het transplantaat;</li>
          <li>vaak ook proteïnurie.</li>
        </ul>
        <p className="mb-2">Bij biopt zie je schade aan:</p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>de glomeruli;</li>
          <li>de basaalmembraan.</li>
        </ul>
        <p className="mb-3">
          Dat hangt samen met het feit dat antistoffen schade geven aan het endotheel. Ook zijn de peritubulaire capillairen vaak ontstoken.
        </p>
        <p>
          Dit ziekteproces wordt ook wel chronische actieve antistofgemedieerde rejectie genoemd, afgekort caABMR.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: wat maakt chronische rejectie anders dan acute rejectie?  Kort antwoord: chronische rejectie verloopt geleidelijk en wordt vooral aangedreven door donor-specifieke antistoffen, met progressief functieverlies van het transplantaat.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Behandeling en prognose</h3>
        <p className="mb-3">
          Voor caABMR bestaat geen (internationaal) breed geaccepteerde behandeling. In het Erasmus MC worden patiënten behandeld met:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>methylprednisolon;</li>
          <li>IVIG.</li>
        </ul>
        <p className="mb-3">
          De eerste resultaten van eigen onderzoek laten zien dat hiermee de snelheid van nierfunctieverlies in het eerste jaar na behandeling ongeveer halveert.
        </p>
        <p className="mb-2">Toch blijft de prognose slecht:</p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>ongeveer 60% transplantaatverlies binnen 4 jaar;</li>
          <li>bij respons op behandeling ongeveer 35% transplantaatverlies binnen 4 jaar;</li>
          <li>bij geen respons ongeveer 80% transplantaatverlies binnen 4 jaar.</li>
        </ul>
        <p>
          De kern blijft dus dat chronische rejectie een ernstig en progressief probleem is.
        </p>
      </div>
    </div>
  )
}
