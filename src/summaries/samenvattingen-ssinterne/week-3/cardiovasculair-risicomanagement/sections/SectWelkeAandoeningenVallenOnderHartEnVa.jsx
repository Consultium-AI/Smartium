import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Welke aandoeningen vallen onder hart- en vaatziekten?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Onder hart- en vaatziekten worden hier vooral de atherosclerotische aandoeningen verstaan. Denk aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`coronair lijden, zoals myocardinfarct en angina pectoris;`}</Inline></li>
        <li><Inline>{`doorgemaakt TIA of herseninfarct;`}</Inline></li>
        <li><Inline>{`perifeer vaatlijden, zoals claudicatio intermittens of een aneurysma van de aorta abdominalis.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een hersenbloeding valt hier niet onder, omdat die een andere oorzaak heeft.`}</Inline></p>
    </div>
  )
}
