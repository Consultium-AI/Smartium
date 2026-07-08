import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Lichamelijk onderzoek bij verdenking op endometriose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij lichamelijk onderzoek kunnen verschillende bevindingen passen bij endometriose. Bij inspectie in speculo kunnen blauw doorschemerende laesies in de vagina zichtbaar zijn. Bij vaginaal toucher let je op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`verminderde mobiliteit van de uterus;`}</Inline></li>
        <li><Inline>{`pijn bij gynaecologisch onderzoek;`}</Inline></li>
        <li><Inline>{`stugge sacro-uteriene ligamenten;`}</Inline></li>
        <li><Inline>{`een vergroot ovarium, bijvoorbeeld door een endometrioom.`}</Inline></li>
      </ul>
    </div>
  )
}
