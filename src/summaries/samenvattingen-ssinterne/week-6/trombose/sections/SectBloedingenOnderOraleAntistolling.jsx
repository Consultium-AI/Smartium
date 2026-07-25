import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bloedingen onder orale antistolling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ernstige bloedingen komen voor bij ongeveer 1% per jaar. Fatale bloedingen zijn zeldzaam, ongeveer 0,25%.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De kans op bloedingen is hoger bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hogere leeftijd;`}</Inline></li>
        <li><Inline>{`maligniteit;`}</Inline></li>
        <li><Inline>{`acenocoumarol vergeleken met fenprocoumon;`}</Inline></li>
        <li><Inline>{`VKA vergeleken met DOAC.`}</Inline></li>
      </ul>
    </div>
  )
}
