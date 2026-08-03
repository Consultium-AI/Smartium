import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De trachea, bronchiën en longen vormen samen een nauw verbonden systeem van luchtgeleiding en gasuitwisseling. Belangrijke anatomische relaties zijn die met de oesophagus, het hart, de grote vaten, het diafragma en de zenuwen in hals en thorax. De trachea is een stevige maar flexibele buis met kraakbeenringen en een dorsale spierwand. De bronchiaalboom vertakt verder tot aan de alveoli, terwijl de longen zelf zijn opgebouwd uit kwabben en segmenten. De thorax, pleura, mediastinum en diafragma bepalen samen de ligging en beweging van deze organen. Deze anatomie is klinisch belangrijk bij verslikken, luchtwegproblemen, intubatie, pneumothorax, pleurodese, infecties, tumoren en het beoordelen van X-thorax- en CT-beelden.`}</Inline></p>
    </div>
  )
}
