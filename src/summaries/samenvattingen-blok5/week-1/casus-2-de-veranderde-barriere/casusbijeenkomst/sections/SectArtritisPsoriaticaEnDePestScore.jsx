import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Artritis psoriatica en de PEST-score`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij psoriasis moet je altijd denken aan gewrichtsklachten. In deze casus zijn er signalen voor **artritis psoriatica**:`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`ochtendstijfheid`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`pijnlijke en mogelijk gezwollen vingers`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`moeite met fijne handelingen`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`nagelafwijkingen`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De **PEST-score** wordt gebruikt om te screenen op artritis psoriatica. Een score van **3 of hoger** is reden om de reumatoloog te betrekken.`}</Inline></p>
    </div>
  )
}
