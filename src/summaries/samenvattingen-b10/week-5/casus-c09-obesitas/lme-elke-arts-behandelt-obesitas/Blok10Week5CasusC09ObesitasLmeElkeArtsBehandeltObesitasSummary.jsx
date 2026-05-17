import { BookOpen, FileText } from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import { blok10Week5CasusC09ObesitasElkeArtsBehandeltObesitasPracticeHref } from './Blok10Week5CasusC09ObesitasElkeArtsBehandeltObesitasOefenvragen'
import Section01Titel from './sections/Section01Titel'
import Section02Tekst from './sections/Section02Tekst'

const tableOfContents = [
  { id: 'sect-01', title: 'LME39 – _Elke_arts_behandelt_obesitas', icon: FileText },
  {
    id: 'sect-02',
    title: '(Nog geen samenvatting.md — draai lme_summarize.py voor deze LME.)',
    icon: BookOpen,
  },
]

const Blok10Week5CasusC09ObesitasLmeElkeArtsBehandeltObesitasSummary = () => (
  <SummaryLayout
    title="Elke arts behandelt obesitas"
    moduleKind="lme"
    description="(Nog geen samenvatting.md — draai lme_summarize.py voor deze LME.)"
    caseLabel="Week 5 · Casus C09: Obesitas"
    blokLabel="Blok 10"
    practiceLink={blok10Week5CasusC09ObesitasElkeArtsBehandeltObesitasPracticeHref}
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Section01Titel />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Section02Tekst />
    </section>
  </SummaryLayout>
)

export default Blok10Week5CasusC09ObesitasLmeElkeArtsBehandeltObesitasSummary
