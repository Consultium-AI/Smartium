import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`FISH en MYC`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij DLBCL is FISH belangrijk om een MYC-translocatie aan te tonen. Een MYC-translocatie en/of verhoogde MYC-eiwitexpressie hangt samen met een ongunstige prognose. Ongeveer 5 tot 15% van de patiënten met DLBCL heeft een MYC-translocatie. Deze translocatie gaat vaak samen met BCL2- en/of BCL6-translocaties. Dan spreekt men van double-hit of triple-hit lymfomen.`}</Inline></p>
    </div>
  )
}
