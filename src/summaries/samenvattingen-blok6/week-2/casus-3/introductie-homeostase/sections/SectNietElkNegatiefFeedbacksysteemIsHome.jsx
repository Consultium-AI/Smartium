import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Niet elk negatief feedbacksysteem is homeostatisch`}</Inline></SubHeading>
      <PBody text={`Een belangrijk punt is dat niet elk negatief feedbacksysteem automatisch homeostatisch is. De **pupilreflex** is bijvoorbeeld wel een negatief feedbacksysteem, maar geen homeostatisch gereguleerd systeem volgens de 5 kenmerken.`} />
      <p className="leading-relaxed"><Inline>{`Dus:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`alle homeostatische systemen zijn negatieve feedbacksystemen`}</Inline></li>
        <li><Inline>{`maar niet alle negatieve feedbacksystemen zijn homeostatische systemen`}</Inline></li>
      </ul>
    </div>
  )
}
