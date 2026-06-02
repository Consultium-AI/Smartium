import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Lokale en systemische behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij milde psoriasis wordt vaak lokaal behandeld. Als dat onvoldoende werkt, komen systemische middelen in beeld, waaronder biologicals.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Hoe werken biologicals bij psoriasis?`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Biologicals zijn **eiwitmoleculen** die via injectie worden gegeven en heel gericht onderdelen van het immuunsysteem blokkeren. Ze remmen cytokinen zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**TNF-α**`}</Inline></li>
        <li><Inline>{`**IL-17**`}</Inline></li>
        <li><Inline>{`**IL-23**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daardoor nemen ontsteking, schilfering en plaques af. Ze zijn gericht en effectief.`}</Inline></p>
    </div>
  )
}
