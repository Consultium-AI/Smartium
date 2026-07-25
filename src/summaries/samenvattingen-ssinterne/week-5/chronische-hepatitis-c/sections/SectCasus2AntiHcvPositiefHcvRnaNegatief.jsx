import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casus 2: anti-HCV positief, HCV-RNA negatief`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een vrouw van 39 jaar heeft vermoeidheidsklachten en is vroeger een aantal weken geel geweest. Haar ALAT is normaal, anti-HCV is positief en HCV-RNA is negatief. Als HCV-RNA bij herhaling negatief blijft, past dit bij een doorgemaakte hepatitis C die spontaan is geklaard.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijk is dat iemand na spontane klaring niet beschermd is tegen een nieuwe infectie. Herinfectie blijft dus mogelijk. De vermoeidheidsklachten worden in dat geval niet verklaard door hepatitis C.`}</Inline></p>
    </div>
  )
}
