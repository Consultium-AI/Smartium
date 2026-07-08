import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Cijfers en betekenis van perinatale sterfte`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Nederland kent jaarlijks ongeveer 175.000 bevallingen. Het merendeel eindigt gelukkig met de geboorte van een gezond kind, maar toch overlijden er jaarlijks ongeveer 1600 tot 1700 kinderen rondom de geboorte.`}</Inline></p>
      <PBody text={`De perinatale sterfte in Nederland is in de afgelopen decennia gedaald, bijvoorbeeld van **11,7‰ in 2001** naar **9,1‰ in 2008**. Toch ligt Nederland in vergelijking met veel Europese landen nog steeds relatief hoog. Perinatale sterfte wordt daarom gezien als een belangrijke maat voor de kwaliteit van de zorg rondom zwangerschap en geboorte.`} />
      <PBody text={`In 2008 bestond de perinatale sterfte in Nederland voor ongeveer **70% uit doodgeboorte** en voor **30% uit vroeg neonatale sterfte**. Sterfte tijdens de baring is relatief gering.`} />
      <SubHeading><Inline>{`Tabel 1. Belangrijke cijfers rond perinatale sterfte`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Gegeven"], ["Perinatale sterfte 2001", "11,7‰"], ["Perinatale sterfte 2008", "9,1‰"], ["Aandeel doodgeboorte", "70%"], ["Aandeel vroeg neonatale sterfte", "30%"], ["Sterfte tijdens de baring", "ongeveer 0,5‰"]]} />
      <p className="leading-relaxed"><Inline>{`De daling van de perinatale sterfte in de vorige eeuw hangt samen met betere levensomstandigheden, vaccinatiebeleid, rhesus(D)-sensibilisatieprofylaxe en betere opvang van pasgeborenen direct na de geboorte.`}</Inline></p>
    </div>
  )
}
