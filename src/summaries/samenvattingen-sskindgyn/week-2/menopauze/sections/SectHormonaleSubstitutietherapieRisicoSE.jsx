import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hormonale substitutietherapie: risico’s en contra-indicaties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hormonale substitutietherapie, kortweg HST, heeft duidelijke contra-indicaties.`}</Inline></p>
      <SubHeading><Inline>{`Absolute contra-indicaties`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`mammacarcinoom in de voorgeschiedenis;`}</Inline></li>
        <li><Inline>{`trombose en/of longembolie nu of in de voorgeschiedenis;`}</Inline></li>
        <li><Inline>{`ernstige leverfunctiestoornissen.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Relatieve contra-indicaties`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ernstige of instabiele astma bronchiale;`}</Inline></li>
        <li><Inline>{`epilepsie of migraine;`}</Inline></li>
        <li><Inline>{`galblaas- of galsteenklachten.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Het gebruik van synthetische progestagenen verhoogt het risico op mammacarcinoom. Daarom moet HST zorgvuldig worden afgewogen. Voor verdere verdieping worden de Million Women Study en de Women’s Health Initiative genoemd, samen met latere reacties daarop.`}</Inline></p>
    </div>
  )
}
