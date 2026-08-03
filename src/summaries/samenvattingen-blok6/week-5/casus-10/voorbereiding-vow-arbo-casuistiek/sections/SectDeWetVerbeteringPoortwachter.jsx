import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De Wet Verbetering Poortwachter`}</Inline></SubHeading>
      <PBody text={`De **Wet Verbetering Poortwachter (WVP)** is bedoeld om langdurig ziekteverzuim terug te dringen door **tijdige signalering** en **snelle aanpak van problemen**. Werkgever en werknemer hebben hierin allebei verplichtingen. De bedrijfsarts speelt daarbij een belangrijke rol.`} />
      <SubHeading><Inline>{`Belangrijke stappen in het verzuimtraject`}</Inline></SubHeading>
      <DataTable rows={[["Moment", "Stap", "Inhoud"], ["Dag 1", "Ziekmelding", "Werknemer meldt zich zo snel mogelijk ziek bij de werkgever"], ["Week 6", "Probleemanalyse", "Bedrijfsarts beoordeelt wat werknemer nog wel en niet kan"], ["Week 8", "Plan van aanpak", "Werkgever en werknemer maken afspraken over re-integratie"], ["Week 52", "Eerstejaarsevaluatie", "Evaluatie van het eerste ziektejaar, vaak met arbeidsdeskundig onderzoek"], ["Week 88", "Brief UWV", "Werknemer krijgt informatie over WIA-aanvraag"], ["Week 91", "Eindevaluatie", "Stand van zaken van de re-integratie, met actueel oordeel van de bedrijfsarts"]]} />
      <p className="leading-relaxed"><Inline>{`De probleemanalyse en het plan van aanpak zijn dus centrale onderdelen van de WVP. Daarna volgen evaluatiemomenten, en richting het einde van het tweede ziektejaar wordt toegewerkt naar de WIA-beoordeling.`}</Inline></p>
    </div>
  )
}
