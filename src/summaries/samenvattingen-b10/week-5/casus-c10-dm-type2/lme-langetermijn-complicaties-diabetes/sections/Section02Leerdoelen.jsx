import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Leerdoelen`}</Inline></h3>
      <p><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`langetermijncomplicaties van diabetes mellitus verklaren op basis van pathofysiologische mechanismen;`}</Inline></li>
        <li><Inline>{`voorstellen doen voor preventie en monitoring van langetermijncomplicaties van diabetes.`}</Inline></li>
      </ul>
    </div>
  )
}
