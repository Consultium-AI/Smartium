import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Welke aanvullende onderzoeken helpen?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Om de differentiaaldiagnose te versmallen kun je laboratoriumonderzoek aanvragen, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bloedbeeld;`}</Inline></li>
        <li><Inline>{`CRP;`}</Inline></li>
        <li><Inline>{`zwangerschapstest;`}</Inline></li>
        <li><Inline>{`urinesediment.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bloedgroep, leverfunctie, nierfunctie en stolling zijn hier niet de eerste onderzoeken om de differentiaaldiagnose te versmallen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Laboratoriumonderzoek bij acute buikpijn`}</Inline></SubHeading>
      <DataTable rows={[["Wel zinvol", "Waarom"], ["Bloedbeeld", "Geeft informatie over anemie en infectie"], ["CRP", "Helpt bij inschatten van ontsteking"], ["Zwangerschapstest", "Essentieel om EUG te herkennen"], ["Urinesediment", "Helpt bij urineweginfectie of niersteen"]]} />
    </div>
  )
}
