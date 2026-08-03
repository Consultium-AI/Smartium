import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Foetale echografie`}</Inline></SubHeading>
      <PBody text={`Echografie wordt veel gebruikt in de verloskunde. Daarbij kan de **CRL** worden gemeten: de **Crown-Rump Length**, oftewel de **kruin-stuitlengte**. Hiermee kun je de zwangerschapsduur nauwkeurig bepalen, vooral in het eerste trimester.`} />
    </div>
  )
}
