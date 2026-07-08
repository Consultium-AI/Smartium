import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij acute buikpijn bij een jonge vrouw moet je altijd aan een EUG denken. Een EUG is een zwangerschap buiten de baarmoeder, meestal in de tuba. Klachten kunnen bestaan uit buikpijn en vaginaal bloedverlies, maar in een vroeg stadium kan de patiënte ook nog weinig klachten hebben. Een ruptuur kan leiden tot hevig bloedverlies en shock.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De eerste stap is altijd een zwangerschapstest. Daarna kijk je verder met anamnese, lichamelijk onderzoek, HCG en echografie. Belangrijke alarmsignalen zijn buikpijn, positieve zwangerschapstest, geen intra-uteriene zwangerschap op echo, adnexale massa, vrij vocht, loslaatpijn en anemie. Bij verdenking op EUG verricht je geen vaginaal toucher. De behandeling kan expectatief, medicamenteus met methotrexaat of chirurgisch zijn, afhankelijk van de ernst en de bevindingen.`}</Inline></p>
    </div>
  )
}
