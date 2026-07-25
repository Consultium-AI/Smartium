import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Doel van de A`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de A gaat het om:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een **vrije luchtweg creëren en houden**;`}</Inline></li>
        <li><Inline>{`bij trauma ook om **stabilisatie van de cervicale wervelkolom**.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een bewusteloze patiënt heeft vaak een bedreigde luchtweg. Bij een patiënt met EMV ≤ 8 moet je extra alert zijn.`}</Inline></p>
    </div>
  )
}
