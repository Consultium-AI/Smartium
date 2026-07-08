import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na deze module kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`uitleggen hoe een gestructureerde motorische observatie wordt uitgevoerd;`}</Inline></li>
        <li><Inline>{`het verschil benoemen tussen kwantiteit en kwaliteit van bewegen;`}</Inline></li>
        <li><Inline>{`kwalitatieve kenmerken van goede motoriek benoemen en herkennen;`}</Inline></li>
        <li><Inline>{`motorische mijlpalen van het eerste levensjaar benoemen.`}</Inline></li>
      </ul>
    </div>
  )
}
