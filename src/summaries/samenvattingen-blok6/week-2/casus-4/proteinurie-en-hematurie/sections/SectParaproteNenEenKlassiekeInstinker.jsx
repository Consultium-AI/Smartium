import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Paraproteïnen: een klassieke instinker`}</Inline></SubHeading>
      <PBody text={`Een belangrijk voorbeeld van eiwit in de urine zijn **paraproteïnen**, zoals bij multipel myeloom. De urinstick kan deze eiwitten missen, omdat hij vooral albumine detecteert.`} />
      <PBody text={`Als je paraproteïnen vermoedt, moet je ze dus **specifiek meten** of een **totaal eiwit/creatinine-ratio** bepalen. De totaal eiwitmeting pakt deze eiwitten wel mee, in tegenstelling tot de albumine-creatinine-ratio.`} />
    </div>
  )
}
