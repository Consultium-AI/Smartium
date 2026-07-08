import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom draait het hoofd?`}</Inline></SubHeading>
      <PBody text={`Het foetale hoofd is ovaal en het bekken is ook niet overal even breed. De bekkeningang is een dwarse ovaal en de bekkenuitgang een rechtopstaande ovaal. Daarom moet het hoofd draaien om goed door het bekken te passen. Die draai heet de **inwendige spildraai**.`} />
      <PBody text={`Daarna, als het hoofd geboren is, draaien ook de schouders mee. Dat heet de **uitwendige spildraai**. Je ziet dan aan het hoofd dat de schouders zich hebben gedraaid om door het bekken te passen.`} />
    </div>
  )
}
