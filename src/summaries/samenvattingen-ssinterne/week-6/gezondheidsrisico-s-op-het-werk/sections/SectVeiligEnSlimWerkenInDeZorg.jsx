import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Veilig en slim werken in de zorg`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de zorg zijn ook andere praktische maatregelen belangrijk. Denk aan tilliften in het plafond in plaats van losse tilliften, zodat de belasting voor medewerkers afneemt. Verder helpt het om de werkplek aan te passen, de patiënt zoveel mogelijk zelf te laten doen en de patiënt zo dicht mogelijk bij de medewerker te plaatsen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij besmettingsrisico’s zijn voorzorgsmaatregelen zoals waarschuwingsborden, speciale afvalzakken, nitrilhandschoenen en protocolair afhalen van beddengoed belangrijk. Bij een spill moet het gebied worden afgebakend, de noodset worden gebruikt en moet er met twee medewerkers worden gewerkt. Kennis van het protocol en oefenen zijn daarbij essentieel.`}</Inline></p>
    </div>
  )
}
