import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ontstaan van artrose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij artrose gaat het proces grofweg zo:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`eerst ontstaat **kraakbeenverlies**`}</Inline></li>
        <li><Inline>{`daarna reageert het onderliggende bot`}</Inline></li>
        <li><Inline>{`vervolgens zie je botveranderingen zoals osteofyten, sclerose en cysten`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Primaire artrose is vooral geassocieerd met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**leeftijd**`}</Inline></li>
        <li><Inline>{`**mechanische belasting**`}</Inline></li>
        <li><Inline>{`**overgewicht**`}</Inline></li>
      </ul>
    </div>
  )
}
