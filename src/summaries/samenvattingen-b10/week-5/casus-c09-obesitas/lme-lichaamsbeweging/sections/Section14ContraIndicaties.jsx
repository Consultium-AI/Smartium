import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Contra-indicaties`}</Inline></h3>
      <p><Inline>{`Er zijn ook situaties waarin bariatrie niet passend is of in elk geval zorgvuldig moet worden overwogen. Belangrijke contra-indicaties zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`vastgestelde eetpathologie, vooral eetbuistoornis;`}</Inline></li>
      </ul>
      <p><Inline>{`psychiatrische en psychosociale variabelen, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ernstige depressie met vitale kenmerken;`}</Inline></li>
        <li><Inline>{`ernstige angststoornis;`}</Inline></li>
        <li><Inline>{`acute PTSS;`}</Inline></li>
        <li><Inline>{`(alcohol)verslaving;`}</Inline></li>
        <li><Inline>{`“rode fase” van burn-out;`}</Inline></li>
        <li><Inline>{`angst- en paniekklachten waarbij de stoornis het volhouden van een gezonde leefstijl belemmert;`}</Inline></li>
        <li><Inline>{`onvoldoende uitgebreid sociaal netwerk of verstandelijke beperking waardoor iemand niet zelfstandig gedrag kan bepalen.`}</Inline></li>
      </ul>
    </div>
  )
}
