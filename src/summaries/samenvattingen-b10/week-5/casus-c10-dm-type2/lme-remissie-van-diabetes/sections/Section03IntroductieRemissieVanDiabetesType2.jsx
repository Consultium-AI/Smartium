import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        <Inline>{`Introductie: remissie van diabetes type 2`}</Inline>
      </h3>
      <p>
        <Inline>{`Bij diabetes type 2 is remissie in sommige gevallen mogelijk. Dat is vooral haalbaar in de eerste jaren na de diagnose, maar het kan ook later nog voorkomen. In deze stof staan drie manieren centraal waarmee remissie kan worden bereikt: **leefstijl**, **medicatie** en **bariatrische chirurgie**. Bij alle drie speelt **gewichtsverlies** een grote rol. Gewichtsverlies kan niet alleen helpen bij remissie, maar ook zorgen voor een betere kwaliteit van leven en een lager cardiovasculair risico.`}</Inline>
      </p>
      <p>
        <Inline>{`Een belangrijk uitgangspunt is dat je bij de behandeling van diabetes type 2 verder moet kijken dan alleen de glucosewaarden. Ook factoren zoals BMI, ziekte-ernst, restfunctie van de β-cellen, nierfunctie, cardiovasculair risico en motivatie van de patiënt spelen mee.`}</Inline>
      </p>
    </div>
  )
}
