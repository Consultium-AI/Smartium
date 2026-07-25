import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof moet je in staat zijn om sepsis te herkennen en de diagnose te stellen op basis van het klinisch beeld. Je leert de belangrijkste verwekkers van verschillende infecties die tot sepsis kunnen leiden benoemen, inclusief toxine-gemedieerde sepsis in de differentiaaldiagnose. Ook moet je aanvullende diagnostiek kunnen voorstellen, een bloedkweek correct kunnen afnemen en begrijpen hoe die in het microbiologielab verwerkt wordt. Verder hoort erbij dat je antibiotische therapie kunt kiezen volgens het lokale SWAB-beleid.`}</Inline></p>
    </div>
  )
}
