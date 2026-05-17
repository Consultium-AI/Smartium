import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Voedingspatronen: onbewerkt, bewerkt en ultrabewerkt`}</Inline></h3>
      <p><Inline>{`Niet alleen losse voedingsmiddelen zijn belangrijk, maar vooral het **totale voedingspatroon**. In de stof komt duidelijk naar voren dat verschillende voedingspatronen effect hebben op zowel preventie als behandeling van diabetes.`}</Inline></p>
      <p><Inline>{`Tabel 1. Voedingspatronen en hun belangrijkste kenmerken`}</Inline></p>
      <DataTable rows={[["Voedingspatroon", "Kenmerken", "Belangrijk effect"], ["Onbewerkt of minimaal bewerkt voedingspatroon", "Veel groenten, fruit, volkorenproducten, peulvruchten en noten; weinig geraffineerde granen, rood/bewerkt vlees en suikerhoudende dranken", "Verlaagt het diabetesrisico"], ["Mediterraan dieet", "Veel groente, fruit, volkoren granen, peulvruchten, noten, zaden en olijfolie; vis en gevogelte; weinig rood vlees en bewerkte producten", "Vermindert risico op diabetes type 2 en hart- en vaatziekten"], ["(Very) low-calorie dieet", "Sterke calorierestrictie, vaak tijdelijk en met begeleiding", "Geeft gewichtsverlies, verbetering van HbA1c en soms remissie"], ["Koolhydraatbeperkt dieet", "Minder koolhydraten, soms streng keto", "Kan op korte termijn gewicht en HbA1c verbeteren"]]} />
    </div>
  )
}
