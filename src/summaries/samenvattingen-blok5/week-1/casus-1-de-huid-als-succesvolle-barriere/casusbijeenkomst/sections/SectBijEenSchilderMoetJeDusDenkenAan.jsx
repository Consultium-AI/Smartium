import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Bij een schilder moet je dus denken aan:`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`oplosmiddelen;`}</Inline></li>
        <li><Inline>{`verf;`}</Inline></li>
        <li><Inline>{`veel handen wassen;`}</Inline></li>
        <li><Inline>{`zeep;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`andere bijtende middelen.`}</Inline></p>
    </div>
  )
}
