import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Distale tubulus`}</Inline></SubHeading>
      <PBody text={`De **distale tubulus** ligt in de nierschors, na de dikke lis van Henle. Hier vindt verdere fijnafstelling plaats van natrium- en chloride-reabsorptie. Ook wordt calciumreabsorptie hier gereguleerd onder invloed van **parathyroïdhormoon (PTH)**.`} />
      <PBody text={`Daarnaast speelt de distale tubulus een rol in de zuur-basebalans via **H⁺-secretie**. In dit segment zit ook de **macula densa**, die deel uitmaakt van het juxtaglomerulaire apparaat en betrokken is bij bloeddrukregulatie.`} />
    </div>
  )
}
