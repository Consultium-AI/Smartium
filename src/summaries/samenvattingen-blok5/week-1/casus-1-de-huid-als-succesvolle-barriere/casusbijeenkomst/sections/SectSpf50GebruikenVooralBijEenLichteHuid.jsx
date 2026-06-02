import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">Beschermende maatregelen</h4>
      <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-600">
        <ul className="list-disc pl-6 space-y-2.5">
          <li>
            <Inline>{`SPF 50+ gebruiken, vooral bij een lichte huid;`}</Inline>
          </li>
          <li>
            <Inline>{`uit de wind staan;`}</Inline>
          </li>
          <li>
            <Inline>{`handschoenen dragen;`}</Inline>
          </li>
          <li>
            <Inline>{`pet of beschermende kleding gebruiken;`}</Inline>
          </li>
          <li>
            <Inline>{`zo min mogelijk in contact komen met bijtende middelen;`}</Inline>
          </li>
          <li>
            <Inline>{`milde zeep gebruiken;`}</Inline>
          </li>
          <li>
            <Inline>{`binnen schuilen bij schadelijke omstandigheden;`}</Inline>
          </li>
          <li>
            <Inline>{`terugvettende middelen gebruiken;`}</Inline>
          </li>
          <li>
            <Inline>{`de huid hydrateren;`}</Inline>
          </li>
          <li>
            <Inline>{`letten op een gezonde leefstijl;`}</Inline>
          </li>
          <li>
            <Inline>{`zo nodig ander werk of een andere beroepsmatige aanpak overwegen.`}</Inline>
          </li>
        </ul>
      </div>
      <p className="leading-relaxed">
        <Inline>{`Deze maatregelen zijn bedoeld om de huidbarrière zo goed mogelijk te beschermen en verdere irritatie te voorkomen.`}</Inline>
      </p>
    </div>
  )
}
