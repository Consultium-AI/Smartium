import { Microscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image24AntigenPresentatieSummary = ({ standalone = true }) => {
  const toc = [{ id: 'presentatie', title: 'Antigenpresentatie', icon: Microscope }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Antigenpresentatie"
      description="DC en macrofagen presenteren antigenen aan T- en B-cellen."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 24"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image24"
    >
      <section id="presentatie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Antigenpresentatie</h2>
        <p className="text-slate-700 mb-4">Dendritische cellen en macrofagen nemen vaccinantigenen op, migreren naar lymfeklieren en presenteren verwerkt antigeen aan T-cellen en intact antigeen aan B-cellen. Dit activeert het adaptieve immuunsysteem.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image24AntigenPresentatieSummary
