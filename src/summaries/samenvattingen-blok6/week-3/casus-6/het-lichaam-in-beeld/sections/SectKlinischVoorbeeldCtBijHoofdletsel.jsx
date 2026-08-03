import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinisch voorbeeld: CT bij hoofdletsel`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij ernstig hoofdletsel is CT vaak het eerste onderzoek. Vaak wordt ook de nek meegescand om een nekwervelfractuur uit te sluiten. CT geeft snel informatie over:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bloedingen in of rond de hersenen;`}</Inline></li>
        <li><Inline>{`schedelfracturen;`}</Inline></li>
        <li><Inline>{`fracturen van de cervicale wervelkolom;`}</Inline></li>
        <li><Inline>{`zwelling of midline shift van hersenweefsel.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat is klinisch belangrijk, omdat deze informatie direct invloed heeft op de behandeling en levensreddend kan zijn.`}</Inline></p>
    </div>
  )
}
