import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is nodig voor thuismeten?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor thuismeten zijn twee dingen essentieel: meetapparatuur voor de patiënt en een digitaal platform of een app om de metingen door te geven.`}</Inline></p>
    </div>
  )
}
