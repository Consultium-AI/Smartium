import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinisch voorbeeld: MRI bij rugklachten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij aanhoudende lage rugpijn met uitstraling naar het been kan een MRI van de lumbale wervelkolom worden gemaakt. Daarmee kun je onder andere zien:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`of er een hernia is die op zenuwwortels drukt;`}</Inline></li>
        <li><Inline>{`of er sprake is van wervelkanaalstenose;`}</Inline></li>
        <li><Inline>{`of er andere afwijkingen zijn aan wervels, ruggenmerg of omliggende weefsels.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`MRI is hier vooral waardevol omdat het zachte weefsels heel gedetailleerd laat zien.`}</Inline></p>
    </div>
  )
}
