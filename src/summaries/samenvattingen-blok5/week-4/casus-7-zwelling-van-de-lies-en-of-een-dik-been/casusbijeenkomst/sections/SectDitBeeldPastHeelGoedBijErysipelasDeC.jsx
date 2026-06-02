import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Dit beeld past heel goed bij erysipelas. De combinatie van:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`scherpe begrenzing,`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`roodheid,`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`warmte,`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`zwelling,`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`pijn,`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`en een duidelijke port d’entrée`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`maakt deze diagnose waarschijnlijk.`}</Inline></p>
    </div>
  )
}
