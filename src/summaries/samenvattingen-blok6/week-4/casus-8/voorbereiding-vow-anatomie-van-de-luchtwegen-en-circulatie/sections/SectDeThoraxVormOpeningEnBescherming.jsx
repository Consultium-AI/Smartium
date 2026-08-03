import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De thorax: vorm, opening en bescherming`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De thorax heeft de vorm van een korf en is het breedst ter hoogte van de achtste ribben. De thorax beschermt de longen en het hart, maar ook de bovenste buikorganen en de nieren. Bovenaan is de thorax open via de bovenste apertura. Daardoor lopen onder andere de oesophagus, trachea, grote vaten en enkele zenuwen naar binnen en buiten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een klein deel van de longen, de apex pulmonis, ligt boven de eerste rib. Dat laat zien dat de longtop hoger reikt dan je misschien op het eerste gezicht zou verwachten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Twee belangrijke zenuwen treden de thorax binnen in de buurt van de arteria carotis communis: de nervus vagus en de nervus phrenicus. De nervus vagus is hier de zenuw die meer betrokken is bij de luchtweg- en viscerale innervatie, terwijl de nervus phrenicus vooral van belang is voor het diafragma.`}</Inline></p>
    </div>
  )
}
