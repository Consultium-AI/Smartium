import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De nier filtert bloed in de glomerulus en verwerkt het filtraat daarna in de tubulus. De glomerulaire filtratiebarrière bestaat uit glycocalyx, gefenestreerd endotheel, basaalmembraan, podocytenvoetjes en de ruimte van Bowman. Ladingselectiviteit zit vooral bij glycocalyx en endotheel, grootte-selectiviteit vooral bij de filtratiespleet tussen de podocyten. In de tubulus worden water, zouten, glucose, aminozuren, bicarbonaat en andere stoffen op een segment-specifieke manier teruggeresorbeerd of gesecreteerd. De proximale tubulus doet de meeste reabsorptie, de lis van Henle bouwt de osmotische gradiënt op, de distale tubulus zorgt voor fijnafstelling en de verzamelbuis bepaalt onder hormonale invloed de uiteindelijke urine.`}</Inline></p>
    </div>
  )
}
