import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat zijn de uitkomsten?`}</Inline></SubHeading>
      <PBody text={`Van alle uitgenodigde mensen heeft ongeveer **5-6%** een positieve ontlastingstest. Van die groep ondergaat ongeveer **90%** een coloscopie. Bij mensen die een coloscopie krijgen vanwege een positieve FIT, blijkt ongeveer:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**8-10%** darmkanker te hebben;`}</Inline></li>
        <li><Inline>{`**40%** een advanced adenoom te hebben.`}</Inline></li>
      </ul>
      <PBody text={`Na enkele jaren wordt verwacht dat hierdoor zowel de incidentie als de sterfte aan darmkanker met ongeveer **50%** daalt.`} />
    </div>
  )
}
