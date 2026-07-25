import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anatomie op CT`}</Inline></SubHeading>
      <PBody text={`Ook op CT moet je de normale thoraxanatomie herkennen. Belangrijke structuren zijn onder andere de **vena cava superior**, **aortaboog**, **trachea**, **slokdarm**, **scapula** en de hartkamers zoals het **rechteratrium**, **linkeratrium**, **rechterventrikel** en **linkerventrikel**.`} />
      <p className="leading-relaxed"><Inline>{`Het herkennen van deze structuren helpt je om de ligging van afwijkingen beter te begrijpen en om de beelden systematisch te lezen.`}</Inline></p>
    </div>
  )
}
