import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Motorisch onderzoek: wat hoort erbij?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het motorisch onderzoek bestaat uit meerdere onderdelen. In deze module ligt de nadruk vooral op observatie, maar het volledige onderzoek omvat ook andere onderdelen.`}</Inline></p>
      <DataTable rows={[["Tabel 1. Onderdelen van het motorisch onderzoek"], ["Observatie van kwantiteit en kwaliteit van bewegen", "Kijken of een kind motorische mijlpalen haalt en hoe het beweegt"], ["Tonusonderzoek", "Onderzoek van de spierspanning"], ["Neurologisch onderzoek", "Onder andere optrekken tot zit en reflexen"], ["Mobiliteit", "Beweeglijkheid van het kind"]]} />
      <p className="leading-relaxed"><Inline>{`Bij het optrekken tot zit let je bijvoorbeeld op hoe het hoofd meekomt en hoe actief de tonus van armen en benen is.`}</Inline></p>
    </div>
  )
}
