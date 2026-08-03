import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De kaliumbalans wordt strak gereguleerd omdat een kleine verandering in serumkalium al grote gevolgen kan hebben. Na een kaliumbelasting verschuift kalium eerst snel de cel in, vooral onder invloed van de Na-K-ATPase. Daarna scheidt de nier het overtollige kalium uit. Aldosteron, natriumreabsorptie via ENaC en de negatieve lading in het tubuluslumen zijn daarbij essentieel. De kaliumbalans hangt nauw samen met de zuur-basebalans, en de aldosteronparadox laat zien dat dezelfde hormonale prikkel in verschillende situaties toch een ander effect kan hebben.`}</Inline></p>
    </div>
  )
}
