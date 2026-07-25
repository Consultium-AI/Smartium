import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Fysiologische FDG-opname`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Niet alle opname is afwijkend. Normale, fysiologische opname zie je onder andere in:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de **hersenen**`}</Inline></li>
        <li><Inline>{`de **ring van Waldeyer** zoals tonsillen en adenoïden`}</Inline></li>
        <li><Inline>{`het **myocard** variabel`}</Inline></li>
        <li><Inline>{`de **lever**`}</Inline></li>
        <li><Inline>{`de **milt**`}</Inline></li>
        <li><Inline>{`de **nieren**`}</Inline></li>
        <li><Inline>{`de **darmen** variabel`}</Inline></li>
        <li><Inline>{`de **urinewegen en blaas** door uitscheiding`}</Inline></li>
      </ul>
    </div>
  )
}
