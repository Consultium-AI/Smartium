import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Overgevoeligheidsreacties op geneesmiddelen`}</Inline></SubHeading>
      <PBody text={`Overgevoeligheidsreacties zijn reacties waarbij het lichaam **ongewoon sterk reageert** op een geneesmiddel. Deze reacties kunnen verschillende vormen aannemen. In de praktijk worden ze vaak ingedeeld in **allergische** en **niet-allergische** reacties.`} />
    </div>
  )
}
