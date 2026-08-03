import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat gebeurt waar in de glomerulus?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De filtratiebarrière heeft als doel om macromoleculen tegen te houden. De twee belangrijkste principes zijn dus ladingselectiviteit en grootte-selectiviteit, maar die zitten op verschillende plaatsen in de barrière. Dat is belangrijk om te onthouden: de nier gebruikt niet één enkele “muur”, maar meerdere lagen met elk hun eigen functie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als de filtratiebarrière beschadigd raakt, kan dat terug te zien zijn in de urine. Dan kan er bijvoorbeeld meer eiwitverlies optreden. In de kliniek is het daarom belangrijk om te kijken of er sprake is van verlies van grootte-selectiviteit of ladingselectiviteit, omdat dat iets kan zeggen over het type afwijking.`}</Inline></p>
    </div>
  )
}
