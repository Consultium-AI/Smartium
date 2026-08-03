import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Succesfactoren en valkuilen bij implementatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het maken van een plan is niet eenvoudig. Hoe verder je nadenkt, hoe meer obstakels je tegenkomt. Toch is het belangrijk om niet te stoppen bij de moeilijkheden, maar juist stap voor stap verder te bouwen.`}</Inline></p>
    </div>
  )
}
