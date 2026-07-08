import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na deze module moet je de normale baring kunnen herkennen en de vier tijdperken van de baring kunnen benoemen. Je moet begrijpen wat er gebeurt in het ontsluitingstijdperk en het uitdrijvingstijdperk, hoe je beoordeelt of een vrouw in partu is, en hoe je de voortgang van de baring bewaakt. Ook moet je de begrippen vaginaal toucher volgens POVIAS, indaling volgens de vlakken van Hodge, inwendige spildraai en uitwendige spildraai kunnen uitleggen. Verder is het belangrijk dat je weet wat je doet bij een niet-vorderende baring en hoe de geboorte van het kind en de placenta bij een normale bevalling verlopen.`}</Inline></p>
    </div>
  )
}
