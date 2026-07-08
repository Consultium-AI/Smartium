import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Kernboodschap voor de praktijk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een vrouw in de fertiele levensfase met buikpijn geldt eigenlijk altijd:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`sluit een EUG uit;`}</Inline></li>
        <li><Inline>{`doe een zwangerschapstest.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat is de belangrijkste eerste stap. Daarna bepaal je met anamnese, lichamelijk onderzoek, HCG en echografie hoe waarschijnlijk een EUG is en of er direct behandeling nodig is.`}</Inline></p>
    </div>
  )
}
