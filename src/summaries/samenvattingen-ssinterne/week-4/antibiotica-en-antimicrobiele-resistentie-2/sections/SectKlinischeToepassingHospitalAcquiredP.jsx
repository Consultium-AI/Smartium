import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische toepassing: hospital acquired pneumonia`}</Inline></SubHeading>
      <PBody text={`Een pneumonie die ontstaat bij een patiënt die **minstens 48 uur in het ziekenhuis ligt**, heet een **hospital acquired pneumonia (HAP)**. Dat is iets anders dan community acquired pneumonia. De verwekkers zijn dan vaak **ziekenhuisflora**, meestal meer resistente gramnegatieve staven.`} />
      <PBody text={`Bij meneer L., die kort na een operatie in het ziekenhuis een pneumonie ontwikkelt, is dus sprake van HAP. De behandeling volgens de genoemde richtlijn is **piperacilline-tazobactam**.`} />
    </div>
  )
}
