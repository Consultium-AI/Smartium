import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Medicamenteuze behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De ontsteking behandelen is de basis van de medicamenteuze therapie.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Bij acute HP** zijn corticosteroïden de eerste keuze. Zij remmen de ontsteking en verminderen klachten.`}</Inline></li>
        <li><Inline>{`**Bij steroïdresistente of chronische gevallen** kunnen immunosuppressiva worden overwogen, zoals mycofenolaatmofetil en azathioprine.`}</Inline></li>
        <li><Inline>{`**Bij chronische HP met fibrose** kunnen antifibrotische middelen worden ingezet.`}</Inline></li>
      </ul>
    </div>
  )
}
