import { FileText, Info } from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Section01BrondocumentTitel from './sections/Section01BrondocumentTitel'
import Section02BrondocumentMededeling from './sections/Section02BrondocumentMededeling'

const tableOfContents = [
  { id: 'sect-01', title: 'LME44 – _Lipiden_lipoproteinen_metabole_dysregulatie', icon: FileText },
  {
    id: 'sect-02',
    title: '(Nog geen samenvatting.md — draai lme_summarize.py voor deze LME.)',
    icon: Info,
  },
]

const Blok10Week5CasusC10DmType2LmeLipidenLipoproteinenMetaboleDysregulatieSummary = () => (
  <SummaryLayout
    title="Lipiden, lipoproteinen en metabole dysregulatie"
    moduleKind="lme"
    caseLabel="Week 5 · Casus C10: DM type 2"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Section01BrondocumentTitel />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Section02BrondocumentMededeling />
    </section>
  </SummaryLayout>
)

export default Blok10Week5CasusC10DmType2LmeLipidenLipoproteinenMetaboleDysregulatieSummary
