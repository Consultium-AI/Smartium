import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Aldosteron en de nier`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Aldosteron is een hormoon dat in de nier zorgt voor natriumretentie en kaliumexcretie. Dat betekent dat de nier meer natrium terugresorbeert naar het lichaam en meer kalium uitscheidt in de urine. Omdat water natrium volgt, leidt dit tot meer vochtretentie en dus tot een hoger circulerend volume.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dit is een belangrijk deel van het bloeddrukverhogende effect van het RAAS. Als het RAAS actief is, probeert het lichaam dus letterlijk zout en water vast te houden.`}</Inline></p>
    </div>
  )
}
