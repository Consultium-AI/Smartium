import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na deze module kun je de anatomie van het hart beter herkennen en in gedachten ruimtelijk plaatsen. Je kunt de onderdelen van het hart benoemen, de grote vaten die erop aansluiten herkennen, en de ligging van het hart in de thorax beschrijven. Ook kun je de belangrijkste omliggende structuren in beeld brengen, zoals het pericardium, het hartskelet, de coronairvaten en het prikkelgeleidingssysteem. Daarnaast leer je hartanatomie herkennen in anatomische doorsneden en in klinische beelden, zoals CT-scans en angiografie.`}</Inline></p>
    </div>
  )
}
