import { BookOpen, FileWarning } from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Brondocumentkop from './Sect01Brondocumentkop'
import Sect02NogGeenSamenvatting from './Sect02NogGeenSamenvatting'

const Blok5Week4Casus7FlebologischeAandoeningenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'LME 31 – Flebologische aandoeningen (Veneuze insufficiëntie lymfoedeem lipoedeem Vaatmalformaties)', icon: BookOpen },
    {
      id: 'sect-02',
      title: '(Nog geen samenvatting.md — draai lme_summarize.py voor deze LME.)',
      icon: FileWarning,
    },
  ]

  return (
    <SummaryLayout
      title="Flebologische aandoeningen"
      description="(Veneuze insufficiëntie lymfoedeem lipoedeem Vaatmalformaties)"
      caseLabel="Week 4 · Casus 7: Zwelling van de lies en of een dik been"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Brondocumentkop />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02NogGeenSamenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week4Casus7FlebologischeAandoeningenSummary
