import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`α1-adrenoceptorantagonisten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Blokkade van de α1-adrenoceptor geeft juist tegengestelde effecten:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`vasodilatatie van de bloedvaten;`}</Inline></li>
        <li><Inline>{`verlaging van de perifere weerstand;`}</Inline></li>
        <li><Inline>{`verlaging van de bloeddruk;`}</Inline></li>
        <li><Inline>{`relaxatie van de prostaat;`}</Inline></li>
        <li><Inline>{`opening van de urineblaassfincter.`}</Inline></li>
      </ul>
    </div>
  )
}
