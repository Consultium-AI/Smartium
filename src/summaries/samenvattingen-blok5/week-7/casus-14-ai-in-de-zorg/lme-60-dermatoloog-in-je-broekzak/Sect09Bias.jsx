export default function Sect09Bias() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Bias: een belangrijk probleem bij algoritmen</h2>
      <p>
        Een algoritme kan scheef uitkomen door bias. Bias betekent dat de uitkomst onjuist wordt doordat het systeem
        tijdens training een voorkeur heeft geleerd voor bepaalde factoren die niet de bedoeling waren.
      </p>
      <p>Bij huidkanker-apps kunnen verschillende vormen van bias meespelen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold text-slate-900 dark:text-slate-100">huidkleur</span>
          <br />
          Veel data zijn afkomstig van mensen met een lichte huid. Daardoor werken veel algoritmen minder goed op
          gepigmenteerde huid.
        </li>
        <li>
          <span className="font-semibold text-slate-900 dark:text-slate-100">behaarde huid of tatoeages</span>
          <br />
          Behaarheid en tatoeages kunnen de beoordeling verstoren, zeker als ze vlak bij de huidafwijking zitten.
        </li>
        <li>
          <span className="font-semibold text-slate-900 dark:text-slate-100">objecten naast het plekje</span>
          <br />
          Een liniaal naast een moedervlek kan het algoritme misleiden, omdat het systeem dat object als relevant kan
          zien. In een voorbeeld leidde dat ertoe dat het algoritme bijna zeker dacht aan een melanoom, omdat bij veel
          foto’s van melanomen ook een liniaal zichtbaar was om de diameter vast te leggen.
        </li>
      </ul>
      <p>
        Bias is dus niet alleen een theoretisch probleem, maar iets dat de praktijk echt kan beïnvloeden.
      </p>
    </div>
  )
}
