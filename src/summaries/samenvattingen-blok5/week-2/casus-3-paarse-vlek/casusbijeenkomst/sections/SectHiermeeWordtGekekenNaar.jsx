import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Hiermee wordt gekeken naar:`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de stollingscascade;`}</Inline></li>
        <li><Inline>{`het aantal bloedplaatjes;`}</Inline></li>
        <li><Inline>{`de functie van von Willebrand-factor;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`factor VIII, dat samenhangt met von Willebrand-factor.`}</Inline></p>
    </div>
  )
}
