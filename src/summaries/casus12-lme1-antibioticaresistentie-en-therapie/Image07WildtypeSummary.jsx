import { Target } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image07WildtypeSummary = () => {
  const toc = [{ id: 'wildtype', title: 'Wild-type gevoeligheid', icon: Target }]
  return (
    <SummaryLayout
      title="Wild-type gevoeligheid"
      description="Intrinsieke resistentie van S. aureus voor metronidazol."
      caseLabel="Week 6 Casus 12 LME 1: Afbeelding 7"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme1-antibioticaresistentie-en-therapie-image07"
    >
      <section id="wildtype" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Wild-type gevoeligheid</h2>
        <p className="text-slate-700 mb-4">S. aureus is intrinsiek resistent voor metronidazol. Metronidazol is alleen werkzaam op anaerobe bacteriën. S. aureus is facultatief anaeroob maar overwegend aeroob groeiend. Metronidazol is daarmee niet bruikbaar voor de behandeling van infecties met S. aureus. Alleen strikt anaerobe bacteriën (en enkele parasieten) zijn gevoelig voor metronidazol.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image07WildtypeSummary
