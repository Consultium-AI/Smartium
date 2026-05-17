import FormulaBlock from '../FormulaBlock'

export default function Sect05LogitTransformatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        De logit-transformatie en de S-curve
      </h2>
      <p>
        Logistische regressie werkt met een <strong className="text-slate-900 dark:text-slate-100">S-curve</strong>, ook wel
        een <strong className="text-slate-900 dark:text-slate-100">sigmoïde curve</strong> genoemd. De kans{' '}
        <span className="font-mono text-[0.95em]">{'\\(p\\)'}</span> wordt niet rechtstreeks lineair gemodelleerd, maar via
        een transformatie.
      </p>
      <p>De logit is:</p>
      <FormulaBlock>
        {String.raw`\[
\ln\left(\frac{p}{1-p}\right)
\]`}
      </FormulaBlock>
      <p>
        Deze logit kan alle waarden aannemen van{' '}
        <span className="font-mono text-[0.95em]">{'\\(-\\infty\\)'}</span> tot{' '}
        <span className="font-mono text-[0.95em]">{'\\(+\\infty\\)'}</span>. Daardoor kun je er wél een lineair model op
        toepassen:
      </p>
      <FormulaBlock>
        {String.raw`\[
\ln\left(\frac{p}{1-p}\right)=b_0+b_1X
\]`}
      </FormulaBlock>
      <p>Daaruit volgt weer de formule voor de kans:</p>
      <FormulaBlock>
        {String.raw`\[
p=\frac{e^{b_0+b_1X}}{1+e^{b_0+b_1X}}
\]`}
      </FormulaBlock>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-3">
        <p className="text-slate-800 dark:text-amber-100 m-0">
          Aandachtsvraag: waarom is dit zo slim?
          <br />
          <strong className="text-slate-900 dark:text-amber-50">Mini-antwoord:</strong> omdat de logit alle waarden kan
          aannemen, terwijl de uiteindelijke kans na terugtransformatie netjes tussen 0 en 1 blijft.
        </p>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Waarom is dit belangrijk?</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          De relatie tussen voorspeller en <strong className="text-slate-900 dark:text-slate-100">log-odds</strong> is
          lineair.
        </li>
        <li>
          De kans zelf krijgt een <strong className="text-slate-900 dark:text-slate-100">S-vorm</strong>.
        </li>
        <li>
          Voor lage waarden van <span className="font-mono text-[0.95em]">{'\\(X\\)'}</span> nadert de kans 0, maar komt er
          nooit onder.
        </li>
        <li>
          Voor hoge waarden van <span className="font-mono text-[0.95em]">{'\\(X\\)'}</span> nadert de kans 1, maar komt er
          nooit boven.
        </li>
      </ul>
    </div>
  )
}
