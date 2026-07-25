import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Artrose in de praktijk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij artrose zie je vaak:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`gewrichtsspleetversmalling`}</Inline></li>
        <li><Inline>{`osteofyten`}</Inline></li>
        <li><Inline>{`subchondrale sclerose`}</Inline></li>
        <li><Inline>{`subchondrale cysten`}</Inline></li>
      </ul>
      <PBody text={`In de knie kan artrose leiden tot een standsafwijking. Bij forse versmalling van het laterale compartiment ontstaat **valgus**-stand, dus **x-knieën**. Dit heet ook **valgus-gonartrose**. De meer voorkomende variant is **varus-gonartrose**, waarbij vooral het mediale compartiment is aangedaan.`} />
    </div>
  )
}
