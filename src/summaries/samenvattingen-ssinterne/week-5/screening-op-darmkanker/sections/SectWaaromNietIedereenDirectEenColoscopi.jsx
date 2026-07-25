import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom niet iedereen direct een coloscopie?`}</Inline></SubHeading>
      <PBody text={`Hoewel coloscopie de beste sensitiviteit en specificiteit heeft, is het niet de gekozen bevolkingsonderzoekstest. De belangrijkste reden is dat de **deelname te laag** zou zijn. Een bevolkingsonderzoek heeft alleen zin als veel mensen meedoen. Als deelname laag is, daalt de incidentie en mortaliteit op populatieniveau niet voldoende.`} />
      <PBody text={`Dus: een ideale test is niet genoeg; **deelname is essentieel**.`} />
    </div>
  )
}
