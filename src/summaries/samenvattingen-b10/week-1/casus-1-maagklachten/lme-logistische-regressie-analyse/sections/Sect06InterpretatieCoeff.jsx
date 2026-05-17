import FormulaBlock from '../FormulaBlock'

export default function Sect06InterpretatieCoeff() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Interpretatie van coëfficiënten</h2>
      <p>
        In een logistisch regressiemodel staat elke coëfficiënt <span className="font-mono text-[0.95em]">{'\\(b\\)'}</span>{' '}
        voor een effect op de <strong className="text-slate-900 dark:text-slate-100">log-odds</strong>. Door de exponent
        van <span className="font-mono text-[0.95em]">{'\\(b\\)'}</span> te nemen, krijg je de{' '}
        <strong className="text-slate-900 dark:text-slate-100">odds ratio</strong>:
      </p>
      <FormulaBlock>
        {String.raw`\[
OR=e^b
\]`}
      </FormulaBlock>
      <p>Dat maakt de interpretatie eenvoudiger.</p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Binaire voorspellers</h3>
      <p>
        Bij een binaire voorspeller, zoals roken{' '}
        <span className="font-mono text-[0.95em]">{'\\(1=\\) ja en \\(0=\\) nee'}</span>, kun je het effect als OR
        interpreteren.
      </p>
      <p>Voorbeeld:</p>
      <FormulaBlock>
        {String.raw`\[
\ln\left(\frac{p}{1-p}\right)= -0{,}9 + 0{,}67 \cdot \text{roken}
\]`}
      </FormulaBlock>
      <p>Dan is:</p>
      <FormulaBlock>
        {String.raw`\[
OR=e^{0{,}67}\approx 2
\]`}
      </FormulaBlock>
      <p>Dat betekent dat de odds op de uitkomst bij rokers twee keer zo groot zijn als bij niet-rokers.</p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Continue voorspellers</h3>
      <p>
        Bij een continue variabele, zoals leeftijd of BMI, betekent de OR de verandering per{' '}
        <strong className="text-slate-900 dark:text-slate-100">één eenheid toename</strong>.
      </p>
      <p>Voorbeeld:</p>
      <FormulaBlock>
        {String.raw`\[
\ln\left(\frac{p}{1-p}\right)= -2{,}8 + 0{,}05 \cdot \text{leeftijd}
\]`}
      </FormulaBlock>
      <p>Dan is:</p>
      <FormulaBlock>
        {String.raw`\[
OR=e^{0{,}05}=1{,}05
\]`}
      </FormulaBlock>
      <p>Dat betekent: per extra jaar leeftijd nemen de odds met 5% toe.</p>
      <p>
        Een ander voorbeeld is BMI met <span className="font-mono text-[0.95em]">{'\\(b=0{,}12\\)'}</span>. Dan is de OR{' '}
        <span className="font-mono text-[0.95em]">{'\\(e^{0{,}12}=1{,}13\\)'}</span>: per punt BMI nemen de odds op de
        uitkomst toe met 13%.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Voorbeeld kans berekenen</h3>
      <p>Met een model voor leeftijd:</p>
      <FormulaBlock>
        {String.raw`\[
\ln\left(\frac{p}{1-p}\right)= -2{,}8 + 0{,}05 \cdot \text{leeftijd}
\]`}
      </FormulaBlock>
      <p>
        Voor iemand van 50 jaar vul je 50 in, en dan bereken je de kans met de logistische formule. In het voorbeeld komt
        daar een kans van <strong className="text-slate-900 dark:text-slate-100">0,43</strong> uit: dus 43%.
      </p>
    </div>
  )
}
