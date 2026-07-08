import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Vruchtbaarheidsproblemen worden eerst goed gedefinieerd en daarna systematisch onderzocht. Subfertiliteit betekent dat een zwangerschap na 1 jaar onbeschermde regelmatige gemeenschap uitblijft. De anamnese, het lichamelijk onderzoek en het aanvullende onderzoek richten zich vooral op ovulatie, tubapathologie en spermakwaliteit. De prognose hangt vooral af van de leeftijd van de vrouw en de duur van de kinderwens. Als de kans op spontane zwangerschap laag is, volgt een passende behandeling zoals IUI, ovulatie-inductie, IVF of ICSI.`}</Inline></p>
    </div>
  )
}
