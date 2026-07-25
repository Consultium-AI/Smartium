import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Systematische beoordeling van conventionele beeldvorming`}</Inline></SubHeading>
      <PBody text={`Bij het beoordelen van röntgenfoto’s is een **vaste systematiek** belangrijk. Zo mis je minder snel kleine of onverwachte afwijkingen.`} />
      <p className="leading-relaxed"><Inline>{`De beoordeling gebeurt in vier stappen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Weke delen**`}</Inline></li>
        <li><Inline>{`**Gewrichtsruimten**`}</Inline></li>
        <li><Inline>{`**Veranderingen van het bot**`}</Inline></li>
        <li><Inline>{`**Alignment**`}</Inline></li>
      </ul>
    </div>
  )
}
