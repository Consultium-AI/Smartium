import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de drie belangrijkste anatomische vlakken benoemen en hun belang voor oriëntatie in radiologische beelden uitleggen;`}</Inline></li>
        <li><Inline>{`de juiste anatomische richtingstermen toepassen bij het beschrijven van radiologische beelden;`}</Inline></li>
        <li><Inline>{`de fundamentele principes van röntgen, CT, MRI en echografie uitleggen;`}</Inline></li>
        <li><Inline>{`de belangrijkste klinische toepassingen van deze modaliteiten benoemen;`}</Inline></li>
        <li><Inline>{`de belangrijkste voor- en nadelen van röntgen, CT, MRI en echografie benoemen;`}</Inline></li>
        <li><Inline>{`uitleggen waarom een cor-thorax-ratio niet betrouwbaar is te meten op de AP-röntgenopname van de thorax;`}</Inline></li>
        <li><Inline>{`het belang van verschillende contrastfasen bij een CT-scan toelichten;`}</Inline></li>
        <li><Inline>{`een T1-gewogen en T2-gewogen MRI-opname herkennen en de belangrijkste verschillen benoemen.`}</Inline></li>
      </ul>
    </div>
  )
}
