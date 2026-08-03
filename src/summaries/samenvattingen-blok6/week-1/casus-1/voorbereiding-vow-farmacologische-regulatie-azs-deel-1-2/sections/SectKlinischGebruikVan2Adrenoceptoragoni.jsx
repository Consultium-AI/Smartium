import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinisch gebruik van β2-adrenoceptoragonisten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`β2-adrenoceptoragonisten worden klinisch gebruikt bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`astma;`}</Inline></li>
        <li><Inline>{`dreigende vroeggeboorte.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een bekend voorbeeld is salbutamol, dat als inhalatiepreparaat wordt gebruikt.`}</Inline></p>
    </div>
  )
}
