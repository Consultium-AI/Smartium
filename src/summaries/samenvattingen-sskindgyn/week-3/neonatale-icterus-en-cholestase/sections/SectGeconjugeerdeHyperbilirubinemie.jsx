import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Geconjugeerde hyperbilirubinemie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij geconjugeerde hyperbilirubinemie moet je denken aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**neonatale hepatitis**`}</Inline></li>
        <li><Inline>{`infectie`}</Inline></li>
        <li><Inline>{`metabole aandoening`}</Inline></li>
        <li><Inline>{`endocriene aandoeningen`}</Inline></li>
        <li><Inline>{`cystic fibrosis`}</Inline></li>
        <li><Inline>{`**extra-hepatische galwegobstructie**`}</Inline></li>
        <li><Inline>{`galgangatresie`}</Inline></li>
        <li><Inline>{`compressie van buiten`}</Inline></li>
        <li><Inline>{`galstenen`}</Inline></li>
        <li><Inline>{`**intra-hepatische galgangafwijkingen**`}</Inline></li>
        <li><Inline>{`arteriohepatische dysplasie`}</Inline></li>
        <li><Inline>{`Zellweger-syndroom`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Geconjugeerde hyperbilirubinemie past dus meer bij een probleem met de galafvoer of leverfunctie dan bij pure hemolyse.`}</Inline></p>
    </div>
  )
}
