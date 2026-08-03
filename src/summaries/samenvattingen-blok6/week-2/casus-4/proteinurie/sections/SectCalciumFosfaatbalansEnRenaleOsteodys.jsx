import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Calcium-fosfaatbalans en renale osteodystrofie`}</Inline></SubHeading>
      <PBody text={`Bij nierinsufficiëntie ontstaat vaak een probleem met de calcium- en fosfaatstofwisseling. Dit geeft vooral problemen in de bloedvaten, maar ook in de botten. Het geheel van botafwijkingen heet **renale osteodystrofie**.`} />
      <PBody text={`De nier activeert vitamine D. Als de nierfunctie achteruitgaat, daalt de actieve vitamine D-spiegel. Daardoor wordt in de darm minder calcium opgenomen en ontstaat **hypocalciëmie**. Tegelijk kan fosfaat minder goed worden uitgescheiden, waardoor **hyperfosfatemie** ontstaat. Fosfaat kan samen met calcium neerslaan en zo de calciumspiegel nog verder verlagen.`} />
      <PBody text={`De daling van calcium stimuleert de bijschildklieren om meer **PTH** af te geven. PTH kan invloed hebben op bloedvaten en botten. In de botten zorgt dit voor:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`minder mineralisatie`}</Inline></li>
        <li><Inline>{`meer botombouw`}</Inline></li>
      </ul>
      <PBody text={`Daardoor worden de botten brozer en kunnen ze makkelijker breken. De behandeling bestaat uit **actief vitamine D** en maatregelen om fosfaat te verlagen, bijvoorbeeld via dieet en medicatie.`} />
    </div>
  )
}
