import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <PBody text={`Na het doornemen van deze module kun je de **farmacodynamiek** en **farmacokinetiek** van **bètablokkers** beschrijven. Daarbij gaat het vooral om de verschillen tussen **metoprolol, atenolol en propranolol**, en om de klinische betekenis van hun selectiviteit en interacties.`} />
    </div>
  )
}
