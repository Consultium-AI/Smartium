import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`HFrEF`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`HFrEF staat voor heart failure with reduced ejection fraction. Hierbij is de ejectiefractie lager dan 40%. Het past bij systolische dysfunctie en verminderde contractiliteit. De linkerventrikel is vaak gedilateerd en de PV-loop laat een smaller en naar rechts verschoven patroon zien.`}</Inline></p>
    </div>
  )
}
