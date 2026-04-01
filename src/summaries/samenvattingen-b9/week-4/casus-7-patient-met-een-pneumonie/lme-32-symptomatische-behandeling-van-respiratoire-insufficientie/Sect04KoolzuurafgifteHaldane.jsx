export default function Sect04KoolzuurafgifteHaldane() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Koolzuurafgifte en het Haldane-effect</h2>
      <p>
        Koolstofdioxide wordt op een andere manier vervoerd dan zuurstof. Na het afstaan van zuurstof aan de weefsels ontstaat een verhoogde bindingscapaciteit van gedeoxygeneerd hemoglobine voor koolstofdioxide. Dit heet het Haldane-effect.
      </p>
      <p>
        Een deel van de CO2 zit opgelost in het bloed, maar een groot deel wordt via koolzuuranhydrase omgezet in bicarbonaat en waterstofionen:
      </p>
      <p className="font-semibold text-slate-900 dark:text-slate-100 font-mono text-base">CO2 + H2O ⇄ H+ + HCO3-</p>
      <p>
        In de longen raakt hemoglobine weer geoxygeneerd, waardoor CO2 weer wordt afgestaan aan de bloedbaan. Omdat er in het bloed meer CO2 aanwezig is dan in de alveolus, diffundeert CO2 over de alveolocapillaire membraan en wordt het uitgeademd. Minder opgelost CO2 in het bloed zorgt er vervolgens voor dat bicarbonaat weer teruggaat naar water en CO2, waarna ook dat CO2 verder kan worden uitgeademd.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 text-sm text-amber-900 dark:text-amber-100 space-y-2">
        <p className="m-0">
          <span className="font-semibold">Aandachtsvraagje:</span>
          {' '}
          Waarom kun je CO2 in de longen uitademen?
        </p>
        <p className="m-0">
          <span className="font-semibold">Mini-antwoord:</span>
          {' '}
          Omdat de CO2-spanning in het bloed hoger is dan in de alveolus, waardoor CO2 diffundeert naar buiten.
        </p>
      </div>
    </div>
  )
}
