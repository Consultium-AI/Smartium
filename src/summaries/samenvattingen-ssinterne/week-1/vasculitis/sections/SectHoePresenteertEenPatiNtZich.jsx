import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe presenteert een patiënt zich?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Kleine-vatenvasculitis geeft vaak klachten op meerdere orgaansystemen. Denk aan longklachten, nierafwijkingen, KNO-klachten, gewrichtsklachten en soms huid- of zenuwverschijnselen. Juist die combinatie van klachten moet je alert maken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een patiënt kan bijvoorbeeld beginnen met hoesten, kortademigheid en hemoptoë. Dat lijkt eerst op een infectie, maar als daar later neusklachten, gewrichtsklachten en nierafwijkingen bij komen, moet je verder denken dan alleen een longinfectie.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom is hemoptoë zo belangrijk?
**Mini-antwoord:** omdat het kan passen bij ernstige longbetrokkenheid, maar ook bij een systeemziekte of maligniteit.`} />
    </div>
  )
}
