import FormulaBlock from '../FormulaBlock'

export default function Sect07ToetsenBetrouwbaarheid() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Toetsen en betrouwbaarheidsintervallen</h2>
      <p>Na het schatten van een model wil je weten of een effect echt is of op toeval berust.</p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Wald-toets</h3>
      <p>
        De <strong className="text-slate-900 dark:text-slate-100">Wald-toets</strong> bekijkt of een coëfficiënt significant
        verschilt van nul.
      </p>
      <p>De toetsingsgrootheid is:</p>
      <FormulaBlock>
        {String.raw`\[
Z=\frac{\beta}{SE(\beta)}
\]`}
      </FormulaBlock>
      <p>In een voorbeeld met BMI is:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-mono text-[0.95em]">{'\\(b = 0{,}12\\)'}</span>
        </li>
        <li>
          <span className="font-mono text-[0.95em]">{'\\(OR = 1{,}13\\)'}</span>
        </li>
        <li>
          <span className="font-mono text-[0.95em]">{'\\(p < 0{,}001\\)'}</span>
        </li>
      </ul>
      <p>Dat betekent dat het verband tussen BMI en GORZ statistisch significant is.</p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Betrouwbaarheidsinterval</h3>
      <p>
        Voor de interpretatie kijk je bij voorkeur naar het{' '}
        <strong className="text-slate-900 dark:text-slate-100">95%-betrouwbaarheidsinterval van de OR</strong>.
      </p>
      <p>Als het 95%-BI de waarde <strong className="text-slate-900 dark:text-slate-100">1,0 niet bevat</strong>, is het effect statistisch significant.</p>
      <p>Voor BMI is bijvoorbeeld:</p>
      <FormulaBlock>
        {String.raw`\[
OR=1{,}12 \quad (95\%-BI: 1{,}07-1{,}19)
\]`}
      </FormulaBlock>
      <p>Dat interval ligt volledig boven 1, dus het effect is significant.</p>
      <p>Voor het berekenen van het interval geldt:</p>
      <FormulaBlock>
        {String.raw`\[
BI_{OR}=e^{\beta \pm 1{,}96\cdot SE}
\]`}
      </FormulaBlock>
      <p>Een smal interval betekent meer precisie; een breed interval betekent meer onzekerheid.</p>
      <p>
        Belangrijk: een effect kan statistisch significant zijn, maar inhoudelijk toch klein. Kijk daarom altijd ook naar de
        grootte van de OR en naar de klinische relevantie.
      </p>
    </div>
  )
}
