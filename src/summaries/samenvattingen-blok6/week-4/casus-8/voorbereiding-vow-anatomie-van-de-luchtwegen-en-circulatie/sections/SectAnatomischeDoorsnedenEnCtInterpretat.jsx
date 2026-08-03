import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anatomische doorsneden en CT-interpretatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Anatomische doorsneden helpen om de ligging van organen en structuren beter te begrijpen. Dat is belangrijk voor het lezen van CT- en MRI-beelden. Op een axiale doorsnede ter hoogte van T4 zijn onder andere de aortaboog, de vena cava superior, de trachea, de vena azygos en de oesophagus te herkennen. De vena azygos maakt daarbij normaal een oversteek van dorsaal naast de oesophagus naar de meer ventraal gelegen vena cava superior.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Er bestaat ook een anatomische variatie in het verloop van de vena azygos, die bij 0,3 tot 1% van de mensen voorkomt. Dan ligt de vena azygos meer lateraal aangelegd. Het overstekende deel snijdt dan door de lobus superior van de rechter long, waardoor een extra kwab ontstaat: de lobus v. azygos.`}</Inline></p>
    </div>
  )
}
