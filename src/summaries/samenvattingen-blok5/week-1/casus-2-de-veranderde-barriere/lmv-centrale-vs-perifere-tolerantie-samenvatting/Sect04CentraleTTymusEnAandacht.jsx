export default function Sect04CentraleTTymusEnAandacht() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Centrale tolerantie van T-lymfocyten in de thymus</h3>
      <p>Bij T-lymfocyten gebeurt selectie in de thymus. Onrijpe T-cellen doorlopen daar een soort controleproces.</p>
      <p>
        In de cortex wordt gekeken of de T-cel überhaupt in staat is om met MHC te interacteren. Is er geen interactie, dan
        gaat de cel in apoptose. Is er een zwakke interactie, dan mag de cel verder: dit heet positieve selectie.
      </p>
      <p>
        Daarna volgt in de medulla een tweede, strengere controle. Daar presenteren onder andere dendritische cellen
        autoantigenen. Reageert een T-cel daar te sterk op, dan wordt hij verwijderd via negatieve selectie, opnieuw door
        apoptose. Dat is een kernmechanisme van centrale tolerantie.
      </p>
      <p>Een belangrijk punt uit deze clip is dus dat deletie centraal staat in centrale tolerantie.</p>
      <div className="rounded-xl border border-orange-200 dark:border-orange-700/50 bg-orange-50/90 dark:bg-orange-950/45 p-5 space-y-3">
        <p className="font-semibold text-slate-900 dark:text-slate-100">Korte aandachtvraag</p>
        <p>Waarom is een sterke interactie met autoantigenen in de thymus ongunstig?</p>
        <p className="font-semibold text-slate-900 dark:text-slate-100">Mini-antwoord</p>
        <p>
          Omdat zo’n T-cel later sterk tegen lichaamseigen structuren zou kunnen reageren en dus auto-immuniteit kan
          veroorzaken.
        </p>
      </div>
    </div>
  )
}
