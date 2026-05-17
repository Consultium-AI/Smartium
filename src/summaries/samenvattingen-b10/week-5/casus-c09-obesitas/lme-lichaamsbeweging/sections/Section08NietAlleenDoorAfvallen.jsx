import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Niet alleen door afvallen`}</Inline></h3>
      <p><Inline>{`De werking van bariatrie is niet alleen het gevolg van gewichtsverlies. Er zijn ook endocriene veranderingen die leiden tot andere effecten in bijvoorbeeld pancreas en lever. Daarbij passen onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`verhoogd incretine-effect;`}</Inline></li>
        <li><Inline>{`meer GLP-1 en PYY;`}</Inline></li>
        <li><Inline>{`betere β-celoverleving;`}</Inline></li>
        <li><Inline>{`hogere postprandiale insuline;`}</Inline></li>
        <li><Inline>{`lagere nuchtere insuline;`}</Inline></li>
        <li><Inline>{`minder glucoseproductie door de lever;`}</Inline></li>
        <li><Inline>{`minder NASH;`}</Inline></li>
        <li><Inline>{`minder eetlust;`}</Inline></li>
        <li><Inline>{`meer glucose-opname en opslag;`}</Inline></li>
        <li><Inline>{`verbeterde insulinegevoeligheid.`}</Inline></li>
      </ul>
      <p><Inline>{`Er is ook een verhoogd risico op hypoglykemie door deze sterke hormonale veranderingen.`}</Inline></p>
    </div>
  )
}
