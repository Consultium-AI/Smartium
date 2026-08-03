import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische betekenis van AF-detectie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Met een smartwatch kun je AF dus vrij nauwkeurig detecteren. Dat is klinisch relevant, omdat het opsporen van AF gevolgen kan hebben voor verdere beoordeling en behandeling.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Tegelijk wordt er in de evaluatie weinig verder uitgewerkt wat de bredere klinische implicaties precies zijn als AF bij iedereen met een smartwatch of fitness tracker gedetecteerd zou worden. De conclusie blijft daar beperkt tot de opmerking dat toekomstig onderzoek nodig is.`}</Inline></p>
    </div>
  )
}
