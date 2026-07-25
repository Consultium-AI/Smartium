import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Interventies bij de E`}</Inline></SubHeading>
      <PBody text={`De patiënt moet zo veel mogelijk **toegedekt** blijven om afkoeling te voorkomen. Verwarm ook infuusvloeistoffen. Voor opwarming kan bijvoorbeeld een **Bair Hugger** worden gebruikt.`} />
    </div>
  )
}
