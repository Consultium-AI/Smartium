import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Voorbeelden van thuismonitoring`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ziekenhuizen bieden verschillende vormen van thuismonitoring aan. Bij hartfalen worden vaak bloeddruk, hartslagfrequentie en gewicht gemeten. Bij COPD krijgen patiënten meestal vragenlijsten. De instructies aan patiënten zijn belangrijk: bij hartfalen staat bijvoorbeeld dat de ingevulde waarden niet direct door het ziekenhuis worden gecontroleerd en dat de patiënt bij een spoedeisende vraag zelf telefonisch contact moet opnemen. Bij COPD staat juist dat het thuismonitoringsteam bij een afwijkende score, toename van klachten of een verzoek om contact binnen 24 uur contact opneemt, telefonisch of via een bericht in de app.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat laat zien dat thuismonitoring niet alleen gaat over meten, maar ook over duidelijke afspraken over wanneer er contact komt en wie actie moet ondernemen.`}</Inline></p>
    </div>
  )
}
