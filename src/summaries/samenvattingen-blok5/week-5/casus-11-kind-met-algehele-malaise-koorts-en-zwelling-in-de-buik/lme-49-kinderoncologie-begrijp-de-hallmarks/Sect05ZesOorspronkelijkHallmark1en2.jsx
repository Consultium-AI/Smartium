export default function Sect05ZesOorspronkelijkHallmark1en2() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De zes oorspronkelijke kenmerken</h2>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">1. Aanhoudende groeisignalen</h3>
      <p>
        Kankercellen kunnen zichzelf voorzien van groeifactoren. Groeifactoren zijn kleine eiwitten die cellen aanzetten tot
        delen. Normale cellen delen alleen wanneer ze van buitenaf een signaal krijgen. Kankercellen kunnen dit deels zelf
        sturen.
      </p>
      <p>
        Dat doen ze op twee manieren. Ten eerste kunnen ze veel eigen groeifactoren produceren. Ten tweede kunnen ze extra
        groeifactorreceptoren op hun celoppervlak maken, waardoor ze gevoeliger worden voor groeisignalen.
      </p>
      <p>Zo zorgen kankercellen ervoor dat het delingsproces voortdurend actief blijft.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">2. Groeiremmende signalen ontwijken</h3>
      <p>
        Normale cellen reageren op remmende signalen van naburige cellen. Wanneer cellen te dicht op elkaar zitten, wordt
        deling afgeremd. Dit heet contactinhibitie. Kankercellen zijn daar ongevoelig voor.
      </p>
      <p>
        Ook verliezen kankercellen vaak tumorsuppressor-eiwitten, zoals p53 en RB. Deze eiwitten zorgen normaal juist voor
        remming van groei of deling wanneer er iets misgaat. Wanneer ze niet meer goed werken, verdwijnt een belangrijke
        bescherming tegen ongecontroleerde celdeling.
      </p>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-950 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtsvraag:</strong> Wat gebeurt er als p53 uitvalt?
          </p>
          <p className="mt-2">
            <strong className="text-amber-950 dark:text-amber-50">Mini-antwoord:</strong>{' '}
            Dan kan de cel minder goed stoppen of
          afbreken bij DNA-schade, waardoor kankercellen makkelijker blijven overleven.
        </p>
      </div>
    </div>
  )
}
