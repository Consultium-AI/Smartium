import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Herkennen op de X-thorax`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Op een X-thorax zie je bij een pneumothorax vaak een duidelijke lijn: de rand van de samengevallen long. Daarbuiten zie je geen longtekening meer, omdat daar alleen lucht in de pleuraholte zit. Een kleine pneumothorax kan apicaal zitten, terwijl een grote pneumothorax een totale collaps van een long kan geven.`}</Inline></p>
    </div>
  )
}
