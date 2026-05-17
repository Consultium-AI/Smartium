import FormulaBlock from '../FormulaBlock'

export default function Sect08Meervoudige() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Meervoudige logistische regressie
      </h2>
      <p>
        In de praktijk wordt een uitkomst vaak bepaald door meerdere factoren tegelijk. Dan gebruik je{' '}
        <strong className="text-slate-900 dark:text-slate-100">meervoudige logistische regressie</strong>:
      </p>
      <FormulaBlock>
        {String.raw`\[
\ln\left(\frac{p}{1-p}\right)=b_0+b_1X_1+b_2X_2+\dots+b_kX_k
\]`}
      </FormulaBlock>
      <p>
        Elke coëfficiënt geeft dan het effect van één variabele{' '}
        <strong className="text-slate-900 dark:text-slate-100">
          onder de voorwaarde dat de andere variabelen gelijk blijven
        </strong>
        .
      </p>
      <p>
        Dat is belangrijk bij <strong className="text-slate-900 dark:text-slate-100">confounding</strong>: een derde factor
        kan een verband tussen twee variabelen vertekenen. Door meerdere variabelen tegelijk op te nemen, corrigeer je daarvoor.
      </p>
      <p>Voorbeeld:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>rookgedrag, leeftijd en geslacht kunnen allemaal samenhangen met GORZ</li>
        <li>
          BMI kan dan als primaire variabele in het model staan, terwijl geslacht, roken en leeftijd als confounders worden
          meegenomen
        </li>
      </ul>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Interpretatie in een meervoudig model</h3>
      <p>
        Als de OR voor variabele <span className="font-mono text-[0.95em]">{'\\(X_1\\)'}</span> gelijk is aan 1,5, dan
        betekent dat dat de odds op de uitkomst met 50% toenemen per eenheid stijging van{' '}
        <span className="font-mono text-[0.95em]">{'\\(X_1\\)'}</span>,{' '}
        <strong className="text-slate-900 dark:text-slate-100">terwijl de andere variabelen constant blijven</strong>.
      </p>
      <p>Voorbeeld uit een meervoudig model op GORZ-data:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>BMI: OR 1,13</li>
        <li>geslacht: OR 1,59</li>
        <li>roken: OR 2,14</li>
        <li>leeftijd: OR 1,04</li>
      </ul>
      <p>Hier is BMI nog steeds significant, met een 95%-BI dat volledig boven 1 ligt.</p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Praktische aandachtspunten</h3>
      <p>Er zijn ook een paar praktische beperkingen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Multicollineariteit</strong>: als voorspellers sterk met
          elkaar samenhangen, worden standaardfouten groot en wordt het moeilijk om te zien welke variabele echt
          verantwoordelijk is.
        </li>
        <li>Dit kun je controleren met de <strong className="text-slate-900 dark:text-slate-100">VIF</strong>.</li>
        <li>Een model kan dan instabiel worden.</li>
      </ul>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Complete separatie</h3>
      <p>
        Soms is er bijna niets meer te schatten. Dat heet{' '}
        <strong className="text-slate-900 dark:text-slate-100">complete separation</strong>: één voorspeller splitst de
        uitkomst perfect op.
      </p>
      <p>Voorbeeld:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>alle rokers hebben GORZ</li>
        <li>geen enkele niet-roker heeft GORZ</li>
      </ul>
      <p>
        Dan loopt een coëfficiënt in principe naar oneindig en worden standaardfouten extreem groot. Software kan dan
        waarschuwingen geven, zoals dat convergentie niet is bereikt.
      </p>
      <p>Mogelijke oplossingen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>categorieën samenvoegen</li>
        <li>een variabele verwijderen</li>
        <li>
          een penalized methode gebruiken, zoals <strong className="text-slate-900 dark:text-slate-100">Firth’s penalized likelihood</strong>
        </li>
      </ul>
    </div>
  )
}
