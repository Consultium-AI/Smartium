import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na deze e-module moet je de pathofysiologie van een pneumothorax kunnen uitleggen en de behandeling kunnen afstemmen op de oorzaak en de onderliggende situatie. Daarbij moet je onderscheid kunnen maken tussen een spontane pneumothorax, met als vormen primair en secundair, en een traumatische pneumothorax. Ook moet je een pneumothorax kunnen herkennen op een X-thorax.`}</Inline></p>
    </div>
  )
}
