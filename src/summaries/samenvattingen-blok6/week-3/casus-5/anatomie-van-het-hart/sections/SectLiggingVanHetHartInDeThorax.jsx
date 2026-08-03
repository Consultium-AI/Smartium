import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ligging van het hart in de thorax`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het hart ligt boven het diafragma in het mediastinum, dus in de ruimte tussen de longen. Het ligt iets links van de middellijn en de apex wijst naar links.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De apex ligt ter hoogte van de vijfde intercostale ruimte links, midclaviculair. Het ventielvlak loopt schuin van de derde rib links naar de vijfde rib rechts. Dat zijn belangrijke oriëntatiepunten om de ligging van het hart in de thorax te begrijpen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ventrale van het hart liggen onder andere het sternum en het ribkraakbeen. Dorsaal liggen de oesofagus en de aorta. Caudaal ligt het diafragma.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** waarom is de apex klinisch zo handig als oriëntatiepunt?
**Mini-antwoord:** omdat je daarmee de ligging van het hart aan de borstwand kunt projecteren.`} />
    </div>
  )
}
