import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Renaal`}</Inline></SubHeading>
      <PBody text={`Bij **renale** oorzaken zit het probleem in de nier zelf. Denk aan:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**vasculair**: trombo-embolie, stenose, trombotische micro-angiopathie;`}</Inline></li>
        <li><Inline>{`**glomerulonefritis**;`}</Inline></li>
        <li><Inline>{`**tubulair/interstitieel**: acute tubulusnecrose (ATN), tubulo-interstitiële nefritis (TIN);`}</Inline></li>
        <li><Inline>{`**verzamelbuizen**: obstructie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`ATN heeft veel mogelijke oorzaken, waaronder:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ischemie;`}</Inline></li>
        <li><Inline>{`renale vaatafsluiting;`}</Inline></li>
        <li><Inline>{`nefrotoxische medicatie;`}</Inline></li>
        <li><Inline>{`pigmentletsel;`}</Inline></li>
        <li><Inline>{`kristalletsel;`}</Inline></li>
        <li><Inline>{`metabole oorzaken.`}</Inline></li>
      </ul>
    </div>
  )
}
