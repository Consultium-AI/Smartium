import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na deze samenvatting kun je bij een jonge vrouw met acute buikpijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een goede anamnese, lichamelijk onderzoek en aanvullende diagnostiek benoemen;`}</Inline></li>
        <li><Inline>{`een differentiaaldiagnose opstellen van buikpijn bij een vrouw;`}</Inline></li>
        <li><Inline>{`de urgentie van een extra-uteriene graviditeit (EUG) herkennen;`}</Inline></li>
        <li><Inline>{`de behandeling van een EUG benoemen.`}</Inline></li>
      </ul>
    </div>
  )
}
