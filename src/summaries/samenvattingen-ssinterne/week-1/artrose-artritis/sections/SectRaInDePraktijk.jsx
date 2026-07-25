import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`RA in de praktijk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij RA zie je vaak:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`zwelling van de weke delen`}</Inline></li>
        <li><Inline>{`peri-articulaire osteopenie`}</Inline></li>
        <li><Inline>{`symmetrische gewrichtsruimteversmalling`}</Inline></li>
        <li><Inline>{`erosies`}</Inline></li>
        <li><Inline>{`in een later stadium subluxaties en deformiteiten`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Typische gewrichten zijn onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`MCP-gewrichten`}</Inline></li>
        <li><Inline>{`PIP-gewrichten`}</Inline></li>
        <li><Inline>{`pols`}</Inline></li>
        <li><Inline>{`MTP-5`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`RA geeft in principe geen DIP-afwijkingen.`}</Inline></p>
    </div>
  )
}
