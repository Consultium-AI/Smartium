import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beroepsziekten per beroep`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Sommige beroepsziekten passen vaker bij bepaalde beroepen. Zo zie je bijvoorbeeld:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bij een **loods**: surmenage of burn-out;`}</Inline></li>
        <li><Inline>{`bij een **kraanmachinist**: lawaaislechthorendheid en chronische aspecifieke rugpijn;`}</Inline></li>
        <li><Inline>{`bij een **bakker**: allergisch contacteczeem, beroepsastma en KANS;`}</Inline></li>
        <li><Inline>{`bij een **chirurg**: TBC, latexallergie en PTSS.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Ook kunnen beroepsziekten bij meerdere medische specialismen voorkomen. Zo komen burn-out, surmenage en depressie vooral bij de huisarts voor. PTSS kan zowel bij de huisarts als bij de chirurg voorkomen. Hepatitis B-risico is vooral relevant bij de chirurg door bloedcontact, en ook bij huisarts of patholoog. Subacute lage rugpijn en KANS komen vooral bij de chirurg voor door langdurige ongunstige houdingen. Latexallergie komt vooral bij de chirurg voor door het veel en lang dragen van handschoenen.`}</Inline></p>
    </div>
  )
}
