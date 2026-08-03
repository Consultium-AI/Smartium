import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Overleving`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De overleving na longtransplantatie is verbeterd, maar blijft lager dan bij andere solide orgaantransplantaties. Dat komt onder andere door:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de hoge en langdurige afweerremming,`}</Inline></li>
        <li><Inline>{`de voortdurende blootstelling van de long aan de buitenlucht,`}</Inline></li>
        <li><Inline>{`de kans op afstoting en infecties.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Gemiddelde cijfers zijn ongeveer:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`83-85% 1-jaars overleving`}</Inline></li>
        <li><Inline>{`73% 5-jaars overleving`}</Inline></li>
        <li><Inline>{`60% 10-jaars overleving`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 5. Globale uitkomsten na longtransplantatie`}</Inline></SubHeading>
      <DataTable rows={[["Uitkomst", "Kenmerk"], ["Longfunctie", "stijgt vaak snel in de eerste weken tot maanden"], ["Energie en activiteit", "na ongeveer 1 jaar vaak vergelijkbaar met gezonde volwassenen"], ["1-jaars overleving", "ongeveer 83-85%"], ["5-jaars overleving", "ongeveer 73%"], ["10-jaars overleving", "ongeveer 60%"]]} />
    </div>
  )
}
