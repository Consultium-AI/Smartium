import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Embryonale ontwikkeling van het hart`}</Inline></SubHeading>
      <PBody text={`Het hart ontstaat al in de **eerste 6 tot 8 weken** van de embryonale ontwikkeling. In deze vroege fase moeten meerdere stappen goed verlopen.`} />
      <PBody text={`Eerst fuseren twee mesodermale buizen tot één rechte hartbuis, de **heart tube**. Daarna maakt deze buis een lus, het zogenaamde **looping**. Hierdoor komt de toekomstige ligging van de atria en ventrikels vast te liggen. Vervolgens volgt de **septatie**: het hart wordt verdeeld in kamers door de vorming van tussenschotten, en ook de hartkleppen ontwikkelen zich. Oorspronkelijk heeft het hart één uitgaand bloedvat, de **truncus arteriosus**. Later splitst dit zich in de **aorta** en de **pulmonaalarterie**.`} />
      <p className="leading-relaxed"><Inline>{`Een aangeboren hartafwijking ontstaat dus wanneer er in één of meerdere van deze ontwikkelingsstappen iets misgaat.`}</Inline></p>
    </div>
  )
}
