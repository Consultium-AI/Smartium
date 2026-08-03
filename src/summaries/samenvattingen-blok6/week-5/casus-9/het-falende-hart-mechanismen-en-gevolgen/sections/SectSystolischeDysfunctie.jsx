import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Systolische dysfunctie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij systolische dysfunctie is de contractiliteit van het hart verminderd. Het hart kan zich dan niet krachtig genoeg samentrekken om het bloed effectief uit te pompen. Daardoor blijft er meer bloed achter na de contractie, stijgt het eind-systolisch volume, daalt het slagvolume en daalt de ejectiefractie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In een druk-volumecurve zie je dan dat de lus naar rechts verschuift en smaller wordt. De ESPVR-lijn, die de systolische functie weerspiegelt, wordt vlakker. Dat betekent dat het hart bij eenzelfde volume minder druk kan opbouwen. Dit past bij verlies van inotropie, dus verlies van contractiekracht.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het lichaam probeert dit deels te compenseren via het Frank-Starling mechanisme. Meer vulling kan de contractiekracht tijdelijk vergroten, maar bij systolische dysfunctie is de contractiliteit zelf verlaagd, waardoor deze compensatie beperkt werkt. De eind-diastolische druk stijgt dan ook vaak mee.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Op langere termijn leidt systolische dysfunctie tot ventriculaire remodellering. De linkerventrikel wordt gedilateerd, de wand wordt relatief dunner en de kamer raakt volume-overbelast. Dit structurele veranderingsproces maakt het hart verder kwetsbaar.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Wat zie je bij systolische dysfunctie op de PV-loop?
**Mini-antwoord:** Een rechter verschuiving, een smallere lus, een hoger ESV en een vlakkere ESPVR-lijn.`} />
    </div>
  )
}
