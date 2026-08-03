import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe bouw je HFrEF-medicatie op?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De vier pijlers zijn in studies getest op streefdoseringen. Juist bij die doseringen is het maximale effect op sterfte en heropnames aangetoond. Daarom probeer je de medicatie stap voor stap op te bouwen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De algemene aanpak is:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`start laag;`}</Inline></li>
        <li><Inline>{`verhoog geleidelijk, meestal om de 1–2 weken;`}</Inline></li>
        <li><Inline>{`let op bloeddruk, hartfrequentie, nierfunctie en elektrolyten;`}</Inline></li>
        <li><Inline>{`verhoog niet bij hypotensie, bradycardie of verslechtering van de nierfunctie.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 2. Monitoring per medicatiegroep`}</Inline></SubHeading>
      <DataTable rows={[["Groep", "Waar let je op?"], ["RAAS-remmer", "Bloeddruk, nierfunctie, kalium"], ["β-blokker", "Hartfrequentie, moeheid, hypotensie"], ["MRA", "Kalium, creatinine"], ["SGLT2-remmer", "Bloeddruk, dehydratieklachten"]]} />
      <p className="leading-relaxed"><Inline>{`Lisdiuretica horen hier ook bij, maar die worden vooral aangepast op basis van klachten, gewicht en diurese.`}</Inline></p>
    </div>
  )
}
