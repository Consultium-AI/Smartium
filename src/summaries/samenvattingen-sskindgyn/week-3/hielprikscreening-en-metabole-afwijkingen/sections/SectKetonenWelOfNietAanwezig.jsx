import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ketonen: wel of niet aanwezig?`}</Inline></SubHeading>
      <PBody text={`Tijdens vasten hoort het lichaam ketonen te maken. Als er bij hypoglycemie **geen of te weinig ketonen** zijn, is dat een afwijkende bevinding. Dan spreek je van een **non-ketotische hypoglycemie**.`} />
      <p className="leading-relaxed"><Inline>{`Dat past bij een beperkt aantal oorzaken:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een defect in de **ketogenese**;`}</Inline></li>
        <li><Inline>{`een stoornis in de **vetzuuroxidatie**;`}</Inline></li>
        <li><Inline>{`**hyperinsulinisme**, waarbij de vetafbraak wordt geremd.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij hyperinsulinisme wordt insuline ten onrechte geproduceerd. Insuline hoort juist alleen hoog te zijn in gevoede toestand. Het werkt tegengesteld aan glucagon en remt lipolyse, vetzuuroxidatie, glycogenolyse, gluconeogenese en ketogenese. Als insuline meetbaar is tijdens hypoglycemie, wijst dat op hyperinsulinisme, tenzij het bloedmonster kort na glucose-toediening is afgenomen.`}</Inline></p>
    </div>
  )
}
