export default function Sect08ThymusPeriferieEnVraagjes() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="rounded-xl border border-sky-200/90 dark:border-sky-500/35 bg-sky-50/90 dark:bg-sky-950/45 p-5">
        <h3 className="text-base font-bold text-sky-900 dark:text-sky-200 mb-3">Aandacht-vraagje</h3>
        <p className="mb-3">
          Waarom is positieve selectie nodig vóór negatieve selectie echt betekenis krijgt?
        </p>
        <p>
          Omdat een T-cel eerst moet kunnen herkennen wat MHC is. Pas daarna kun je bepalen of die herkenning veilig
          zwak is of juist gevaarlijk sterk.
        </p>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        De thymus levert maar weinig rijpe T-cellen af
      </h3>
      <p>
        Hoewel er veel thymocyten in de thymus aanwezig zijn, verlaat uiteindelijk maar een klein deel het orgaan als
        rijpe, immunocompetente T-lymfocyt. Ongeveer 5% verlaat de thymus; de rest gaat dood door apoptose omdat de
        T-celreceptor niet goed functioneert of omdat de cel autoreactief blijkt.
      </p>
      <p>Dat maakt duidelijk hoe streng het selectieproces is. Alleen T-cellen die:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>eigen MHC kunnen herkennen,</li>
        <li>niet te sterk reageren op eigen antigenen,</li>
        <li>en dus potentieel bruikbaar én veilig zijn,</li>
      </ul>
      <p>mogen de periferie bereiken.</p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Perifere tolerantie: een extra veiligheidslaag
      </h3>
      <p>
        Ondanks centrale tolerantie kunnen toch autoreactieve B- en T-lymfocyten in de periferie terechtkomen. Daarom
        bestaat er ook perifere tolerantie.
      </p>
      <p>Bij perifere tolerantie worden dergelijke cellen functioneel uitgeschakeld of onderdrukt. Dat kan onder andere door:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          anergie: activatie blijft uit, bijvoorbeeld wanneer alleen BCR of TCR wordt gestimuleerd zonder voldoende
          costimulatie
        </li>
        <li>suppressie: regulatorische T-lymfocyten onderdrukken de respons</li>
        <li>uitblijven van T-lymfocytenhulp: vooral relevant voor B-lymfocyten</li>
      </ul>
      <p>
        Perifere tolerantie voorkomt dus dat cellen die aan centrale selectie ontsnapt zijn, alsnog auto-immuniteit
        veroorzaken.
      </p>

      <div className="rounded-xl border border-sky-200/90 dark:border-sky-500/35 bg-sky-50/90 dark:bg-sky-950/45 p-5">
        <h3 className="text-base font-bold text-sky-900 dark:text-sky-200 mb-3">Aandacht-vraagje</h3>
        <p className="mb-3">
          Wat is het belangrijkste verschil tussen centrale en perifere tolerantie?
        </p>
        <p>
          Centrale tolerantie vindt plaats tijdens de ontwikkeling in beenmerg of thymus. Perifere tolerantie grijpt
          later in, nadat lymfocyten al in de periferie aanwezig zijn.
        </p>
      </div>
    </div>
  )
}
