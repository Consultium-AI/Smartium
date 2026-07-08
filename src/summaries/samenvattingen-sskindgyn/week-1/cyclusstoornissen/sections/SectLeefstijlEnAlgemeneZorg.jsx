import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leefstijl en algemene zorg`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Vrouwen met POI hebben niet alleen een verhoogd risico op osteoporose, maar mogelijk ook op cardiovasculaire morbiditeit en mortaliteit. Daarom is een gezonde leefstijl extra belangrijk.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat betekent:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`niet roken;`}</Inline></li>
        <li><Inline>{`gezond eten;`}</Inline></li>
        <li><Inline>{`voldoende lichaamsbeweging;`}</Inline></li>
        <li><Inline>{`voldoende calcium innemen, bijvoorbeeld via 4 of 5 zuivel- of kaasproducten per dag.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Beweging waarbij de botten worden belast, stimuleert botaanmaak. Lopen of wandelen helpt bijvoorbeeld tegen osteoporose; zwemmen niet.`}</Inline></p>
    </div>
  )
}
