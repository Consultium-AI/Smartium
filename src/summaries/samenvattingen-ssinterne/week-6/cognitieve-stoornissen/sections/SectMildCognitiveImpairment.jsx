import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Mild cognitive impairment`}</Inline></SubHeading>
      <PBody text={`Bij **Mild Cognitive Impairment (MCI)** zijn er cognitieve stoornissen die ernstiger zijn dan verwacht op basis van leeftijd en opleiding, maar die nog niet interfereren met het dagelijks functioneren. MCI kan een voorstadium van dementie zijn. De kans op progressie is vooral in de eerste jaren aanwezig.`} />
    </div>
  )
}
