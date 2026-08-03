import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Voor- en nadelen van CT`}</Inline></SubHeading>
      <PBody text={`**Voordelen**`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`snel;`}</Inline></li>
        <li><Inline>{`ideaal voor acute situaties;`}</Inline></li>
        <li><Inline>{`hoge resolutie en veel detail;`}</Inline></li>
        <li><Inline>{`reconstructie in andere vlakken mogelijk;`}</Inline></li>
        <li><Inline>{`goed voor bot én weke delen;`}</Inline></li>
        <li><Inline>{`korte scantijd.`}</Inline></li>
      </ul>
      <PBody text={`**Nadelen**`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hogere stralingsdosis dan gewone röntgen;`}</Inline></li>
        <li><Inline>{`minder goed weke delen contrast dan MRI;`}</Inline></li>
        <li><Inline>{`jodiumhoudend contrast kan bijwerkingen geven, vooral bij slechte nierfunctie of contrastallergie.`}</Inline></li>
      </ul>
    </div>
  )
}
