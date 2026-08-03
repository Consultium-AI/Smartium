import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Effect van geneesmiddeleninteracties`}</Inline></SubHeading>
      <PBody text={`Een geneesmiddeleninteractie heeft vooral invloed op het **metabolisme** van een geneesmiddel. Dat kan op twee manieren:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het afbraakenzym, bijvoorbeeld een CYP-enzym, wordt geremd door competitie;`}</Inline></li>
        <li><Inline>{`of de aanmaak van het enzym wordt gestimuleerd, waardoor het geneesmiddel juist sneller wordt afgebroken.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Ook roken kan zo’n effect geven.`}</Inline></p>
      <PBody text={`Hierdoor kunnen **Cmax** en **T1/2** zowel omhoog als omlaag gaan. Het **Vd** verandert daarbij niet.`} />
    </div>
  )
}
