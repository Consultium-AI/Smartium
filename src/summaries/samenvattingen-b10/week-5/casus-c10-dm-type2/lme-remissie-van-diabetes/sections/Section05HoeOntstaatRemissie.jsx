import { Inline, PBody } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        <Inline>{`Hoe ontstaat remissie?`}</Inline>
      </h3>
      <p>
        <Inline>{`Remissie hangt sterk samen met het verminderen van de **metabole belasting** van het lichaam. Vooral een daling van de vetstapeling in **lever** en **pancreas** is belangrijk.`}</Inline>
      </p>
      <p>
        <Inline>{`Bij diabetes type 2 leidt een positieve energiebalans, zeker bij **spier-insulineresistentie**, tot een verhoogde bloedglucose. De lever neemt glucose op uit het bloed en slaat een deel op als vet. Normaal gesproken remt insuline de glucoseproductie van de lever. Bij toegenomen levervet ontstaat echter **hepatische insulineresistentie**: de lever blijft glucose produceren, ook als er genoeg insuline aanwezig is. Daardoor moet de pancreas extra insuline afgeven. Op termijn raakt de β-cel daarbij overbelast en neemt de functionele capaciteit af.`}</Inline>
      </p>
      <p>
        <Inline>{`Als iemand afvalt, daalt het vetgehalte in de lever. De lever wordt dan weer gevoeliger voor insuline, waardoor de **hepatische glucoseproductie** beter wordt afgeremd. Ook neemt de viscerale vetmassa af, waardoor de insulinegevoeligheid van spieren verbetert en glucose beter wordt opgenomen. Zo kan de glucosewaarde dalen en kan remissie optreden.`}</Inline>
      </p>
      <PBody
        text={`**Aandacht-vraagje:** Waarom werkt gewichtsverlies zo krachtig bij DM2?  
**Kort antwoord:** omdat minder vet in lever en pancreas zorgt voor betere insulinegevoeligheid en minder verstoring van de β-celfunctie.`}
      />
    </div>
  )
}
