import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doorlopen van deze module heb je inzicht in:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`wat goede voeding is;`}</Inline></li>
        <li><Inline>{`de associatie tussen ondervoeding en ziekte;`}</Inline></li>
        <li><Inline>{`de diagnostische mogelijkheden en behandelmogelijkheden bij ondervoeding en de rol die ziekte hierin speelt;`}</Inline></li>
        <li><Inline>{`hoe werk invloed kan hebben op gezondheid, en andersom;`}</Inline></li>
        <li><Inline>{`welke gezondheidsrisico’s spelen in de zorg;`}</Inline></li>
        <li><Inline>{`welke uitdagingen je als coassistent kunt tegenkomen en hoe je daar bewust mee omgaat.`}</Inline></li>
      </ul>
    </div>
  )
}
