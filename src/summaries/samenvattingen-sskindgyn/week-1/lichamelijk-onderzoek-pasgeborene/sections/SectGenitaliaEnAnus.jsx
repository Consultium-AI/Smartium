import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Genitalia en anus`}</Inline></SubHeading>
      <PBody text={`Bij de genitalia is het belangrijk om het **geslacht nauwkeurig te identificeren**. Dat kan soms lastig zijn, vooral bij congenitale afwijkingen zoals **hypo- of epispadie** of **clitorisvergroting**.`} />
      <p className="leading-relaxed"><Inline>{`Bij jongens let je op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`of de testikels zijn ingedaald;`}</Inline></li>
        <li><Inline>{`de pigmentatie van het scrotum.`}</Inline></li>
      </ul>
      <PBody text={`Scrotumpigmentatie kan een aanwijzing zijn voor het **adrenogenitaal syndroom**.`} />
      <PBody text={`Bij de anus controleer je of deze **doorgankelijk** is en of de **sfincter intact** is.`} />
    </div>
  )
}
