import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische beslisregel`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De klinische kansschatting gebeurt met een score op basis van anamnese en lichamelijk onderzoek.`}</Inline></p>
    </div>
  )
}
