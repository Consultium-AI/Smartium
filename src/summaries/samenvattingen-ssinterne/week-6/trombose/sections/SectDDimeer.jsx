import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`D-dimeer`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`D-dimeren zijn afbraakproducten van fibrine. Ze kunnen verhoogd zijn bij trombose, maar ook bij andere situaties zoals infectie, inflammatie, sepsis, maligniteit, hogere leeftijd, zwangerschap en postoperatief zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een verhoogde D-dimeer is dus niet specifiek. Een lage D-dimeer heeft juist een hoge negatieve voorspellende waarde.`}</Inline></p>
    </div>
  )
}
