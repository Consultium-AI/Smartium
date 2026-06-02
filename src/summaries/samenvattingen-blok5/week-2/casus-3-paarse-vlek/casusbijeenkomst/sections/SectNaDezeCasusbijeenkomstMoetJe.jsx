import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Na deze casusbijeenkomst moet je:`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een kind of jongere met paarse vlekjes of verkleuringen op de huid systematisch kunnen benaderen;`}</Inline></li>
        <li><Inline>{`onderscheid kunnen maken tussen een vasculitis en een bloedingsprobleem;`}</Inline></li>
        <li><Inline>{`weten welke anamnese, lichamelijk onderzoek en aanvullende bepalingen daarbij belangrijk zijn;`}</Inline></li>
        <li><Inline>{`de histopathologische kenmerken van een vasculitis kunnen herkennen;`}</Inline></li>
        <li><Inline>{`de basis van diagnostiek, follow-up en behandeling van melanoom kunnen uitleggen;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`begrijpen hoe stadium, sentinel node, satellietlaesies en metastasen de prognose en behandeling van melanoom bepalen.`}</Inline></p>
    </div>
  )
}
