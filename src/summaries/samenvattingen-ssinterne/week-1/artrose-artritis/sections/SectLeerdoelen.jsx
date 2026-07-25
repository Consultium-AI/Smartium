import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de belangrijkste gewrichten van hand en voet benoemen;`}</Inline></li>
        <li><Inline>{`herkennen welke gewrichten typisch betrokken zijn bij artrose, reumatoïde artritis (RA), seronegatieve artritis en kristalartropathieën;`}</Inline></li>
        <li><Inline>{`de basis van de pathofysiologie van artrose en artritis uitleggen;`}</Inline></li>
        <li><Inline>{`conventionele beeldvorming systematisch beoordelen op weke delen, gewrichtsruimten, botveranderingen en alignment;`}</Inline></li>
        <li><Inline>{`de belangrijkste radiologische kenmerken van artrose en verschillende vormen van artritis herkennen;`}</Inline></li>
        <li><Inline>{`typische standsafwijkingen en gewrichtsdeformaties benoemen.`}</Inline></li>
      </ul>
    </div>
  )
}
