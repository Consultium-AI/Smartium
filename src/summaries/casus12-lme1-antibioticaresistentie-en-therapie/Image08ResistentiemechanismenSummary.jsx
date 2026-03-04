import { Settings } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image08ResistentiemechanismenSummary = () => {
  const toc = [{ id: 'mechanismen', title: 'Resistentiemechanismen', icon: Settings }]
  return (
    <SummaryLayout
      title="Resistentiemechanismen"
      description="Vier belangrijke manieren waarop bacteriën resistent kunnen worden voor antibiotica."
      caseLabel="Week 6 Casus 12 LME 1: Afbeelding 8"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme1-antibioticaresistentie-en-therapie-image08"
    >
      <section id="mechanismen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Resistentiemechanismen</h2>
        <p className="text-slate-700 mb-4">Bacteriën kunnen op verschillende manieren resistent worden voor antibiotica. De vier belangrijkste mechanismen zijn:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li><strong>Onwerkzaam maken:</strong> het antibioticum wordt afgebroken of chemisch gemodificeerd (bijv. door beta-lactamasen)</li>
          <li><strong>Opname remmen:</strong> het antibioticum kan de cel niet binnenkomen</li>
          <li><strong>Uitpompen:</strong> het antibioticum wordt actief uit de cel gepompt (effluxpompen)</li>
          <li><strong>Doeleiwit veranderen:</strong> het doeleiwit wordt gemodificeerd zodat het antibioticum niet meer kan binden</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image08ResistentiemechanismenSummary
