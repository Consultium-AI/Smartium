import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Astma: aanvullende diagnostiek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Astma geeft een variabele expiratoire luchtwegobstructie, die meestal reversibel is, spontaan of met medicatie. Tussen aanvallen door kan de longfunctie normaal of bijna normaal zijn. Dat maakt astma anders dan COPD, waar de obstructie chronischer en minder reversibel is.`}</Inline></p>
      <SubHeading><Inline>{`Bronchodilatatorrespons`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij deze test meet je eerst FEV1 en FVC. Daarna krijgt de patiënt een luchtwegverwijder, zoals salbutamol of ipratropiumbromide. Na 15 tot 30 minuten wordt de spirometrie herhaald.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als de FEV1 duidelijk toeneemt, past dat bij reversibele obstructie en dus bij astma.`}</Inline></p>
      <SubHeading><Inline>{`Bronchiale hyperreactiviteitstest`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als er geen duidelijke obstructie is, kun je de prikkelbaarheid van de luchtwegen testen met een provocatietest. Daarbij inhaleert de patiënt oplopende doses van een stof zoals methacholine of histamine. Na elke dosis wordt de FEV1 gemeten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De PD20 is de provocatiedosis waarbij de FEV1 met 20% daalt ten opzichte van de uitgangswaarde. Een lage dosis die al een duidelijke daling veroorzaakt, wijst op bronchiale hyperreactiviteit en ondersteunt de diagnose astma.`}</Inline></p>
    </div>
  )
}
