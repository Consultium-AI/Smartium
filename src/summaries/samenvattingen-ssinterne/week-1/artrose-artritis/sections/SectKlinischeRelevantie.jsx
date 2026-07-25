import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische relevantie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De verdeling van afwijkingen over de gewrichten helpt je om een goede differentiaaldiagnose te maken. Vooral in handen en voeten is dit heel waardevol. Ook op een röntgenfoto is het belangrijk om systematisch te kijken naar weke delen, gewrichtsruimten, botveranderingen en alignment. Zo herken je sneller patronen die passen bij artrose, RA, seronegatieve artritis of jicht.`}</Inline></p>
    </div>
  )
}
