import { Pill } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10CalcineurineRemmersSummary = ({ standalone = true }) => {
  const toc = [{ id: 'calcineurine', title: 'Calcineurine-remmers', icon: Pill }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Calcineurine-remmers"
      description="Toepassing en nefrotoxiciteit."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 10"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image10"
    >
      <section id="calcineurine" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Calcineurine-remmers</h2>
        <p className="text-slate-700 mb-4">Calcineurine-remmers zoals ciclosporine en tacrolimus worden vooral toegepast na orgaantransplantatie om afstoting te voorkomen. Ze staan bekend om hun risico op nefrotoxiciteit; de nierfunctie moet nauwlettend gemonitord worden.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image10CalcineurineRemmersSummary
