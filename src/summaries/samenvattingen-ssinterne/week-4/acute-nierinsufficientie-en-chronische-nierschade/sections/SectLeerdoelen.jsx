import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de nierfunctie bepaling interpreteren;`}</Inline></li>
        <li><Inline>{`de definities van chronische nierschade en acute nierinsufficiëntie benoemen;`}</Inline></li>
        <li><Inline>{`symptomen en verschijnselen van nierinsufficiëntie herkennen;`}</Inline></li>
        <li><Inline>{`de belangrijkste oorzaken van nierinsufficiëntie benoemen;`}</Inline></li>
        <li><Inline>{`de essentiële diagnostiek bij nierinsufficiëntie benoemen en behandelen;`}</Inline></li>
        <li><Inline>{`specifiek beleid bij patiënten met acute nierinsufficiëntie maken;`}</Inline></li>
        <li><Inline>{`herkennen wanneer dialysebehandeling noodzakelijk is;`}</Inline></li>
        <li><Inline>{`risicogroepen voor acute nierinsufficiëntie herkennen.`}</Inline></li>
      </ul>
    </div>
  )
}
