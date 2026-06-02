import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Von Willebrandziekte type 2N`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een belangrijk onderscheid is dat een vrouw in de familie ook draagster kan zijn, of dat er sprake kan zijn van **von Willebrandziekte type 2N**. Daarbij bindt VWF niet goed aan factor VIII, waardoor factor VIII sneller wordt afgebroken. Dit kan lijken op milde hemofilie A, omdat de factor VIII-waarde laag is terwijl de VWF-waarden normaal kunnen zijn.`}</Inline></p>
    </div>
  )
}
