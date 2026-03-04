import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image21FramTheorieSummary = () => {
  const toc = [{ id: 'theorie', title: 'FRAM – De theorie', icon: BookOpen }]
  return (
    <SummaryLayout
      title="FRAM – De theorie"
      description="FRAM analyseert proces op papier versus praktijk."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 21"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image21"
    >
      <section id="theorie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">FRAM – De theorie</h2>
        <p className="text-slate-700 mb-4">Met een FRAM analyseer je een proces op papier (bijv. protocol of richtlijn) ten opzichte van het proces in de praktijk.</p>
        <p className="text-slate-700 mb-4">Het in kaart brengen van de variatie tussen WAI en WAD heeft niet als primair doel om te oordelen over het al dan niet volgen van protocollen. De variatie kan ook wenselijk zijn – in sommige gevallen zorgt variatie er juist voor dat het proces in de dagelijkse praktijk goed loopt. Op basis van de variatie kan besloten worden het protocol aan te passen.</p>
        <p className="text-slate-700 mb-4">Dit verschilt van een audit, waarbij protocollen als norm worden gebruikt en afwijkingen in beginsel onwenselijk worden geacht.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image21FramTheorieSummary
