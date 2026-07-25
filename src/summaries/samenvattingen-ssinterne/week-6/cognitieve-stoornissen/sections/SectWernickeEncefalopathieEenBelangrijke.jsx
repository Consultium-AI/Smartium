import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wernicke encefalopathie: een belangrijke verklaring`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de heer Pieterse valt de combinatie op van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`verwardheid;`}</Inline></li>
        <li><Inline>{`nystagmus;`}</Inline></li>
        <li><Inline>{`loopstoornis.`}</Inline></li>
      </ul>
      <PBody text={`Dat past bij de klassieke triade van **Wernicke encefalopathie**. Dit is een acuut neuropsychiatrisch syndroom door een tekort aan **thiamine (vitamine B1)**.`} />
    </div>
  )
}
