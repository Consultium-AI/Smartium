import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de associaties tussen bepaalde systeemziekten en ANA benoemen;`}</Inline></li>
        <li><Inline>{`uitleggen wanneer ANA-bepaling zinvol is en wanneer niet;`}</Inline></li>
        <li><Inline>{`de belangrijkste ANA-patronen herkennen en koppelen aan bijpassende antistoffen en ziekten;`}</Inline></li>
        <li><Inline>{`begrijpen waarom indirecte immunofluorescentie de gouden standaard is voor ANA-bepaling;`}</Inline></li>
        <li><Inline>{`de diagnostische waarde van ANA plaatsen in het klinisch beeld;`}</Inline></li>
        <li><Inline>{`de diagnostische criteria van Morbus Sjögren, SLE en MCTD benoemen;`}</Inline></li>
        <li><Inline>{`de klinische relevantie van ANA-profielen bij systemische sclerose uitleggen;`}</Inline></li>
        <li><Inline>{`beredeneren hoe de pretestkans de waarde van een ANA-test beïnvloedt.`}</Inline></li>
      </ul>
    </div>
  )
}
